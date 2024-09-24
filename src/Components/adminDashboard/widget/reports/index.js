import { Box } from "@chakra-ui/react";
import React from "react";
import RepoertHeader from "./widgets/RepoertHeader";
import SessionSummery from "./widgets/SessionSummery";
import SessionSummeryBox from "./widgets/SessionSummeryBox";

const Reports = () => {
  return (
    <>
      <Box sx={{ py: 6 }}>
        <RepoertHeader />
      </Box>
      <Box>
        <SessionSummery />
      </Box>
      <Box sx={{ mt: 8 }}>
        <SessionSummeryBox />
      </Box>
    </>
  );
};

export default Reports;
