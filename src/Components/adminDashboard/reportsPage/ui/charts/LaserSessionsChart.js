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
import { persianMonths } from "@/constants";

// ثبت ماژول‌های Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const LaserSessionsChart = () => {
  const data = {
    labels: persianMonths,
    datasets: [
      {
        label: "تعداد جلسات لیزر",
        data: [5, 8, 12, 7, 10, 6, 9], // تعداد جلسات لیزر در هر روز
        backgroundColor: "#7563DC",
        borderColor: "#1111",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // موقعیت لِیبل‌ها
      },
      tooltip: {
        enabled: true, // نمایش Tooltip
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

export default LaserSessionsChart;
