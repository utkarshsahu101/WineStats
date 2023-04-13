import React from "react";
import ReactEcharts from "echarts-for-react";

interface Props {
  getData: () => void;
}

const Graph = ({ getData }: Props) => {
  return (
    <ReactEcharts
      option={getData()}
      style={{ height: "45vh", left: 50, top: 50, width: "90vw" }}
    />
  );
};

export default Graph;
