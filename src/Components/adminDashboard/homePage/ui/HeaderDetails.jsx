import { getDayPart, getTodayDate } from "@/utils/extractDate";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const HeaderDetails = () => {
  return (
    <Flex
      sx={{ justifyContent: "space-between", px: 4 }}
      fontWeight="bold"
      color="gray.500"
    >
      <Text> خوش آمدید</Text>
      <Flex>
        <Text>{getDayPart()} بخیر &nbsp;,</Text>
        <Text>&nbsp;{getTodayDate()}</Text>
      </Flex>
    </Flex>
  );
};

export default HeaderDetails;
