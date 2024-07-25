// "use client";
// import React from "react";
// import { Pie } from "react-chartjs-2";
// import { ChartData, ChartOptions } from "chart.js";
// import "@/components/charts/chartSetup";
//
// interface TotalDueBreakdownProps {
//   totalDue: number;
//   totalInterestAmount: number;
// }
//
// const TotalDueBreakdown: React.FC<TotalDueBreakdownProps> = ({
//   totalDue,
//   totalInterestAmount,
// }) => {
//   const principalAmount = totalDue - totalInterestAmount;
//
//   const data: ChartData<"pie"> = {
//     labels: ["Principal Amount", "Interest Amount"],
//     datasets: [
//       {
//         data: [principalAmount, totalInterestAmount],
//         backgroundColor: ["#FF6384", "#36A2EB"],
//       },
//     ],
//   };
//
//   const options: ChartOptions<"pie"> = {};
//
//   return <Pie data={data} options={options} />;
// };
//
// export default TotalDueBreakdown;

"use client";

import "./chartSetup";
import React from "react";
import { Pie } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import { chartOptions } from "./chartOptions";

interface TotalDueBreakdownProps {
  totalDue: number;
  totalInterestAmount: number;
}

export const TotalDueBreakdown: React.FC<TotalDueBreakdownProps> = ({
  totalDue,
  totalInterestAmount,
}) => {
  const principalAmount = totalDue - totalInterestAmount;

  const chartData: ChartData<"pie"> = {
    labels: ["Principal Amount", "Interest Amount"],
    datasets: [
      {
        data: [principalAmount, totalInterestAmount],
        backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
        ],
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      // @ts-ignore
      title: {
        ...chartOptions.plugins.title,
        text: "Total Due Breakdown",
      },
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.formattedValue;
            const total = context.dataset.data.reduce(
              (a: number, b: number) => a + b,
              0,
            );
            const percentage = ((context.parsed / total) * 100).toFixed(2);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
    layout: {
      padding: 20,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  return <Pie data={chartData} options={options} />;
};

export default TotalDueBreakdown;
