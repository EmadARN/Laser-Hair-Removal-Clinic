import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { receptionData } from "@/constants";
import SideBarDashboard from "@/Layout/sidebar/Sidebar";
import Menu from "@/Layout/menu";

const Dashboard = ({ children }) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

  return (
    <Grid bgColor="#ffffff" templateColumns={"repeat(12, 1fr)"}>
      <GridItem colSpan={isSmallScreen ? 12 : 1}>
        {isSmallScreen ? (
          <Menu show={true} admintDatas={receptionData} />
        ) : (
          <SideBarDashboard
            receptionDatas={receptionData}
            h={"100vh"}
            textHead="کارمند"
            active={true}
          />
        )}
      </GridItem>

      <GridItem colSpan={isSmallScreen ? 12 : 11} px={6}>
        {children}
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
