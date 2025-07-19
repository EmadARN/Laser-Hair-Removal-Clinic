import React, { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import HeaderDetails from "./ui/HeaderDetails";
import CustomerTable from "./ui/CustomerTable";
import TodayIncomeChart from "./ui/charts/TodayIncomeChart";
import TodayIncomeDoughnut from "./ui/charts/TodayIncomeDoughnut";
import useFinancialProcessing from "./logic/useFinancialProcessing";
import useFinancialData from "./logic/useFinancialData";
import {
  fetchWeekData,
  getAsyncListDateOperator,
  getCutomerList,
  getDate,
} from "@/features/adminDashboard/adminThunks";
import { getDateParts } from "../utils/getDateParts";
import FinancialReportsBtn from "./ui/financialReports/FinancialReportsBtn";
import ReusableSession from "../shared/ReussableSession";
import { RiShieldUserFill } from "react-icons/ri";

const Home = () => {
  const [{ auth_Admin_token }] = useCookies(["auth_Admin_token"]);
  const {
    dateReserve,
    customerListAdmin,
    dateRanges,
    dataRangeStatus,
    operatorsDate,
  } = useSelector((store) => store.adminDashboard);
  const dispatch = useDispatch();

  const {
    year: date_year,
    month: date_month,
    day: date_day,
  } = getDateParts(dateRanges?.date);

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
    auth_Admin_token,
    date_year,
    date_month,
    date_day,
    dataRangeStatus,
    dispatch,
  ]);

  useEffect(() => {
    dispatch(getDate({ from: "", to: "", auth_Admin_token }));
    dispatch(getCutomerList({ auth_Admin_token }));
  }, [auth_Admin_token, dispatch]);

  // Custom hooks
  const { totalPaidAmount, totalAmount } = useFinancialData(dateReserve);
  const { filteredOperators } = useFinancialProcessing(
    operatorsDate,
    dateReserve
  );
  console.log("customerListAdmin", customerListAdmin);
  console.log("totalAmount", totalAmount);

  return (
    <>
      <Box sx={{ py: 6 }}>
        <HeaderDetails />
      </Box>
      <Flex
        sx={{ bgColor: "#FEFEFE", p: 4, rounded: "8px" }}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        gap={2}
      >
        <FinancialReportsBtn
          Label1="شیفت صبح"
          value1={filteredOperators.mShiftOperators}
        />
        <FinancialReportsBtn
          Label2="شیفت بعد از ظهر"
          value2={filteredOperators.aShiftOperators}
        />
      </Flex>
      <Flex
        sx={{ mt: 8, bgColor: "#FEFEFE", p: 4, rounded: "8px" }}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        gap={2}
      >
        <FinancialReportsBtn
          Label1="تخمین در آمد روز (پرداخت شده)"
          value1={totalPaidAmount}
        />
        <FinancialReportsBtn
          Label2="در آمد روز تا این لحظه (رزرو شده)"
          value2={totalAmount}
        />
      </Flex>
      {totalAmount === 0 && totalPaidAmount === 0 ? (
        <ReusableSession text="در این تاریخ داده ای وجود ندارد" icon={<RiShieldUserFill />} />
      ) : (
        <>
        <Flex
          direction={{ base: "column", md: "row" }}
          wrap="wrap"
          justify="space-around"
          align="center"
          gap={8}
          mb={10}
          sx={{ mt: 8, bgColor: "#FEFEFE", p: 4, rounded: "8px" }}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <Box
            w={{ base: "100%", md: "20%" }}
            h="100%"
            maxW="400px"
            maxH="300px"
          >
            <TodayIncomeDoughnut
              totalPaidAmountThisMonth={totalPaidAmount}
              totalAmountThisMonth={totalAmount}
            />
          </Box>
          <Box
            w={{ base: "100%", md: "50%" }}
            h="100%"
            maxW="400px"
            maxH="300px"
          >
            <TodayIncomeChart
              totalPaidAmountThisMonth={totalPaidAmount}
              totalAmountThisMonth={totalAmount}
            />
          </Box>
        </Flex>

              <CustomerTable
        dateReserve={dateReserve}
        customerListAdmin={customerListAdmin}
      />
      </>
      )}


    </>
  );
};

export default Home;
