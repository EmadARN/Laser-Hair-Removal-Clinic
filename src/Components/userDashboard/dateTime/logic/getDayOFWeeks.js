import { daysOfWeek } from "@/constants";
import dayjs from "dayjs";
import jalaali from "jalaali-js";

// تابعی برای تبدیل تاریخ جلالی به روز هفته
export const convertJalaliDateToDay = (jalaliDate) => {
  const [year, month, day] = jalaliDate.split("/").map(Number); // تاریخ جلالی را جدا کرده و به عدد تبدیل می‌کنیم
  const gregorian = jalaali.toGregorian(year, month, day); // تبدیل به میلادی
  const date = dayjs(new Date(gregorian.gy, gregorian.gm - 1, gregorian.gd)); // ساخت تاریخ در dayjs
  const dayOfWeek = date.day(); // عدد روز هفته در خروجی 0 تا 6 خواهد بود (0: یکشنبه، 6: شنبه)
  return (dayOfWeek + 1) % 7; // تبدیل روز هفته میلادی به جلالی (0: شنبه، 6: جمعه)
};

// تابعی برای دریافت نام روز هفته
export const groupByWeekdays = (jalaliDate) => {
  const dayOfWeekIndex = convertJalaliDateToDay(jalaliDate);
  return daysOfWeek[dayOfWeekIndex]; // نام روز هفته را برمی‌گرداند
};
