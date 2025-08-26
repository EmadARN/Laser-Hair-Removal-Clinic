import { Box, Flex, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import RepoertHeader from "./ui/RepoertHeader";
import SessionSummery from "./ui/SessionSummery";
import ReportItem from "./ui/ReportItem";
import LaserSessionsChart from "./ui/charts/LaserSessionsChart";
import LineChart from "./ui/charts/LineChart";
import useDateRange from "./logic/useDateRange";
import useSummary from "./logic/useSummary";
import useReportsData from "./logic/useReportsData";
import useMonthlyData from "./logic/useMonthlyData";

const Reports = () => {
  const [{ auth_Admin_token }] = useCookies(["auth_Admin_token"]);
  const { dateReserve, customerListAdmin } = useSelector(
    (store) => store.adminDashboard
  );
  const [filteredData, setFilteredData] = useState();

  const { dateRange, handleDateChange, handleTodayClick } = useDateRange();
  const summary = useSummary(dateReserve);
  useReportsData(auth_Admin_token, dateRange);
  const { sessionCounts, totalIncomes } = useMonthlyData(
    dateReserve,
    "1403/8/01",
    "1403/12/30"
  );

  return (
    <Box px={{ base: 2, md: 8 }} width={"100%"} minWidth={"500px"}>
      <Box py={{ base: 4, md: 6 }}>
        <RepoertHeader
          from={dateRange.from}
          to={dateRange.to}
          onDateChange={handleDateChange}
          onTodayClick={handleTodayClick}
          dateReserve={dateReserve}
          customerListAdmin={customerListAdmin}
          setFilteredData={setFilteredData}
        />
      </Box>
      <Box width={"100%"} >
        <SessionSummery
          completeListLength={summary.completeListLength}
          totalPriceAmount={summary.totalPriceAmount}
        />
      </Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        justify="center" // برای تراز کردن افقی
        align="center" // برای تراز کردن عمودی
        gap={4} // کاهش فاصله بین دو چارت
        mb={10}
      >
        <Box
          w={{ base: "100%", md: "49%" }}
          sx={{
            mt: 8,
            bgColor: "#FEFEFE",
            p: 4,
            rounded: "8px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <LaserSessionsChart sessionCounts={sessionCounts} />
        </Box>
        <Box
          w={{ base: "100%", md: "49%" }}
          sx={{
            mt: 8,
            bgColor: "#FEFEFE",
            p: 4,
            rounded: "8px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <LineChart totalIncomes={totalIncomes} />
        </Box>
      </Flex>

      <Box mt={{ base: 6, md: 8 }}>
        <VStack align="stretch" spacing={2}>
          {filteredData && filteredData.length > 0
            ? filteredData.map((searchitem) => (
                <ReportItem
                  key={searchitem.id}
                  item={searchitem}
                  customerListAdmin={customerListAdmin}
                />
              ))
            : dateReserve &&
              dateReserve.complete_list.map((item) => (
                <ReportItem
                  key={item.id}
                  item={item}
                  customerListAdmin={customerListAdmin}
                />
              ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default Reports;
