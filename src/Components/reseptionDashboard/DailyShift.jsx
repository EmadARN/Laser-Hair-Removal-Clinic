import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import HeaderDetails from "./widget/headerDetails/HeaderDetails";
import SearchInput from "@/Common/searchInput/SearchInput";
import { ReseptionTable } from "./widget/ReseptionTable/ReseptionTable";
import PaidTurns from "./widget/paid-turns/PaidTurns";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { todayDate } from "@/features/receptionDashboard/receptionDashboardSlice";

const DailyShift = () => {
  const [{ auth_Employee_token } = cookies, setCookie] = useCookies([
    "auth_Employee_token",
  ]);
  const dispatch = useDispatch();
  const { todayReserve } = useSelector(
    (store) => store.receptionDashboardSlice
  );

  useEffect(() => {
    dispatch(todayDate({ auth_Employee_token }));
  }, [dispatch]);
  console.log("todayReserve:", todayReserve);

  return (
    <>
      {/* HeaderDetails بخش  */}
      <Box pt={6} pr={{ base: 4, md: 0 }}>
        <HeaderDetails />
      </Box>

      {/* SearchInput بخش */}
      <Box p={4} display={{ base: "none", md: "flex" }}>
        <SearchInput size="lg" placeholder="جستجو در نوبت های روز" />
      </Box>

      {/* ReseptionTable بخش */}
      <Box px={{ base: 2, md: 4 }}>
        <ReseptionTable
          isDisabled={false}
          ButtonValue="پرداخت"
          todayReserve={todayReserve}
        />
      </Box>

      {/* PaidTurns بخش */}
      <Box px={{ base: 2, md: 4 }} mt={{ base: 6, md: 8 }}>
        <PaidTurns />
      </Box>
    </>
  );
};

export default DailyShift;
