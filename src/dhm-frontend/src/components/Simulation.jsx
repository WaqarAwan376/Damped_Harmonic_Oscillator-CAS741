import React from "react";
import Paper from "@mui/material/Paper";
import { MotionGraph } from "./MotionGraph";

export const Simulation = () => {
  return (
    <div>
      <h1 className="text-center font-bold my-3 text-2xl">DHM Simulation </h1>

      <div className="container p-2">
        <Paper elevation={6}>
          <div className="w-6/12 mx-auto p-7">
            <MotionGraph />
          </div>
        </Paper>
      </div>
    </div>
  );
};
