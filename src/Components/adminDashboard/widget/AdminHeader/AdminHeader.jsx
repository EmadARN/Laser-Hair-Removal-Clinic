import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
const AdminHeader = (props) => {
  return (
    <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
      <Box m={5} display={"flex"} alignItems={"center"} gap={2}>
        <span>{props.icon}</span>
        <Text fontSize={"20px"} fontWeight={"bold"}>
          {props.headerTitle}
        </Text>
      </Box>

      <Box m={5}>
        <Button colorScheme={"blue"} py={6}>
          {props.btnValue}
        </Button>
      </Box>
    </Box>
  );
};

export default AdminHeader;
