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
  const [operatorNameKeeper, setOperatorNameKeeper] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { operators, token } = useSelector((state) => state.adminDashboard);

  const fullName = `${operatorNameKeeper.name} ${operatorNameKeeper.last_name}`;

  useEffect(() => {
    if (token) {
      dispatch(getAsyncOperatorList(token));
    }
  }, [dispatch, token]);

  const handleSelect = (operatorNameKeeper) => {
    // تعریف ID و تاریخ (اینها را با مقادیر واقعی جایگزین کنید)
    const id = "1402/2/2m"; // شناسه دلخواه شما
    const dateStr = "1402/2/2"; // تاریخ دلخواه شما
    const programTurn = currentShift === "morning" ? "m" : "e"; // تعیین برنامه بر اساس شیفت

    // ایجاد آرایه جدید از اپراتور
    const operatorProgramList1 = [
      {
        id,
        date_str: dateStr,
        program_turn: programTurn,
        operator_name: fullName,
        operator: fullName,
      },
    ];

    console.log("operator program", operatorProgramList1);

    // به‌روزرسانی وضعیت شیفت
    // setShiftData((prev) => ({
    //   ...prev,
    //   [currentShift]: { ...prev[currentShift], [selectedDay]: fullName },
    // }));

    // ارسال داده به بک‌انتد با فرمت درست
    dispatch(
      operatorProgramList({
        token,
        operator_program_list: operatorProgramList1,
      })
    );
    onClose();
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
          setOperatorNameKeeper={setOperatorNameKeeper}
          onClose={onClose}
          isOpen={isOpen}
          onOpen={onOpen}
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
