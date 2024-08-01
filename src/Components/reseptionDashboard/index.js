import SideBarDashboard from "@/Layout/SideBar/Sidebar";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import HeaderDetails from "./widget/headerDetails/HeaderDetails";
import SearchInput from "@/Common/searchInput/SearchInput";
import { ReseptionTable } from "./widget/ReseptionTable/ReseptionTable";
import PaidTurns from "./widget/paid-turns/PaidTurns";

const ReseptionDashboard = () => {
  return (
    <>
      <Grid templateColumns={"repeat(12, 1fr)"}>
        <GridItem colSpan={1}>
          <SideBarDashboard />
        </GridItem>
        <GridItem colSpan={11}>
          <Box sx={{ pt: 6, pr: { base: 12, md: 0 } }}>
            <HeaderDetails />
          </Box>
          <Box sx={{ p: 4, display: { base: "none", md: "flex" } }}>
            <SearchInput size={"lg"} placeholder="جستجو در نوبت های روز" />
          </Box>

          <ReseptionTable />
          <PaidTurns />
        </GridItem>
      </Grid>
    </>
  );
};

export default ReseptionDashboard;
