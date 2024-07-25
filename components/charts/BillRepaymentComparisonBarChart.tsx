"use client";
import "./chartSetup";
import React from "react";
import { Bar } from "react-chartjs-2";
import { chartOptions } from "./chartOptions";

interface BillRepaymentComparisonBarChartProps {
  billAmountDiscountedToDate: number;
  amountRepaidToDate: number;
}

export const BillRepaymentComparisonBarChart: React.FC<
  BillRepaymentComparisonBarChartProps
> = ({ billAmountDiscountedToDate, amountRepaidToDate }) => {
  const chartData = {
    labels: ["Bill Amount Till Date", "Amount Repaid"],
    datasets: [
      {
        label: "Amount",
        data: [billAmountDiscountedToDate, amountRepaidToDate],
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

  const options = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      title: {
        ...chartOptions.plugins.title,
        text: "Bill vs Repayment",
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
  return <Bar data={chartData} options={options} />;
};
