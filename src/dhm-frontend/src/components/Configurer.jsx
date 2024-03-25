import React, { useEffect, useState } from "react";
import { MathNotation } from "./UI/MathNotation";
import { NumberInputBasic } from "./UI/NumberInputBasic";
import { CustomCheckbox } from "./UI/CustomCheckbox";
import { CustomRadioBtn } from "./UI/CustomRadioBtn";

export const Configurer = ({ setCalculationValues, calculationValues }) => {
  const [isExternalForceSelected, setIsExternalForceSelected] = useState(false);
  const [externalForceType, setExternalForceType] = useState("constant");
  const [isNonLinearSelected, setIsNonLinearSelected] = useState(false);

  useEffect(() => {
    if (isNonLinearSelected) {
      const configValues = {
        ...calculationValues,
      };
      configValues.non_linearity =
        calculationValues.non_linearity?.value ?? 0.0;
      setCalculationValues(configValues);
    } else {
      const configValues = {
        ...calculationValues,
      };
      delete configValues?.non_linearity;
      setCalculationValues(configValues);
    }
  }, [isNonLinearSelected]);

  useEffect(() => {
    if (isExternalForceSelected) {
      const configValues = {
        ...calculationValues,
      };
      configValues.external_force = {
        type: externalForceType,
        value: calculationValues.external_force?.value ?? 0.0,
      };
      setCalculationValues(configValues);
    } else {
      const configValues = {
        ...calculationValues,
      };
      delete configValues?.external_force;
      setCalculationValues(configValues);
    }
  }, [isExternalForceSelected]);

  const onCheckHandler = (val) => {
    setExternalForceType(val.target.value);
    const configValues = {
      ...calculationValues,
    };
    configValues.external_force = {
      type: val.target.value,
      value: calculationValues.external_force?.value ?? 0.0,
    };
    setCalculationValues(configValues);
  };
  const onNumberChangeHandler = (val, inputType) => {
    const configValues = {
      ...calculationValues,
    };
    if (inputType === "external_force" && externalForceType) {
      configValues[inputType] = {
        type: externalForceType,
        value: val,
      };
    } else {
      configValues[inputType] = val;
    }
    setCalculationValues(configValues);
  };

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
            inputType="mass"
            placeholder={"Enter a number(0.1-10)"}
            onChangeHandler={onNumberChangeHandler}
          />
        </div>
        <div className="flex items-center justify-between">
          <MathNotation str={"c="} />
          <NumberInputBasic
            inputType="damping_coefficient"
            placeholder={"Enter a number"}
            onChangeHandler={onNumberChangeHandler}
          />
        </div>
        <div className="flex items-center justify-between">
          <MathNotation str={"k="} />
          <NumberInputBasic
            inputType="spring_constant"
            placeholder={"Enter a number"}
            onChangeHandler={onNumberChangeHandler}
            allowNegativeVal={true}
          />
        </div>
        <div className="flex items-center justify-between">
          <MathNotation str={"x_0="} />
          <NumberInputBasic
            allowNegativeVal={true}
            inputType="initial_displacement"
            placeholder={"Enter a number"}
            onChangeHandler={onNumberChangeHandler}
          />
        </div>
        <div className="flex items-center justify-between">
          <MathNotation str={"v_0="} />
          <NumberInputBasic
            inputType="initial_velocity"
            placeholder={"Enter a number"}
            onChangeHandler={onNumberChangeHandler}
          />
        </div>

        <div>
          <div className="p-2 flex flex-col items-center">
            <CustomCheckbox
              heading={"Include External Force"}
              onChange={() => {
                setIsExternalForceSelected(!isExternalForceSelected);
              }}
            />
          </div>
          {isExternalForceSelected && (
            <div>
              <div className="my-3 flex justify-center">
                <NumberInputBasic
                  inputType="external_force"
                  placeholder={"Enter a number"}
                  onChangeHandler={onNumberChangeHandler}
                />
              </div>
              <div className="p-2 flex flex-col items-center">
                <CustomRadioBtn
                  value={"constant"}
                  text={"Constant"}
                  name={"external_force"}
                  defaultChecked
                  onChange={onCheckHandler}
                />
                <CustomRadioBtn
                  value={"sinusoidal"}
                  text={"Sinusoidal"}
                  name={"external_force"}
                  onChange={onCheckHandler}
                />
              </div>
            </div>
          )}
        </div>
        <div>
          <div className="p-2 flex flex-col items-center">
            <CustomCheckbox
              heading={"Include Non-linear Restoring Force"}
              onChange={() => {
                setIsNonLinearSelected(!isNonLinearSelected);
              }}
            />
          </div>
          {isNonLinearSelected && (
            <div className="flex items-center justify-between">
              <MathNotation str={"\\alpha="} />
              <NumberInputBasic
                inputType="non_linearity"
                placeholder={"Enter a number"}
                onChangeHandler={onNumberChangeHandler}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
