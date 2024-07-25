"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import "@/components/charts/chartSetup";

interface DisbursalsAndRepaymentsProps {
  disbursalsAmount: number;
  repaymentsAmount: number;
}

const DisbursalsAndRepayments: React.FC<DisbursalsAndRepaymentsProps> = ({
  disbursalsAmount,
  repaymentsAmount,
}) => {
  const data: ChartData<"pie"> = {
    labels: ["Disbursals", "Repayments"],
    datasets: [
      {
        data: [disbursalsAmount, repaymentsAmount],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  const options: ChartOptions<"pie"> = {};

  return <Pie data={data} options={options} />;
};

export default DisbursalsAndRepayments;
