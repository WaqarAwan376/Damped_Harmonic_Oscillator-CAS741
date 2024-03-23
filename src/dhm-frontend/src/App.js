import "./App.css";
import React, { useCallback, useEffect, useState } from "react";

import { Header } from "./components/Header";
import { SimulatorScreen } from "./components/SimulatorScreen";
import { checkCalculatorValidation } from "./utils/checkCalculatorValidation";

function App() {
  const [calculationValues, setCalculationValues] = useState({});
  const [graphData, setGraphData] = useState([]);

  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const getMotionTrace = useCallback(
    debounce(() => {
      if (checkCalculatorValidation(calculationValues).status) {
        fetch("http://127.0.0.1:5000/calculate_motion", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(calculationValues),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setGraphData(data.displacement_trace.flat());
          });
      } else {
        console.log("Show error on the screen");
      }
    }, 800),
    [calculationValues]
  );

  useEffect(() => {
    if (Object.keys(calculationValues).length !== 0) {
      // Prevent initial fetch on component mount
      getMotionTrace();
    }
  }, [getMotionTrace, calculationValues]); // Added calculationValues as a dependency to re-trigger useEffect when values change
  // useEffect(() => {
  //   getMotionTrace();
  // }, [getMotionTrace]);

  return (
    <div>
      <Header />
      <SimulatorScreen
        setCalculationValues={setCalculationValues}
        calculationValues={calculationValues}
        graphData={graphData}
      />
    </div>
  );
}

export default App;
