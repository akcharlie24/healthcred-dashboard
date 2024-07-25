// "use client";
// import React from "react";
// import { Pie } from "react-chartjs-2";
// import { ChartData, ChartOptions } from "chart.js";
// import "@/components/charts/chartSetup";
//
// interface DisbursalsAndRepaymentsProps {
//   disbursalsAmount: number;
//   repaymentsAmount: number;
// }
//
// const DisbursalsAndRepayments: React.FC<DisbursalsAndRepaymentsProps> = ({
//   disbursalsAmount,
//   repaymentsAmount,
// }) => {
//   const data: ChartData<"pie"> = {
//     labels: ["Disbursals", "Repayments"],
//     datasets: [
//       {
//         data: [disbursalsAmount, repaymentsAmount],
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
// export default DisbursalsAndRepayments;

"use client";

import "./chartSetup";
import React from "react";
import { Pie } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import { chartOptions } from "./chartOptions";

interface DisbursalsAndRepaymentsProps {
  disbursalsAmount: number;
  repaymentsAmount: number;
}

export const DisbursalsAndRepayments: React.FC<
  DisbursalsAndRepaymentsProps
> = ({ disbursalsAmount, repaymentsAmount }) => {
  const chartData: ChartData<"pie"> = {
    labels: ["Disbursals", "Repayments"],
    datasets: [
      {
        data: [disbursalsAmount, repaymentsAmount],
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
        text: "Disbursals vs Repayments",
      },
      legend: {
        position: "bottom",
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

export default DisbursalsAndRepayments;
