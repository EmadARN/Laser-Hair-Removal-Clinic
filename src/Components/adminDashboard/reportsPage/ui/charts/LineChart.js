import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { persianMonths } from "@/constants";
import { getTodayDateYear } from "@/utils/getTodayDate";

// ثبت کامپوننت‌ها در Chart.js
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  // داده‌های چارت
  const data = {
    labels: persianMonths,
    datasets: [
      {
        label: getTodayDateYear(),
        data: [30, 20, 50, 60, 40, 80, 90],
        backgroundColor: "blue",
        borderColor: "#7563DC",
        tension: 0.3, // برای منحنی کردن خط
        fill: true, // برای پر کردن فضای زیر خط
      },
    ],
  };

  // تنظیمات چارت
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "درآمد",
        },
        beginAtZero: true, // شروع محور y از صفر
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
