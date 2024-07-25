"use client";
import "./chartSetup";
import React from "react";
import { Pie } from "react-chartjs-2";
import { chartOptions } from "./chartOptions";

interface LimitUtilizationPieChartProps {
  currentLimitUtilisedPercentage: number;
  currentUnutilisedFundsPercentage: number;
}

export const LimitUtilizationPieChart: React.FC<
  LimitUtilizationPieChartProps
> = ({ currentLimitUtilisedPercentage, currentUnutilisedFundsPercentage }) => {
  const chartData = {
    labels: ["Utilized", "Unutilized"],
    datasets: [
      {
        data: [
          currentLimitUtilisedPercentage,
          currentUnutilisedFundsPercentage,
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)"],
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
        borderColor: "#fff",
      },
    ],
  };

  const options = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      title: {
        ...chartOptions.plugins.title,
        display: false,
      },
    },
  };

  // @ts-ignore
  return <Pie data={chartData} options={options} />;
};
