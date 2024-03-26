import React, { useEffect, useState, useRef } from "react";
import debounce from "lodash/debounce";

import { Header } from "./components/Header";
import { SimulatorScreen } from "./components/SimulatorScreen";
import { checkCalculatorValidation } from "./utils/checkCalculatorValidation";
import { API_ENDPOINTS } from "./constants/api";

function App() {
  const [calculationValues, setCalculationValues] = useState({});
  const [graphData, setGraphData] = useState([]);
  const [velocityGraphData, setVelocityGraphData] = useState([]);
  const [dampingStatus, setDampingStatus] = useState();

  const debouncedGetMotionTrace = useRef(
    debounce((values) => {
      if (checkCalculatorValidation(values).status) {
        fetch(API_ENDPOINTS.calculateMotion, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        })
          .then((res) => res.json())
          .then((data) => {
            setGraphData(data.displacement_trace.flat());
            setVelocityGraphData(data.velocity_trace.flat());
            setDampingStatus(data.oscillator_status);
          });
      } else {
        console.log("Show error on the screen");
      }
    }, 1000)
  );

  useEffect(() => {
    if (Object.keys(calculationValues).length !== 0) {
      debouncedGetMotionTrace.current(calculationValues);
    }

    return () => {
      debouncedGetMotionTrace.current.cancel();
    };
  }, [calculationValues]);

  return (
    <div>
      <Header />
      <SimulatorScreen
        setCalculationValues={setCalculationValues}
        calculationValues={calculationValues}
        graphData={graphData}
        velocityGraphData={velocityGraphData}
        dampingStatus={dampingStatus}
      />
    </div>
  );
}

export default App;
