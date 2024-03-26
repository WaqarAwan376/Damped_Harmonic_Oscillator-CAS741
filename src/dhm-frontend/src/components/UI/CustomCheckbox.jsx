import React from "react";

export const CustomCheckbox = ({ heading, subheading = "", onChange }) => {
  return (
    <div className="flex my-2">
      <div className="flex items-center h-5">
        <input
          id={`checkbox_${heading}`}
          aria-describedby="helper-checkbox-text"
          type="checkbox"
          value=""
          className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500
           dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 
           dark:border-gray-600`}
          onChange={onChange}
        />
      </div>
      <div className="ms-2 text-sm select-none">
        <label
          htmlFor={`checkbox_${heading}`}
          className="font-medium dark:text-gray-300"
        >
          {heading}
        </label>
        <p
          id={`checkbox_text_${subheading}`}
          className="text-xs font-normal text-gray-500 dark:text-gray-300"
        >
          {subheading}
        </p>
      </div>
    </div>
  );
};
