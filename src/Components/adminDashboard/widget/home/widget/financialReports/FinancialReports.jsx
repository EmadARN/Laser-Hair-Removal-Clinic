import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Inputs from "./Inputs";

const FinancialReports = ({
  morningShiftLabel,
  afternoonShiftLabel,
  totalPaidAmountThisMonth,
  totalAmountThisMonth,
}) => {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
      gap={6}
      px={2}
    >
      <GridItem w="100%" colSpan={2}>
        <Inputs
          morningShiftLabel={morningShiftLabel}
          totalPaidAmountThisMonth={totalPaidAmountThisMonth}
        />
      </GridItem>
      <GridItem w="100%" colSpan={2}>
        <Inputs
          afternoonShiftLabel={afternoonShiftLabel}
          totalAmountThisMonth={totalAmountThisMonth}
        />
      </GridItem>
    </Grid>
  );
};

export default FinancialReports;
