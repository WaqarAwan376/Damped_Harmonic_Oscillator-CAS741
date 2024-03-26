import React from "react";

export const DampingStatus = ({ isTrue, className }) => {
  return (
    <div
      className={`w-6 h-6 ${
        isTrue ? "bg-green-500" : "bg-gray-300"
      } rounded-full ${className}`}
    ></div>
  );
};
