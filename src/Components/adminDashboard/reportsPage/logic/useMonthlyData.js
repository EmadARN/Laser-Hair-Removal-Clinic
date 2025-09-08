import { useMemo } from "react";
import DateObject from "react-date-object";

const useMonthlyData = (dateReserve) => {
  const monthlyData = useMemo(() => {
    const sessionCounts = Array(12).fill(0); // آرایه‌ای با 12 خانه برای هر ماه
    const totalIncomes = Array(12).fill(0);

    if (dateReserve?.complete_list) {
      dateReserve.complete_list.forEach((item) => {
        const persianDate = new DateObject({
          date: item.date,
          calendar: "persian",
        });

        const monthIndex = persianDate.month.number - 1; // تبدیل ماه به ایندکس صفرمبنا

        // بررسی معتبر بودن ایندکس ماه
        if (monthIndex >= 0 && monthIndex < 12) {
          sessionCounts[monthIndex] += 1; // اضافه کردن به تعداد جلسات
          totalIncomes[monthIndex] += item.total_price_amount; // اضافه کردن به درآمد
        }
      });
    }

    return { sessionCounts, totalIncomes };
  }, [dateReserve]);

  return monthlyData;
};

export default useMonthlyData;
