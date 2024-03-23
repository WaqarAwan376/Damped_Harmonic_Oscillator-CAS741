import InputNumber from "rc-input-number";
import React from "react";

export const NumberInputBasic = ({
  allowNegativeVal = false,
  step = 0.5,
  defaultValue = 0,
  setCalculationValues,
  calculationValues,
  inputType = "",
}) => {
  return (
    <div>
      <InputNumber
        aria-label="Simple number input example"
        style={{ color: "black" }}
        keyboard={true}
        stringMode={false}
        {...(allowNegativeVal ? {} : { min: 0 })}
        step={step}
        placeholder="Enter a number"
        onChange={(val) => {
          const configValues = {
            ...calculationValues,
          };
          configValues[inputType] = val;
          setCalculationValues(configValues);
        }}
      />
    </div>
  );
};
