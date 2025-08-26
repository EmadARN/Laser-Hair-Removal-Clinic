import React, { useEffect, useState } from "react";
import { Box, Grid, GridItem, Flex } from "@chakra-ui/react";
import { admintData } from "@/constants";
import SideBarDashboard from "@/Layout/sidebar/Sidebar";
import Menu from "@/Layout/menu";
import HeaderDetails from "./homePage/ui/HeaderDetails";

const Dashboard = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Grid bgColor="#ffffff" templateColumns={"repeat(18, 1fr)"} minH="100vh">
      {/* Sidebar (فقط دسکتاپ) */}
      {!isSmallScreen && (
        <GridItem bg="gray.50" borderRight="1px solid #eaeaea" colSpan={1}>
          <SideBarDashboard
            admintDatas={admintData}
            h="100%"
            textHead="ادمین"
            active={false}
            collapsed={isCollapsed}
            onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
          />
        </GridItem>
      )}

      {/* Content Area */}
      <GridItem colSpan={isSmallScreen || isCollapsed ? 18 : 17} px={6}>
        {/* Header */}
        <Box py={4} px={6} borderBottom="1px solid #eaeaea">
          {isSmallScreen ? (
            <Flex alignItems="center">
              <Menu show={true} admintDatas={admintData} />
              <HeaderDetails />
            </Flex>
          ) : (
            <HeaderDetails />
          )}
        </Box>

        {/* Main Content */}
        <Box px={2} py={4}>
          {children}
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
