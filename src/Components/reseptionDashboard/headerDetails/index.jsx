import { getDayPart, getTodayDate } from "@/utils/extractDate";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const HeaderDetails = () => {
  return (
    <Flex
      px={4}
      fontWeight="bold"
      color="gray.500"
      align="center"
      justify={{ base: "flex-start", md: "space-between" }} // 👈 موبایل: چسبیده / دسکتاپ: فاصله
      w="100%"
    >
      <Text fontSize={{ base: "12px", md: "16px" }} whiteSpace="nowrap">
        خوش آمدید
      </Text>

      <Flex gap={2}>
        <Text fontSize={{ base: "12px", md: "16px" }} whiteSpace="nowrap">
          {getDayPart()} بخیر &nbsp;,
        </Text>
        <Text fontSize={{ base: "12px", md: "16px" }} whiteSpace="nowrap">
          &nbsp;{getTodayDate()}
        </Text>
      </Flex>
    </Flex>
  );
};

export default HeaderDetails;
