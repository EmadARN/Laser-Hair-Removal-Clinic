import { getMonthDate } from "@/utils/getTodayDate";
import { useMemo } from "react";
import DateObject from "react-date-object";

const useMonthlyData = (dateReserve) => {
  console.log("dateReserve", dateReserve);

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

        // چاپ ماه و ایندکس آن برای بررسی
        console.log("Item date:", item.date);
        console.log("Persian month:", persianDate.month.name);
        console.log("Month index:", monthIndex);

        // بررسی معتبر بودن ایندکس ماه
        if (monthIndex >= 0 && monthIndex < 12) {
          sessionCounts[monthIndex] += 1; // اضافه کردن به تعداد جلسات
          totalIncomes[monthIndex] += item.total_price_amount; // اضافه کردن به درآمد
        } else {
          console.log("Invalid month index:", monthIndex);
        }
      });
    }

    return { sessionCounts, totalIncomes };
  }, [dateReserve]);

  return monthlyData;
};

export default useMonthlyData;
