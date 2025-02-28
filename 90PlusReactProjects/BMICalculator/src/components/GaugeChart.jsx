import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Label,
} from "recharts";

const GaugeChart = ({ value }) => {
  const RADIAN = Math.PI / 180;
  const width = 400;
  const height = 250;

  // Gauge sections
  const slices = [
    { value: 25, color: "#DC9556" }, // Underweight
    { value: 25, color: "#9BBE6F" }, // Normal
    { value: 25, color: "#508B2C" }, // Overweight
    { value: 25, color: "#C0392B" }, // Obesity
  ];

  const sumValues = slices.reduce((sum, slice) => sum + slice.value, 0);
  const percentage = Math.max(0, Math.min(value, 100)); // Clamp value between 0-100

  // Arrow position data
  const arrowData = [
    { value: percentage },
    { value: 0 },
    { value: sumValues - percentage },
  ];

  const pieProps = {
    startAngle: 180,
    endAngle: 0,
    cx: "50%",
    cy: "90%",
  };

  // Custom Arrow Indicator
  const Arrow = ({ cx, cy, midAngle, outerRadius }) => {
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const mx = cx + (outerRadius + width * 0.05) * cos;
    const my = cy + (outerRadius + width * 0.05) * sin;

    return (
      <g>
        <path
          d={`M${cx},${cy} L${mx},${my}`}
          strokeWidth="5"
          stroke="black"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx={cx} cy={cy} r={10} fill="black" stroke="none" />
      </g>
    );
  };

  return (
    <div className="w-full flex flex-col items-center">
      <ResponsiveContainer width={width} height={height}>
        <PieChart>
          {/* Background Gauge */}
          <Pie
            data={slices}
            innerRadius={80}
            outerRadius={100}
            dataKey="value"
            stroke="none"
            {...pieProps}
          >
            {slices.map((slice, i) => (
              <Cell key={i} fill={slice.color} />
            ))}
          </Pie>

          {/* Arrow Indicator */}
          <Pie
            data={arrowData}
            innerRadius={70}
            outerRadius={90}
            fill="none"
            stroke="none"
            activeIndex={1}
            activeShape={Arrow}
            {...pieProps}
          >
            <Label
              value={`${value}%`}
              position="centerBottom"
              offset={-20}
              fontSize="20px"
              fontWeight="bold"
            />
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Labels for the gauge sections */}
      <div className="flex justify-between w-3/4 text-sm mt-2">
        <span className="text-gray-600">Underweight</span>
        <span className="text-gray-600">Normal</span>
        <span className="text-gray-600">Overweight</span>
        <span className="text-gray-600">Obesity</span>
      </div>
    </div>
  );
};

export default GaugeChart;
