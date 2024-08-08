import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SelectBox from "./SelectBox";
import { oprators } from "@/Components/adminDashboard/data";

const ListOfOpratore = () => {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
      gap={6}
      px={2}
    >
      <GridItem w="100%" colSpan={2}>
        <SelectBox oprators={oprators[0]} shiftsName="شیفت صبح" />
      </GridItem>
      <GridItem w="100%" colSpan={2}>
        <SelectBox oprators={oprators[1]} shiftsName="شیفت بعد از ظهر" />
      </GridItem>
    </Grid>
  );
};

export default ListOfOpratore;
