import PaidTurns from "@/Components/reseptionDashboard/widget/paid-turns/PaidTurns";
import { ReseptionTable } from "@/Components/reseptionDashboard/widget/ReseptionTable/ReseptionTable";
import SideBarDashboard from "@/Layout/SideBar/Sidebar";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import HeaderDetails from "@/Components/adminDashboard/widget/headerDetails/HeaderDetails";
import ListOfOpratore from "@/Components/adminDashboard/widget/listOfOpratore/ListOfOpratore";
import { admintData } from "@/Components/adminDashboard/data";
import FinancialReports from "@/Components/adminDashboard/widget/financialReports/financialReports";

const AdminDashboard = () => {
  return (
    <>
      <Grid templateColumns={"repeat(12, 1fr)"}>
        <GridItem colSpan={1}>
          <SideBarDashboard
            admintDatas={admintData}
            h={"100vh"}
            textHead="ادمین"
            active={false}
          />
        </GridItem>
        <GridItem colSpan={11}>
          <Box sx={{ pt: 6, pr: { base: 12, md: 0 } }}>
            <HeaderDetails />
          </Box>
          <Box>
            <ListOfOpratore />
          </Box>
          <Box>
            <FinancialReports />
          </Box>
          {/* <ReseptionTable />
          <PaidTurns /> */}
        </GridItem>
      </Grid>
    </>
  );
};

export default AdminDashboard;
