import { Box } from "@chakra-ui/react";
import React from "react";
import RepoertHeader from "./widgets/RepoertHeader";
import SessionSummery from "./widgets/SessionSummery";
import SessionSummeryBox from "./widgets/SessionSummeryBox";

const Reports = () => {
  return (
    <>
      <Box sx={{ py: { base: 4, md: 6 }, px: { base: 2, md: 6 } }}>
        <RepoertHeader />
      </Box>
      <Box sx={{ px: { base: 2, md: 6 } }}>
        <SessionSummery />
      </Box>
      <Box sx={{ mt: { base: 6, md: 8 }, px: { base: 2, md: 6 } }}>
        <SessionSummeryBox />
      </Box>
    </>
  );
};

export default Reports;
