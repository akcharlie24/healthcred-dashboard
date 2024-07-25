"use client";

import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
} from "chart.js";
import { Pie, Bar, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
);

const data = {
  hospital_name: "General Hospital",
  claimbook_uhid: "UHID123456",
  total_limit_allocated: 1000000,
  subvention_per_claim: 10000,
  repayment_tenure: "24 months",
  current_limit_utilised_percentage: 60,
  current_unutilised_funds_percentage: 40,
  current_limit_utilised: 600000,
  current_unutilised_funds: 400000,
  bill_amount_discounted_to_date: 300000,
  amount_repaid_to_date: 150000,
  interest_paid_on_borrowed_amt_to_date: 5000,
  upcoming_repayment_date: "2024-08-01",
  disbursals_amount: 100000,
  repayments_amount: 80000,
  total_interest_amount: 2000,
  total_due: 120000,
  amount_to_be_repaid_on_upcoming_date: 30000,
  claims_data: {
    claim_1: {
      claim_id: "C12345",
      claim_amount: 20000,
      claim_date: "2024-01-15",
      claim_status: "Paid",
    },
    claim_2: {
      claim_id: "C12346",
      claim_amount: 35000,
      claim_date: "2024-02-10",
      claim_status: "Pending",
    },
    claim_3: {
      claim_id: "C12347",
      claim_amount: 15000,
      claim_date: "2024-03-20",
      claim_status: "Paid",
    },
  },
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      font: {
        size: 16,
        weight: "bold",
      },
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      titleFont: {
        size: 14,
        weight: "bold",
      },
      bodyFont: {
        size: 12,
      },
      padding: 10,
      cornerRadius: 4,
      displayColors: false,
    },
  },
  animation: {
    duration: 2000,
    easing: "easeOutQuart",
  },
};

export const LimitUtilizationPieChart = () => {
  const chartData = {
    labels: ["Utilized", "Unutilized"],
    datasets: [
      {
        data: [
          data.current_limit_utilised_percentage,
          data.current_unutilised_funds_percentage,
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
        text: "Limit Utilization",
      },
    },
  };

  // @ts-ignore
  return <Pie data={chartData} options={options} />;
};

export const BillRepaymentComparisonBarChart = () => {
  const chartData = {
    labels: ["Bill Amount", "Amount Repaid"],
    datasets: [
      {
        label: "Amount",
        data: [data.bill_amount_discounted_to_date, data.amount_repaid_to_date],
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

  return <Bar data={chartData} options={options} />;
};

export const RepaymentsOverTimeLineChart = () => {
  const chartData = {
    labels: ["Previous Repayment", "Current Date", "Upcoming Repayment"],
    datasets: [
      {
        label: "Repayment Amount",
        data: [
          data.amount_repaid_to_date,
          data.amount_repaid_to_date,
          data.amount_repaid_to_date +
            data.amount_to_be_repaid_on_upcoming_date,
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

  return <Line data={chartData} options={options} />;
};

export const ClaimsOverviewBarChart = () => {
  const claimAmounts = Object.values(data.claims_data).map(
    (claim) => claim.claim_amount,
  );
  const claimIds = Object.values(data.claims_data).map(
    (claim) => claim.claim_id,
  );

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

  return <Bar data={chartData} options={options} />;
};

export const ClaimsStatusPieChart = () => {
  const statusCounts = Object.values(data.claims_data).reduce((acc, claim) => {
    acc[claim.claim_status] = (acc[claim.claim_status] || 0) + 1;
    return acc;
  }, {});

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

  return <Pie data={chartData} options={options} />;
};

const HospitalFinancialDashboard = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-lg bg-white p-4 shadow-md">
        <LimitUtilizationPieChart />
      </div>
      <div className="rounded-lg bg-white p-4 shadow-md">
        <FinancialOverviewBarChart />
      </div>
      <div className="rounded-lg bg-white p-4 shadow-md">
        <BillRepaymentComparisonBarChart />
      </div>
      <div className="rounded-lg bg-white p-4 shadow-md">
        <RepaymentsOverTimeLineChart />
      </div>
      <div className="rounded-lg bg-white p-4 shadow-md">
        <ClaimsOverviewBarChart />
      </div>
      <div className="rounded-lg bg-white p-4 shadow-md">
        <ClaimsStatusPieChart />
      </div>
    </div>
  );
};

export default HospitalFinancialDashboard;
