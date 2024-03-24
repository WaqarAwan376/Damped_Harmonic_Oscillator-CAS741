import "./App.css";
import React, { useCallback, useEffect, useState } from "react";

import { Header } from "./components/Header";
import { SimulatorScreen } from "./components/SimulatorScreen";
import { checkCalculatorValidation } from "./utils/checkCalculatorValidation";
import { API_ENDPOINTS } from "./constants/api";

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
        fetch(API_ENDPOINTS.calculateMotion, {
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
      getMotionTrace();
    }
  }, [getMotionTrace, calculationValues]);

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
