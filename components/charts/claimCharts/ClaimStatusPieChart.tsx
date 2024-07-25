"use client";
import "../chartSetup";
import React from "react";
import { Pie } from "react-chartjs-2";
import { chartOptions } from "../chartOptions";

interface Claim {
  claim_status: string;
}

interface ClaimsStatusPieChartProps {
  claims: Claim[];
}

export const ClaimsStatusPieChart: React.FC<ClaimsStatusPieChartProps> = ({
  claims,
}) => {
  const statusCounts = claims.reduce(
    (acc, claim) => {
      acc[claim.claim_status] = (acc[claim.claim_status] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const chartData = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
        ],
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
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
        text: "Claims Status",
      },
    },
  };

  // @ts-ignore
  return <Pie data={chartData} options={options} />;
};
