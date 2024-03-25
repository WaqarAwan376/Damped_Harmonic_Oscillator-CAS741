import InputNumber from "rc-input-number";
import React from "react";

export const NumberInputBasic = ({
  allowNegativeVal = false,
  step = 0.5,
  defaultValue = 0.0,
  setCalculationValues,
  calculationValues,
  inputType = "",
  placeholder,
  externalForceType,
  onChangeHandler,
}) => {
  // const onChangeHandler = (val) => {
  //   const configValues = {
  //     ...calculationValues,
  //   };
  //   if (inputType === "external_force" && externalForceType) {
  //     configValues[inputType] = {
  //       type: externalForceType,
  //       value: val,
  //     };
  //     console.log(configValues);
  //   } else {
  //     configValues[inputType] = val;
  //   }
  //   setCalculationValues(configValues);
  // };
  return (
    <InputNumber
      className={"text-gray-900 text-sm rounded-lg"}
      keyboard={true}
      stringMode={false}
      {...(allowNegativeVal ? {} : { min: 0 })}
      step={step}
      type="number"
      inputMode="decimal"
      placeholder={placeholder}
      onChange={(val) => onChangeHandler(val, inputType)}
      defaultValue={0.0}
    />
  );
};
