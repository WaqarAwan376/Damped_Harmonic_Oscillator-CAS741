import React from "react";
import { MathNotation } from "./UI/MathNotation";
import { NumberInputBasic } from "./UI/NumberInputBasic";

export const Configurer = () => {
  return (
    <div>
      <h1 className="text-center font-bold my-3 text-xl">Configuration</h1>
      <div className="border-2 m-2">
        <MathNotation
          str={`m\\frac{d^2x}{dt^2} + b\\frac{dx}{dt} + kx = F(t)`}
        />
      </div>
      <div className="mx-2 mt-8">
        <NumberInputBasic mathString={"m="} />
        <NumberInputBasic mathString={"b="} />
        <NumberInputBasic mathString={"k="} />
        <NumberInputBasic mathString={"F(t)="} />
      </div>
    </div>
  );
};
