import { Flex } from "@chakra-ui/react";
import React from "react";
import SelectBox from "./SelectBox";
import { oprators } from "@/Components/adminDashboard/data";

const ListOfOpratore = () => {
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
        <SelectBox oprators={oprators[0]} shiftsName="شیفت صبح" />
      </Flex>

      <Flex sx={{ w: "50%", alignItems: "center" }}>
        <SelectBox oprators={oprators[1]} shiftsName="شیفت بعد از ظهر" />
      </Flex>
    </Flex>
  );
};

export default ListOfOpratore;
