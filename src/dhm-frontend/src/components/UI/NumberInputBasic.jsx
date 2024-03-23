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
  const [value, setValue] = React.useState(0);

  const onChange = (val) => {
    console.warn("onChange:", val, typeof val);
    setValue(val);
  };
  return (
    <div>
      <InputNumber
        aria-label="Simple number input example"
        // min={-8}
        // max={10}
        style={{ color: "black" }}
        // value={value}
        // onChange={onChange}
        keyboard={true}
        stringMode={false}
        {...(allowNegativeVal ? {} : { min: 0 })}
        step={step}
        // defaultValue={defaultValue}
        placeholder="Enter a number"
        // value={value}
        onChange={(val) => {
          // setValue(val);
          // !allowNegativeVal && val >= 0 ? setValue(val) : setValue(val);
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
