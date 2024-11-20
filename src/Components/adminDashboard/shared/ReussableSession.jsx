import React from "react";
import { Box, Icon, Text } from "@chakra-ui/react";
const ReusableSession = (props) => {
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Icon mb={3} fontSize="2xl">
        {props.icon}
      </Icon>
      <Box mb={3}>
        <Text color={"#555"} fontSize={"20px"}>
          {props.text}
        </Text>
      </Box>
    </Box>
  );
};
export default ReusableSession;
