import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import PatientWithoutTime from "../AddPatientWithoutTime";
import { getTodayDate } from "@/utils/extractDate";

const HeaderDetails = () => {
  return (
    <Box width={"100%"} mr={{ base: 12, md: 0 }} gap={4}>
      <Flex
        sx={{
          justifyContent: "space-between",
          width: "100%",
          flexDirection: { base: "row" },
          alignItems: "center",
          gap: { base: 5, sm: 4, md: 8 },
        }}
      >
        <Text
          sx={{
            whiteSpace: "nowrap",
            fontSize: { base: "12px", sm: "15px", md: "20px" },
            fontWeight: "bold",
          }}
        >
          نوبت های روز
        </Text>
        <Flex
          whiteSpace="nowrap"
          fontSize={{ base: "12px", sm: "15px", md: "20px" }}
          sx={{
            gap: { base: 5, md: 4 },
            alignItems: "center",
          }}
        >
          {getTodayDate()}
          <Box>
            <PatientWithoutTime />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderDetails;
