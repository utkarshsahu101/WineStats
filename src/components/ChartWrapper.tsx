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
  const groupBy = (array: any, key: any) => {
    // Return the end result
    return array.reduce((result: any, currentValue: any) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, {}); // empty object is the initial value for result object
  };

  const getBarData = () => {
    let xAxisData: Array<string | number> = [];
    let yAxisData: Array<string | number> = [];

    // Group by color as key to the person array
    const dataGroupedByAlcohol = groupBy(wineData, "Alcohol");
    console.log("dataGroupedByAlcohol", dataGroupedByAlcohol);
    let updatedWineData: any[] = [];
    Object.keys(dataGroupedByAlcohol).forEach((alcoholValue) => {
      const item = dataGroupedByAlcohol[alcoholValue].reduce((a: any, b: any) =>
        a["Magnesium"] < b["Magnesium"] ? a : b
      );
      updatedWineData.push(item);
    });

    updatedWineData.forEach((wine) => {
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
