import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { admintData } from "@/constants";
import SideBarDashboard from "@/Layout/Sidebar";

const Dashboard = ({ children }) => {
  return (
    <Grid bgColor="#ffffff" templateColumns={"repeat(12, 1fr)"}>
      <GridItem colSpan={1}>
        <SideBarDashboard
          admintDatas={admintData}
          h={"100vh"}
          textHead="ادمین"
          active={false}
        />
      </GridItem>
      <GridItem colSpan={11} px={6}>
        {children}
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
