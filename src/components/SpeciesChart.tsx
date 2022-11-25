import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface PropsFromState {}

interface propsFromDispatch {}

type AllProps = PropsFromState & propsFromDispatch;

const data = [
  { x: 100, y: 200 },
  { x: 120, y: 100 },
  { x: 170, y: 300 },
  { x: 140, y: 250 },
  { x: 150, y: 400 },
  { x: 110, y: 280 },
];

const SpeciesChart: React.FC<AllProps> = () => {
  return (
    <>
      <ScatterChart
        width={400}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
        style={{ fontSize: "15px" }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="A school" data={data} fill="#8884d8" />
      </ScatterChart>
    </>
  );
};

export default SpeciesChart;
