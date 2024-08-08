import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Inputs from "./Inputs";

const FinancialReports = () => {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
      gap={6}
      px={2}
    >
      <GridItem w="100%" colSpan={2}>
        <Inputs shiftsName="تخمین در آمد روز" />
      </GridItem>
      <GridItem w="100%" colSpan={2}>
        <Inputs shiftsName="در آمد روز تا این لحظه" />
      </GridItem>
    </Grid>
  );
};

export default FinancialReports;
