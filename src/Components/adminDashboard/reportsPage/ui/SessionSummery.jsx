import React from "react";
import SessionSummeryBox from "./SessionSummeryBox";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaWallet } from "react-icons/fa";
import { Box, Flex } from "@chakra-ui/react";

const SessionSummery = ({ completeListLength, totalPriceAmount }) => {
  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      flexDirection={{ base: "column", sm: "row" }}
      alignItems="center"
      gap={{ base: 4, sm: 5 }}
    >
      <Box width="50%">
        <SessionSummeryBox
          number={completeListLength}
          icon={<HiMiniUserGroup size={"20px"} color="#7563DC" />}
          title="تعداد جلسات لیزر"
        />
      </Box>

      <Box width="50%">
        <SessionSummeryBox
          number={totalPriceAmount}
          icon={<FaWallet size={"20px"} color="#7563DC" />}
          title="درامد"
        />
      </Box>
    </Flex>
  );
};

export default SessionSummery;
