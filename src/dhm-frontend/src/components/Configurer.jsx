import React from "react";
import { MathNotation } from "./UI/MathNotation";
import { NumberInputBasic } from "./UI/NumberInputBasic";

export const Configurer = ({ setCalculationValues, calculationValues }) => {
  return (
    <div>
      <h1 className="text-center font-bold my-3 text-xl">Configuration</h1>
      <div className="border-2 m-2">
        <MathNotation
          str={"m\\frac{d^2x}{dt^2} + b\\frac{dx}{dt} + kx = F(t)"}
        />
      </div>
      <div className="mx-2 mt-8">
        <div className="flex items-center justify-between">
          <MathNotation str={"m="} />
          <NumberInputBasic
            setCalculationValues={setCalculationValues}
            calculationValues={calculationValues}
            inputType="mass"
          />
        </div>
        <div className="flex items-center justify-between">
          <MathNotation str={"c="} />
          <NumberInputBasic
            setCalculationValues={setCalculationValues}
            calculationValues={calculationValues}
            inputType="damping_coefficient"
          />
        </div>
        <div className="flex items-center justify-between">
          <MathNotation str={"k="} />
          <NumberInputBasic
            setCalculationValues={setCalculationValues}
            calculationValues={calculationValues}
            inputType="spring_constant"
          />
        </div>
        <div className="flex items-center justify-between">
          <MathNotation str={"x_0="} />
          <NumberInputBasic
            setCalculationValues={setCalculationValues}
            calculationValues={calculationValues}
            allowNegativeVal={true}
            inputType="initial_displacement"
          />
        </div>
        <div className="flex items-center justify-between">
          <MathNotation str={"v_0="} />
          <NumberInputBasic
            setCalculationValues={setCalculationValues}
            calculationValues={calculationValues}
            inputType="initial_velocity"
          />
        </div>
        {/* <div className="flex items-center justify-between">
          <MathNotation str={"F(t)="} />
          <NumberInputBasic
            setCalculationValues={setCalculationValues}
            calculationValues={calculationValues}
            inputType="external_force"
          />
        </div> */}
      </div>
    </div>
  );
};
