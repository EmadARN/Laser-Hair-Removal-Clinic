import { daysOfWeek } from "@/constants";
import dayjs from "dayjs";
import jalaali from "jalaali-js";

// تابعی برای پیدا کردن روز هفته
const getDayOfWeek = (jalaliDate) => {
  const [year, month, day] = jalaliDate.split("/").map(Number);
  const gregorian = jalaali.toGregorian(year, month, day);
  const date = dayjs(new Date(gregorian.gy, gregorian.gm - 1, gregorian.gd));
  const dayOfWeek = date.day(); // 0 برای یکشنبه، 6 برای شنبه
  return (dayOfWeek + 1) % 7; // تبدیل 0 (یکشنبه) به 6 (شنبه) و ... 1 (دوشنبه) به 0 (یکشنبه)
};

// تابع اصلی برای دسته‌بندی بر اساس روزهای هفته
export const groupByWeekdays = (data) => {
  const groupedData = data.reduce((acc, item) => {
    const dayOfWeek = getDayOfWeek(item.date_str);

    // روزهای هفته به ترتیب: شنبه (0) تا جمعه (6)
    if (!acc[dayOfWeek]) {
      acc[dayOfWeek] = [];
    }

    acc[dayOfWeek].push(item);
    return acc;
  }, {});

  // خروجی نهایی
  return daysOfWeek.map((day, index) => ({
    day,
    shifts: groupedData[index] || [],
  }));
};
