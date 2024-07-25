"use client";
import "./chartSetup";
import React from "react";
import { Line } from "react-chartjs-2";
import { chartOptions } from "./chartOptions";

interface RepaymentsOverTimeLineChartProps {
  amountRepaidToDate: number;
  amountToBeRepaidOnUpcomingDate: number;
}

export const RepaymentsOverTimeLineChart: React.FC<
  RepaymentsOverTimeLineChartProps
> = ({ amountRepaidToDate, amountToBeRepaidOnUpcomingDate }) => {
  const chartData = {
    labels: ["Previous Repayment", "Current Date", "Upcoming Repayment"],
    datasets: [
      {
        label: "Repayment Amount",
        data: [
          amountRepaidToDate,
          amountRepaidToDate,
          amountRepaidToDate + amountToBeRepaidOnUpcomingDate,
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
        fill: true,
      },
    ],
  };

  const options = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      title: {
        ...chartOptions.plugins.title,
        text: "Repayments Over Time",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  // @ts-ignore
  return <Line data={chartData} options={options} />;
};
