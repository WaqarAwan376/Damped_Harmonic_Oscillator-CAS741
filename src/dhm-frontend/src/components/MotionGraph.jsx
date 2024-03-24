import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export const MotionGraph = ({ graphData }) => {
  const formattedData =
    graphData &&
    graphData.map((value, index) => ({
      index: `Index ${index}`,
      value,
    }));
  return (
    <div className="p-7" style={{ height: "500px" }}>
      {formattedData.length === 0 && (
        <h1 className="text-center font-bold text-2xl">No Data Found!</h1>
      )}
      {formattedData.length !== 0 && (
        <LineChart
          width={900}
          height={500}
          style={{ margin: "auto" }}
          data={formattedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis
            dataKey="value"
            label={{
              value: "Displacement",
              angle: -90,
              position: "insideLeft",
              style: { fontWeight: "bold" },
            }}
          />
          <Tooltip />
          <Line
            type="linear"
            dataKey="value"
            stroke="#3b3939"
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      )}
    </div>
  );
};
