import React from "react";
import Paper from "@mui/material/Paper";
import { MotionGraph } from "./MotionGraph";

export const Simulation = ({ graphData, velocityGraphData }) => {
  return (
    <div>
      <h1 className="text-center font-bold my-3 text-2xl">DHM Simulation </h1>

      <div className="container px-4 mb-8">
        <Paper elevation={6}>
          <div className="mx-auto p-7">
            <MotionGraph graphData={graphData} yLabel={"Displacement"} />
          </div>
        </Paper>
      </div>
      <div className="container px-4 mb-8">
        <Paper elevation={6}>
          <div className="mx-auto p-7">
            <MotionGraph graphData={velocityGraphData} yLabel={"Velocity"} />
          </div>
        </Paper>
      </div>
    </div>
  );
};
