import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ثبت ماژول‌های Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const TodayIncomeDoughnut = () => {
  const data = {
    labels: ["درآمد امروز", "درآمد هدف"], // برچسب‌ها
    datasets: [
      {
        label: "درآمد (تومان)",
        data: [350, 650], // درآمد امروز و باقی‌مانده از هدف
        backgroundColor: ["#7563DC", "rgba(201, 203, 207, 0.6)"],
        borderColor: ["#7563DC", "rgba(201, 203, 207, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // موقعیت لِیبل‌ها
        align: "start", // چیدمان افقی لیبل‌ها
        labels: {
          boxWidth: 12, // عرض جعبه رنگ
          padding: 15, // فاصله بین لیبل‌ها
        },
      },
      tooltip: {
        enabled: true, // نمایش Tooltip
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default TodayIncomeDoughnut;
