import SearchInput from "@/Common/searchInput/SearchInput";
import { receptionData } from "@/Components/reseptionDashboard/data";
import HeaderDetails from "@/Components/reseptionDashboard/widget/headerDetails/HeaderDetails";
import PaidTurns from "@/Components/reseptionDashboard/widget/paid-turns/PaidTurns";
import { ReseptionTable } from "@/Components/reseptionDashboard/widget/ReseptionTable/ReseptionTable";
import SideBarDashboard from "@/Layout/SideBar/Sidebar";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const ReseptionDashboard = () => {
  return (
    <>
      <Grid templateColumns={"repeat(12, 1fr)"}>
        <GridItem colSpan={1}>
          <SideBarDashboard
            receptionDatas={receptionData}
            h={"100vh"}
            textHead="منشی"
            active={true}
          
          />
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
