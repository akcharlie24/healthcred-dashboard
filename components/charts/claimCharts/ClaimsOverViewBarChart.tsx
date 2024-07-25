"use client";
import "../chartSetup";
import React from "react";
import { Bar } from "react-chartjs-2";
import { chartOptions } from "../chartOptions";

interface Claim {
  claim_id: string;
  claim_amount: number;
}

interface ClaimsOverviewBarChartProps {
  claims: Claim[];
}

export const ClaimsOverviewBarChart: React.FC<ClaimsOverviewBarChartProps> = ({
  claims,
}) => {
  const claimAmounts = claims.map((claim) => claim.claim_amount);
  const claimIds = claims.map((claim) => claim.claim_id);

  const chartData = {
    labels: claimIds,
    datasets: [
      {
        label: "Claim Amount",
        data: claimAmounts,
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(153, 102, 255, 0.8)",
      },
    ],
  };

  const options = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      title: {
        ...chartOptions.plugins.title,
        text: "Claims Overview",
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
