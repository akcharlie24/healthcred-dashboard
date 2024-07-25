export const chartOptions = {
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
