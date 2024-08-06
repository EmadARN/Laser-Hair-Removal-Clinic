import SideBarDashboard from "@/Layout/SideBar/Sidebar";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";

import { admintData } from "@/Components/adminDashboard/data";

import Empolyees from "@/Components/adminDashboard/widget/employees";
import AdminTable from "@/Components/adminDashboard/widget/weeklyCalendar/AdminTable";

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
            <Empolyees />
          </Box>
          <Box>{/* <ListOfOpratore /> */}</Box>
          <Box>{/* <FinancialReports /> */}</Box>
          {/* <ReseptionTable />
          <PaidTurns /> */}
        </GridItem>
      </Grid>
    </>
  );
};

export default AdminDashboard;
