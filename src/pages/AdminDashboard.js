import { admintData } from "@/Components/adminDashboard/data";
import FinancialReports from "@/Components/adminDashboard/widget/home/financialReports/FinancialReports";
import HeaderDetails from "@/Components/adminDashboard/widget/home/headerDetails/HeaderDetails";
import ListOfOpratore from "@/Components/adminDashboard/widget/home/listOfOpratore/ListOfOpratore";
import TodayClients from "@/Components/adminDashboard/widget/home/TodayClients";
import SideBarDashboard from "@/Layout/SideBar/Sidebar";
import { Box, Grid, GridItem } from "@chakra-ui/react";

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
        <GridItem colSpan={11} px={6}>
          <Box sx={{ py: 6 }}>
            <HeaderDetails />
          </Box>
          <Box sx={{ bgColor: "#f2f2f27a", p: 4, rounded: "8px" }}>
            <ListOfOpratore />
          </Box>
          <Box sx={{ mt: 8, bgColor: "#f2f2f27a", p: 4, rounded: "8px" }}>
            <FinancialReports />
          </Box>
          <Box sx={{ mt: 8, bgColor: "#f2f2f27a", p: 4, rounded: "8px" }}>
            <TodayClients />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default AdminDashboard;
