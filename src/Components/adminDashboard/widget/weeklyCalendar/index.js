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

const WeeklyCalendar = () => {
  const [shiftData, setShiftData] = useState({ morning: {}, evening: {} });
  const [currentShift, setCurrentShift] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [operatorName, setOperatorName] = useState({});

  const dispatch = useDispatch();
  const { operators, operatorsDate, token, dateRanges, dataRangeStatus } =
    useSelector((state) => state.adminDashboard);

  const splitDate = (start, end) => {
    return dateRanges?.date?.slice(start, end);
  };
  const date_year = splitDate(0, 4);
  const date_month = splitDate(5, 6);
  const date_day = splitDate(7, 10);
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
  useEffect(() => {
    if (Array.isArray(operatorsDate.operator_program)) {
      operatorsDate.operator_program.map((item) =>
        setOperatorName(item.operator_name)
      );
    }
  }, []);
  console.log(operatorName);

  const handleSelect = () => {
    const operatorProgramList1 = [];
    Object.keys(shiftData).forEach((shift) => {
      Object.keys(shiftData[shift]).forEach((day) => {
        const operatorName = shiftData[shift][day];
        if (operatorName) {
          const programTurn = shift === "morning" ? "m" : "e";
          operatorProgramList1.push({
            id: `${date_year}/${date_month}/${date_day}${programTurn}`,
            date_str: `${date_year}/${date_month}/${date_day}`,
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
          operatorName={operatorName}
        />
      </Box>
    </>
  );
};

export default WeeklyCalendar;
