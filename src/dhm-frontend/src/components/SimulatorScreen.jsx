import React from "react";
import { Configurer } from "./Configurer";
import { Simulation } from "./Simulation";

export const SimulatorScreen = ({
  setCalculationValues,
  calculationValues,
  graphData,
}) => {
  return (
    <div>
      <div className="flex">
        <div className="flex-1 bg-userPrimary h-screen text-white">
          <Configurer
            setCalculationValues={setCalculationValues}
            calculationValues={calculationValues}
          />
        </div>
        <div className="flex-1 basis-3/5">
          <Simulation graphData={graphData} />
        </div>
      </div>
    </div>
  );
};
