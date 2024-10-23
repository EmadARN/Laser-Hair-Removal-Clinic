import { Box, Grid, GridItem, Input, SimpleGrid } from "@chakra-ui/react";
import React from "react";


const ListOfOpratore = () => {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
      gap={6}
      px={2}
    >
      <GridItem w="100%" colSpan={2}>
      <Input disabled placeholder="شیفت صبح" />
      </GridItem>
      <GridItem w="100%" colSpan={2}>
      <Input disabled placeholder="شیفت بعد از ظهر"/>
      </GridItem>
    </Grid>
  );
};

export default ListOfOpratore;
