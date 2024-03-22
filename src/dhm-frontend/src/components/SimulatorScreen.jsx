import React from "react";
import { Configurer } from "./Configurer";
import { Simulation } from "./Simulation";

export const UI = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex-1 bg-userPrimary h-screen text-white">
          <Configurer />
        </div>
        <div className="flex-1 basis-3/5">
          <Simulation />
        </div>
      </div>
    </div>
  );
};
