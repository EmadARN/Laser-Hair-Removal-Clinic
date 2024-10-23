import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import { FaCalendarAlt } from "react-icons/fa";
import DataSlider from "@/Common/dataSlider/DataSlider";
import { useDispatch, useSelector } from "react-redux";
import {
  getAsyncListDateOperator,
  getAsyncOperatorList,
  operatorProgramList,
} from "@/features/adminDashboard/adminDashboardSlice";
import AdminTable from "./widget/modalDefineDetails/AdminTable";
import { daysOfWeek } from "@/constants";

const WeeklyCalendar = () => {
  const [shiftData, setShiftData] = useState({ morning: {}, evening: {} });
  const [currentShift, setCurrentShift] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [operatorDates, setOperatorDates] = useState({});

  const dispatch = useDispatch();
  const { operators, operatorsDate, token, dateRanges, dataRangeStatus } =
    useSelector((state) => state.adminDashboard);

  //Date convert
  const splitDate = (start, end) => {
    return dateRanges?.date?.slice(start, end);
  };
  const date_year = splitDate(0, 4);
  const date_month = splitDate(5, 6);
  const date_day = splitDate(7, 10);

  //fetch getAsyncOperatorList getAsyncListDateOperator
  useEffect(() => {
    if (token) {
      dispatch(getAsyncOperatorList(token));
      if (dataRangeStatus) {
        dispatch(
          getAsyncListDateOperator({ token, date_year, date_month, date_day })
        );
      }
    }
  }, [dateRanges, dispatch, token]);

  //set operatorDates
  useEffect(() => {
    if (Array.isArray(operatorsDate.operator_program)) {
      operatorsDate.operator_program.forEach((item) => {
        setOperatorDates((prev) => ({
          ...prev,
          [item.date_str]: item.date_str,
        }));
      });
    }
  }, [operatorsDate]);

  //post operatorProgramList
  const handleSelect = () => {
    const operatorProgramList1 = [];

    daysOfWeek.forEach((day, dayIndex) => {
      Object.keys(shiftData).forEach((shift) => {
        const dateForDay = operatorDates[Object.keys(operatorDates)[dayIndex]]; // تاریخ معادل از operatorDates

        if (dateForDay) {
          const operatorName = shiftData[shift]?.[day]?.fullName || "";
          const operatorUsername = shiftData[shift]?.[day]?.userName || "";
          const programTurn = shift === "morning" ? "m" : "a";

          // اضافه کردن مقدار به آرایه، فقط اگر نام اپراتور و یوزرنیم به درستی پر شده باشد
          operatorProgramList1.push({
            id: `${dateForDay}${programTurn}`,
            date_str: dateForDay,
            program_turn: programTurn,
            operator_name: operatorName || "", // نام اپراتور
            operator: operatorUsername || "", // یوزرنیم اپراتور
          });
        }
      });
    });

    // حالا باید مطمئن شویم که 13 خانه در payload وجود دارد
    const totalCells = 13;
    const filledCells = operatorProgramList1.length;

    // اگر خانه‌های خالی وجود دارند، آن‌ها را با مقادیر پیش‌فرض پر می‌کنیم
    if (filledCells < totalCells) {
      for (let i = filledCells; i < totalCells; i++) {
        operatorProgramList1.push({
          id: `empty${i}`, // یک مقدار پیش‌فرض برای id
          date_str: "", // مقدار خالی برای تاریخ
          program_turn: "", // مقدار خالی برای شیفت
          operator_name: "", // مقدار خالی برای نام اپراتور
          operator: "", // مقدار خالی برای اپراتور
        });
      }
    }
    dispatch(
      operatorProgramList({
        token,
        operator_program_list: operatorProgramList1,
      })
    );
  };

  return (
    <>
      <Flex sx={{ py: 2 }}>
        <AdminHeader
          operator_list={operators.operator_list}
          headerTitle="برنامه هفتگی"
          icon={<FaCalendarAlt />}
          dataSlider={<DataSlider />}
          iconBtnDisply="none"
          BtnDisply="none"
        />
        <Button onClick={handleSelect}>فرستادن برنامه</Button>
      </Flex>
      <Box sx={{ w: "100%" }}>
        <AdminTable
          operatorsDate={operatorsDate}
          operator_list={operators.operator_list}
          shiftData={shiftData}
          setShiftData={setShiftData}
          currentShift={currentShift}
          setCurrentShift={setCurrentShift}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </Box>
    </>
  );
};

export default WeeklyCalendar;
