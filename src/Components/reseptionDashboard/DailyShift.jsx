import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import SearchInput from "@/Common/searchInput/SearchInput";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import HeaderDetails from "./headerDetails";
import PaidTurns from "./paid-turns";
import { ReservationTable } from "./reservationTable";
import { todayDate } from "@/features/receptionDashboard/receptionThunks";

const DailyShift = () => {
  const [{ auth_Employee_token } = cookies, setCookie] = useCookies();
  const dispatch = useDispatch();
  const { todayReserve, cutomerList } = useSelector(
    (store) => store.receptionDashboardSlice
  );

  useEffect(() => {
    dispatch(todayDate({ auth_Employee_token }));
  }, [dispatch]);

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
        <ReservationTable
          isDisabled={false}
          ButtonValue="پرداخت"
          todayReserve={todayReserve}
          auth_Employee_token={auth_Employee_token}
          cutomerList={cutomerList}
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
