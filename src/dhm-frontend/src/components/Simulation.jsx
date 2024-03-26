import React from "react";
import Paper from "@mui/material/Paper";
import { MotionGraph } from "./MotionGraph";
import { DampingStatus } from "./DampingStatus";
import { MathNotation } from "./UI/MathNotation";

export const Simulation = ({ graphData, velocityGraphData, dampingStatus }) => {
  return (
    <div>
      <h1 className="text-center font-bold my-3 text-2xl">DHM Simulation </h1>

      <div className="container px-4 mb-8">
        <div className="my-3 flex justify-center items-center">
          <div className="flex justify-center items-center mx-3">
            <DampingStatus
              isTrue={dampingStatus === "under"}
              className={"mx-2"}
            />
            <div className="flex items-center">
              <MathNotation str={"b^2 < 4mk"} />
              &nbsp;(Under damped)
            </div>
          </div>
          <div className="flex justify-center items-center mx-3">
            <DampingStatus
              isTrue={dampingStatus === "equal"}
              className={"mx-2"}
            />
            <div className="flex items-center">
              <MathNotation str={"b^2 = 4mk"} />
              &nbsp;(Critically damped)
            </div>
          </div>
          <div className="flex justify-center items-center mx-3">
            <DampingStatus
              isTrue={dampingStatus === "over"}
              className={"mx-2"}
            />
            <div className="flex items-center">
              <MathNotation str={"b^2 >> 4mk"} />
              &nbsp;(Over damped)
            </div>
          </div>
        </div>

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
