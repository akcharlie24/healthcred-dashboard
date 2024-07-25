"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";
import "@/components/charts/chartSetup";

interface TotalDueBreakdownProps {
  totalDue: number;
  totalInterestAmount: number;
}

const TotalDueBreakdown: React.FC<TotalDueBreakdownProps> = ({
  totalDue,
  totalInterestAmount,
}) => {
  const principalAmount = totalDue - totalInterestAmount;

  const data: ChartData<"pie"> = {
    labels: ["Principal Amount", "Interest Amount"],
    datasets: [
      {
        data: [principalAmount, totalInterestAmount],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  const options: ChartOptions<"pie"> = {};

  return <Pie data={data} options={options} />;
};

export default TotalDueBreakdown;
