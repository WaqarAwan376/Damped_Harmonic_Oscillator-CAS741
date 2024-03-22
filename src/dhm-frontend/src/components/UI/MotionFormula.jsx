import React from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css"; // Import KaTeX CSS

export const MotionFormula = () => {
  return (
    <div className="select-none">
      <BlockMath>{String.raw`m\frac{d^2x}{dt^2} + b\frac{dx}{dt} + kx = F(t)`}</BlockMath>
    </div>
  );
};
