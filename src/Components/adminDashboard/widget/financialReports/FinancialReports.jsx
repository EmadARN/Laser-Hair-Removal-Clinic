import { Flex } from "@chakra-ui/react";
import React from "react";
import Inputs from "./Inputs";

const FinancialReports = () => {
  return (
    <Flex
      sx={{
        flexDirection: { base: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { base: "start", md: "center" },
        p: 4,
        w: "100%",
      }}
    >
      <Flex sx={{ w: "50%", alignItems: "center" }}>
        <Inputs shiftsName="تخمین در آمد روز" />
      </Flex>

      <Flex sx={{ w: "50%", alignItems: "center" }}>
        <Inputs shiftsName="در آمد روز تا این لحظه" />
      </Flex>
    </Flex>
  );
};

export default FinancialReports;
