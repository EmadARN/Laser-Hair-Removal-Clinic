import { persianMonths } from "@/constants";
import { fetchWeekData } from "@/features/adminDashboard/adminThunks";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useDataSliderLogic = () => {
  const dispatch = useDispatch();
  const { dateRanges } = useSelector((state) => state.adminDashboard);
  const [currentRange, setCurrentRange] = useState(0); // نگه‌داشتن بازه فعلی

  useEffect(() => {
    dispatch(fetchWeekData(currentRange)); // بارگذاری داده‌های هفته بر اساس ایندکس فعلی
  }, [dispatch, currentRange]);

  const dateHandler = (type) => {
    let newIndex = currentRange;
    type === "next" ? newIndex++ : newIndex--;

    if (newIndex >= dateRanges.length) {
      newIndex = dateRanges.length - 1;
    } else if (newIndex < 0) {
      newIndex = 0;
    }

    setCurrentRange(newIndex); // به‌روزرسانی ایندکس فعلی
  };

  // دسترسی به تاریخ مربوط به ایندکس فعلی
  const currentDate = dateRanges.date; // بررسی وجود تاریخ

  // تبدیل تاریخ شمسی به میلادی و محاسبه تاریخ‌های شروع و پایان
  const startDate = new Date(currentDate); // فرض کنید تاریخ در فرمت مناسب است
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 7); // تاریخ پایان (جمعه)

  // تاریخ شروع
  const formattedStart = `${startDate.getDate()} ${
    persianMonths[startDate.getMonth()]
  }`;

  // تاریخ پایان
  const formattedEnd = `${endDate.getDate()} ${
    persianMonths[endDate.getMonth()]
  }`;

  return {
    dateRanges,
    formattedStart,
    formattedEnd,
    dateHandler,
    currentRange,
    currentDate,
  };
};

export default useDataSliderLogic;
