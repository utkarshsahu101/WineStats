import React from "react";
import { wineData } from "../constants";
import Graph from "./Graph";

const ChartWrapper = () => {
  const getLineData = () => {
    let xAxisData: Array<string | number> = [];
    let yAxisData: Array<string | number> = [];
    wineData.forEach((wine) => {
      xAxisData.push(parseFloat(String(wine?.Flavanoids)));
      yAxisData.push(parseFloat(String(wine?.Ash)));
    });
    const option: any = {
      grid: { top: 30, right: 40, bottom: 45, left: 50 },
      xAxis: {
        type: "category",
        data: xAxisData,
      },
      yAxis: {
        type: "value",
        name: "Ash",
        nameLocation: "center",
        nameGap: 30,
      },
      legend: {
        data: ["Flavanoids"],
        bottom: 0,
      },
      series: [
        {
          name: "Flavanoids",
          data: yAxisData,
          type: "line",
          smooth: true,
        },
      ],
      tooltip: {
        trigger: "axis",
      },
    };
    return option;
  };
  const getBarData = () => {
    let xAxisData: Array<string | number> = [];
    let yAxisData: Array<string | number> = [];
    wineData.forEach((wine) => {
      xAxisData.push(parseFloat(String(wine?.Alcohol)));
      yAxisData.push(parseFloat(String(wine?.Magnesium)));
    });
    const option = {
      grid: { top: 30, right: 40, bottom: 45, left: 50 },
      xAxis: {
        type: "category",
        data: xAxisData,
        label: {
          show: false,
          textBorderColor: "red",
          textBorderWidth: 2,
        },
      },
      legend: {
        data: ["Alcohol"],
        bottom: 0,
      },
      yAxis: {
        type: "value",
        name: "Magnesium",
        nameLocation: "center",
        nameGap: 30,
      },
      series: [
        {
          name: "Alcohol",
          data: yAxisData,
          type: "bar",
          smooth: true,
        },
      ],
      tooltip: {
        trigger: "axis",
      },
    };
    return option;
  };
  return (
    <React.Fragment>
      {/* line chart */}
      <Graph getData={getLineData} />
      {/* bar chart */}
      <Graph getData={getBarData} />
    </React.Fragment>
  );
};

export default ChartWrapper;
