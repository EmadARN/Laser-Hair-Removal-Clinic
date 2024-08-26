import React from "react";
import SessionSummeryBox from "./SessionSummeryBox";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaWallet } from "react-icons/fa";
import { Box } from "@chakra-ui/react";
const SessionSummery = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"space-between"}
      flexDirection={{ base: "column", sm: "row" }}
      alignItems={"center"}
      gap={{ base: 4, sm: "0" }}
    >
      <Box width={{ base: "100%", sm: "40%", md: "35%" }}>
        <SessionSummeryBox
          number={0}
          icon={<HiMiniUserGroup size={"20px"} color="blue" />}
          title="تعداد جلسات لیزر"
        />
      </Box>

      <Box width={{ base: "100%", sm: "40%", md: "35%" }}>
        <SessionSummeryBox
          number={0}
          icon={<FaWallet size={"20px"} color="blue" />}
          title=" درامد"
        />
      </Box>
    </Box>
  );
};

export default SessionSummery;
