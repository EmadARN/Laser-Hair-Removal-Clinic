import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { fetchWeekData } from "@/features/adminDashboard/adminDashboardSlice";
import { useDispatch, useSelector } from "react-redux";

const persianMonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const DataSlider = () => {
  const dispatch = useDispatch();
  const { dateRanges } = useSelector((state) => state.adminDashboard);
  const [currentRange, setCurrentRange] = React.useState(0); // نگه‌داشتن بازه فعلی

  useEffect(() => {
    dispatch(fetchWeekData(currentRange)); // بارگذاری داده‌های هفته بر اساس ایندکس فعلی
  }, [dispatch, currentRange]); // ایندکس فعلی را به عنوان وابستگی اضافه کنید

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
  endDate.setDate(startDate.getDate() + 6); // تاریخ پایان (جمعه)

  const formattedStart = `${startDate.getDate()} ${
    persianMonths[startDate.getMonth()]
  }`; // تاریخ شروع

  const formattedEnd = `${endDate.getDate()} ${
    persianMonths[endDate.getMonth()]
  }`; // تاریخ پایان

  return (
    <Flex
      sx={{
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        fontSize: "18px",
        color: "blue",
      }}
    >
      <Button
        onClick={() => dateHandler("prev")}
        isDisabled={currentRange === 0}
      >
        <IoIosArrowForward />
      </Button>

      <Flex py={6} sx={{ minWidth: "200px", justifyContent: "center" }}>
        <Text
          sx={{
            fontSize: { base: "14px", md: "18px" },
            fontWeight: "bold",
            color: "blue",
          }}
        >
          {currentDate
            ? `${formattedStart} - ${formattedEnd}`
            : "No data available"}
        </Text>
      </Flex>

      <Button
        onClick={() => dateHandler("next")}
        isDisabled={currentRange === dateRanges.length - 1}
      >
        <IoIosArrowBack />
      </Button>
    </Flex>
  );
};

export default DataSlider;
