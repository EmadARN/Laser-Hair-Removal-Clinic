import { Box } from "@chakra-ui/react";
import React from "react";
import HeaderDetails from "./headerDetails/HeaderDetails";
import ListOfOpratore from "./listOfOpratore/ListOfOpratore";
import FinancialReports from "./financialReports/FinancialReports";
import TodayClients from "./TodayClients";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
