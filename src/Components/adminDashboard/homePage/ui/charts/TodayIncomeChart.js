import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

// ثبت ماژول‌های Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const TodayIncomeChart = () => {
  const data = {
    labels: ["درآمد امروز تا این لحظه", "تخمین درآمد امروز"], // برچسب‌ها
    datasets: [
      {
        label: "درآمد (تومان)",
        data: [350, 650], // درآمد امروز و باقی‌مانده از هدف
        backgroundColor: ["rgba(103, 44, 221, 0.6)", "#7563DC"],
        borderColor: ["#7563DC", "rgba(201, 203, 207, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true, // شروع از صفر در محور Y
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default TodayIncomeChart;
