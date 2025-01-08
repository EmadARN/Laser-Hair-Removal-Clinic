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

const LaserSessionsChart = ({ sessionCounts }) => {
  console.log("sessionCounts", sessionCounts);

  const data = {
    labels: persianMonths,
    datasets: [
      {
        label: "تعداد جلسات لیزر",
        data: sessionCounts, // استفاده از داده‌های جدید
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
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default LaserSessionsChart;
