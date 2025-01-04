import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import HeaderDetails from "./ui/HeaderDetails";
import CustomerTable from "./ui/CustomerTable";
import FinancialReports from "./ui/financialReports/FinancialReports";
import {
  fetchWeekData,
  getAsyncListDateOperator,
  getCutomerList,
  getDate,
} from "@/features/adminDashboard/adminThunks";
import useFinancialData from "./useFinancialData";
import TodayIncomeChart from "./ui/charts/TodayIncomeChart";
import TodayIncomeDoughnut from "./ui/charts/TodayIncomeDoughnut";
import { getDateParts } from "../utils/getDateParts";

const Home = () => {
  const [{ auth_Admin_token }] = useCookies(["auth_Admin_token"]);
  const dispatch = useDispatch();
  const {
    dateReserve,
    customerListAdmin,
    dateRanges,
    dataRangeStatus,
    operatorsDate,
  } = useSelector((store) => store.adminDashboard);

  const {
    year: date_year,
    month: date_month,
    day: date_day,
  } = getDateParts(dateRanges?.date);

  // Fetching data on mount
  useEffect(() => {
    dispatch(fetchWeekData(0));
    if (auth_Admin_token && dataRangeStatus) {
      dispatch(
        getAsyncListDateOperator({
          token: auth_Admin_token,
          date_year,
          date_month,
          date_day,
        })
      );
    }
  }, [
    date_year,
    date_month,
    date_day,
    dataRangeStatus,
    auth_Admin_token,
    dispatch,
  ]);

  useEffect(() => {
    dispatch(getDate({ from: "", to: "", auth_Admin_token }));
    dispatch(getCutomerList({ auth_Admin_token }));
  }, [auth_Admin_token, dispatch]);

  // Fetching financial data
  const { totalPaidAmount, totalAmount } = useFinancialData(dateReserve);

  // Formatting operator names
  const formatOperatorName = (name) => {
    const names = name.split(" ");
    return names.length > 1
      ? `${names[0]} ${names[1]}, ${names.slice(2).join(" ")}`
      : name;
  };

  const filteredOperators = useMemo(() => {
    const mShiftOperators = new Set();
    const aShiftOperators = new Set();

    operatorsDate?.operator_program?.forEach((item) => {
      if (item.program_turn === "m") mShiftOperators.add(item.operator_name);
      else if (item.program_turn === "a")
        aShiftOperators.add(item.operator_name);
    });

    return {
      mShiftOperators: Array.from(mShiftOperators).map(formatOperatorName),
      aShiftOperators: Array.from(aShiftOperators).map(formatOperatorName),
    };
  }, [operatorsDate]);

  return (
    <>
      <Box sx={{ py: 6 }}>
        <HeaderDetails />
      </Box>
      <Box sx={{ bgColor: "#F7FAFC", p: 4, rounded: "8px" }}>
        <FinancialReports
          morningShiftLabel="شیفت صبح"
          afternoonShiftLabel="شیفت بعد از ظهر"
          totalPaidAmountThisMonth={filteredOperators.mShiftOperators}
          totalAmountThisMonth={filteredOperators.aShiftOperators}
        />
      </Box>
      <Box sx={{ mt: 8, bgColor: "#F7FAFC", p: 4, rounded: "8px" }}>
        <FinancialReports
          morningShiftLabel="تخمین در آمد روز"
          afternoonShiftLabel="در آمد روز تا این لحظه"
          totalPaidAmountThisMonth={totalPaidAmount}
          totalAmountThisMonth={totalAmount}
        />
      </Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        justify="space-around"
        align="center"
        gap={8}
        mb={10}
        sx={{ mt: 8, bgColor: "#F7FAFC", p: 4, rounded: "8px" }}
      >
        <Box w={{ base: "100%", md: "20%" }} h="100%" maxW="400px" maxH="300px">
          <TodayIncomeDoughnut />
        </Box>
        <Box w={{ base: "100%", md: "50%" }} h="100%" maxW="400px" maxH="300px">
          <TodayIncomeChart />
        </Box>
      </Flex>
      <CustomerTable
        dateReserve={dateReserve}
        customerListAdmin={customerListAdmin}
      />
    </>
  );
};

export default Home;
