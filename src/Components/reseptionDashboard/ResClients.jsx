import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import HeaderDetails from "./widget/headerDetails/HeaderDetails";
import SearchInput from "@/Common/searchInput/SearchInput";
import { ReseptionTable } from "./widget/ReseptionTable/ReseptionTable";
import PaidTurns from "./widget/paid-turns/PaidTurns";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { todayDate } from "@/features/receptionDashboard/receptionDashboardSlice";
import PatientList from "./widget/patientList/PatientList";
const ResClients = () => {
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

  return (
    <>
      <Box sx={{ pt: 6, pr: { base: 12, md: 0 } }}>
        {/* <HeaderDetails todayDateReserve={todayDateReserve} /> */}
      </Box>
      <Box sx={{ p: 4, display: { base: "none", md: "flex" } }}>
        <SearchInput size={"lg"} placeholder="جستجو در نوبت های روز" />
      </Box>

      <PatientList isPaymentTable={true} todayReserve={todayReserve} />
    </>
  );
};

export default ResClients;
