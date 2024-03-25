import InputNumber from "rc-input-number";
import React from "react";

export const NumberInputBasic = ({
  allowNegativeVal = false,
  step = 0.5,
  inputType = "",
  placeholder,
  onChangeHandler,
  value,
}) => {
  return (
    <InputNumber
      className={"text-gray-900 text-sm rounded-lg text-center"}
      keyboard={true}
      stringMode={false}
      {...(allowNegativeVal ? {} : { min: 0 })}
      step={step}
      type="number"
      inputMode="decimal"
      placeholder={placeholder}
      onChange={(val) => onChangeHandler(val, inputType)}
      defaultValue={0.0}
      value={value}
    />
  );
};
