import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import SearchInput from "@/Common/searchInput/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import PatientList from "./patientList";
import { todayDate } from "@/features/receptionDashboard/receptionThunks";
import ReusableSession from "../adminDashboard/shared/ReussableSession";
import { RiShieldUserFill } from "react-icons/ri";
const ResClients = () => {
  const [{ auth_Employee_token } = cookies] = useCookies();

  const dispatch = useDispatch();
  const { todayReserve } = useSelector(
    (store) => store.receptionDashboardSlice
  );

  useEffect(() => {
    dispatch(todayDate({ auth_Employee_token }));
  }, [dispatch, auth_Employee_token]);

  if (!todayReserve) {
    return (
      <ReusableSession
        text="مراجعین امروز یافت نشد"
        icon={<RiShieldUserFill />}
      />
    );
  }
  console.log(todayReserve, "todayReserve");

  return (
    <>
      <Box sx={{ p: 4, display: { base: "none", md: "flex" } }}>
        <SearchInput size={"lg"} placeholder="جستجو در نوبت های روز" />
      </Box>

      <PatientList isPaymentTable={true} todayReserve={todayReserve} />
    </>
  );
};

export default ResClients;
