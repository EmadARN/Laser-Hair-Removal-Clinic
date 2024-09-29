import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import SideBarDashboard from "@/Layout/SideBar/Sidebar";
import { receptionData } from "@/constants";

const Dashboard = ({ children }) => {
  return (
    <Grid templateColumns={"repeat(12, 1fr)"}>
      <GridItem colSpan={1}>
        <SideBarDashboard
          receptionDatas={receptionData}
          h={"100vh"}
          textHead="کارمند"
          active={true}
        />
      </GridItem>
      <GridItem colSpan={11} px={6}>
        {children}
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
