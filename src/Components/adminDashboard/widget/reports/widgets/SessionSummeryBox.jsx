import React from "react";
import { Box, Text } from "@chakra-ui/react";
const SessionSummeryBox = ({ icon, title, number }) => {
  return (
    <Box
      p={2}
      borderRadius="7px"
      bgColor="graySky"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box display="flex" alignItems="center" gap={3}>
        <Box bgColor={"blue.50"} padding={4} borderRadius="50%">
          {icon}
        </Box>
        <Box>{title}</Box>
      </Box>

      <Box>
        <Text color="blue">{number}</Text>
      </Box>
    </Box>
  );
};

export default SessionSummeryBox;
