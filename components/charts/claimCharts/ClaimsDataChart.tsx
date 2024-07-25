"use client";
import "../chartSetup";
import React from "react";
import { Bar } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";

interface ClaimsDataChartProps {
  claims: {
    claim_id: string;
    claim_amount: number;
    claim_date: string;
    claim_status: string;
  }[];
}

const ClaimsDataChart: React.FC<ClaimsDataChartProps> = ({ claims }) => {
  const data: ChartData<"bar"> = {
    labels: claims.map((claim) => claim.claim_id),
    datasets: [
      {
        label: "Claim Amount",
        data: claims.map((claim) => claim.claim_amount),
        backgroundColor: claims.map((claim) =>
          claim.claim_status === "Paid" ? "#4BC0C0" : "#FFCE56",
        ),
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Claims Data Overview",
        font: {
          size: 18,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ClaimsDataChart;
