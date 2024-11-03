import { Box } from "@chakra-ui/react";
import React from "react";
import HeaderDetails from "./widget/headerDetails/HeaderDetails";
import SearchInput from "@/Common/searchInput/SearchInput";
import { ReseptionTable } from "./widget/ReseptionTable/ReseptionTable";
import PaidTurns from "./widget/paid-turns/PaidTurns";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { todayDate } from "@/features/receptionDashboard/receptionDashboardSlice";
const ResClients = () => {

  return (
    <>
      <Box sx={{ pt: 6, pr: { base: 12, md: 0 } }}>
        {/* <HeaderDetails todayDateReserve={todayDateReserve} /> */}
      </Box>
      <Box sx={{ p: 4, display: { base: "none", md: "flex" } }}>
        <SearchInput size={"lg"} placeholder="جستجو در نوبت های روز" />
      </Box>

      <PaidTurns display="none" />
    </>
  );
};

export default ResClients;
