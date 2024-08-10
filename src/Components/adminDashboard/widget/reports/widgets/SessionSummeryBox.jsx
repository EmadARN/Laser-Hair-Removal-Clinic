import React from "react";
import { Box, Text } from "@chakra-ui/react";
const SessionSummeryBox = ({ icon, title, number }) => {
  return (
    <Box
      mx={6}
      p={2}
      borderRadius={"7px"}
      bgColor={"#ddd"}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      width={"100%"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box display={"flex"} alignItems={"center"} gap={3}>
        <Box bgColor={"#c4e9ed"} padding={4} borderRadius={"50%"}>
          {icon}
        </Box>
        <Box>{title}</Box>`
      </Box>

      <Box>
        <Text color={"blue"}>{number}</Text>
      </Box>
    </Box>
  );
};

export default SessionSummeryBox;
