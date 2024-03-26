import React from "react";

export const CustomRadioBtn = ({
  value,
  text,
  name,
  defaultChecked,
  onChange,
}) => {
  return (
    <div className="flex items-center mb-4">
      <input
        id={`radio_btn_${text}`}
        type="radio"
        value={value}
        name={name}
        className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 
        dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 
        dark:border-gray-600`}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <label
        htmlFor={`radio_btn_${text}`}
        className="ms-2 text-sm font-medium dark:text-gray-300"
      >
        {text}
      </label>
    </div>
  );
};
