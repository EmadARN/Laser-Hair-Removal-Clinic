import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import { FaCalendarAlt } from "react-icons/fa";
import DataSlider from "@/Common/dataSlider/DataSlider";
import { useDispatch, useSelector } from "react-redux";
import {
  getAsyncOperatorList,
  operatorProgramList,
} from "@/features/adminDashboard/adminDashboardSlice";
import AdminTable from "./widget/modalDefineDetails/AdminTable";

const WeeklyCalendar = () => {
  const [shiftData, setShiftData] = useState({ morning: {}, evening: {} });
  const [currentShift, setCurrentShift] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const dispatch = useDispatch();
  const { operators, token } = useSelector((state) => state.adminDashboard);

  useEffect(() => {
    if (token) {
      dispatch(getAsyncOperatorList(token));
    }
  }, [dispatch, token]);

  const handleSelect = () => {
    const id = "1402/2/2";
    const dateStr = "1402/2/2";
    const operatorProgramList1 = [];
    // برای هر روز هفته و هر شیفت (morning و evening) لیست کامل اپراتورها را ایجاد می‌کنیم
    Object.keys(shiftData).forEach((shift) => {
      Object.keys(shiftData[shift]).forEach((day) => {
        const operatorName = shiftData[shift][day];
        if (operatorName) {
          // تعیین برنامه بر اساس شیفت
          const programTurn = shift === "morning" ? "m" : "e";

          // اضافه کردن اپراتور به لیست
          operatorProgramList1.push({
            id,
            date_str: dateStr,
            program_turn: programTurn,
            operator_name: operatorName,
            operator: operatorName,
          });
        }
      });
    });

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
        />
        <Button onClick={handleSelect}>فرستادن برنامه</Button>
      </Flex>
      <Box sx={{ w: "100%" }}>
        <AdminTable
          shiftData={shiftData}
          setShiftData={setShiftData}
          currentShift={currentShift}
          setCurrentShift={setCurrentShift}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          operator_list={operators.operator_list}
          token={token}
        />
      </Box>
    </>
  );
};

export default WeeklyCalendar;
