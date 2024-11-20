import { getTodayDate } from "@/utils/getTodayDate";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const HeaderDetails = () => {
  return (
    <Flex sx={{ justifyContent: "space-between", px: 4 }}>
      <Text>خانه خوش آمدید</Text>
      <Text>{getTodayDate()}</Text>
    </Flex>
  );
};

export default HeaderDetails;
