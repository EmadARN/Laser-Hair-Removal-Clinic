import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import PatientWithoutTime from "../AddPatientWithoutTime";
import { getDayPart, getTodayDate } from "@/utils/extractDate";

const HeaderDetails = () => {
  return (
    <Box width="100%" mr={{ base: 12, md: 0 }}>
      <Flex
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
        align="center"
        gap={{ base: 4, sm: 8 }}
        width="100%"
      >
        <Text
          fontSize={{ base: "12px", sm: "15px", md: "20px" }}
          fontWeight="bold"
          color="gray.500"
          whiteSpace="nowrap"
        >
          نوبت های روز
        </Text>

        <Flex
          direction={{ base: "column", sm: "row" }}
          align="center"
          gap={{ base: 2, sm: 4 }}
          whiteSpace="nowrap"
          fontWeight="bold"
          color="gray.500"
        >
          <Flex align="center">
            <Text>{getDayPart()} بخیر &nbsp;,</Text>
            <Text>&nbsp;{getTodayDate()}</Text>
          </Flex>
          <Box>
            <PatientWithoutTime />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderDetails;
