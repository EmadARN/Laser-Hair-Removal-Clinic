import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import SearchInput from "@/Common/searchInput/SearchInput";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import HeaderDetails from "./headerDetails";
import { todayDate } from "@/features/receptionDashboard/receptionThunks";
import { ReservationList } from "./reservationList";
import PaidTurns from "./paidTurnList";

const DailyShift = () => {
  const [{ auth_Employee_token } = cookies, setCookie] = useCookies();
  const dispatch = useDispatch();
  const { todayReserve, cutomerList } = useSelector(
    (store) => store.receptionDashboardSlice
  );

  useEffect(() => {
    dispatch(todayDate({ auth_Employee_token }));
  }, [dispatch,auth_Employee_token]);

  return (
    <>
      {/* HeaderDetails بخش  */}
      <Box  pt={6} pr={{ base: 4, md: 0 }}>
        <HeaderDetails />
      </Box>

      {/* SearchInput بخش */}
      <Box p={4} width={{base:'60vw',md:'100%'}} >
        <SearchInput size="lg" placeholder="جستجو در نوبت های روز" />
      </Box>

      {/* ReservationList بخش */}
      <Box px={{ base: 2, md: 4 }}>
        <ReservationList
          isDisabled={false}
          todayReserve={todayReserve}
          auth_Employee_token={auth_Employee_token}
          cutomerList={cutomerList}
        />
      </Box>

      {/* PaidTurns بخش */}
      <Box  px={{ base: 2, md: 4 }} mt={{ base: 6, md: 8 }}>
        <PaidTurns />
      </Box>
    </>
  );
};

export default DailyShift;
