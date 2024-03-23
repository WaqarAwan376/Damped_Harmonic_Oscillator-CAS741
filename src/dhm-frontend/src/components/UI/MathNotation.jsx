import React from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const MathNotation = ({ str }) => {
  return (
    <div className="select-none">
      <BlockMath>{str}</BlockMath>
    </div>
  );
};
//
