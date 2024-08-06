import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
const ReusableSession = (props) => {
  return (
    <Box
    bgColor={'#ddd'}
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box mb={3}>{props.icon}</Box>

      <Box mb={3}>
        <Text color={"#555"} fontSize={"20px"}>
          {props.text}
        </Text>
      </Box>

      <Box>
        <Button py={7} colorScheme={"blue"} display={props.display}>
          {props.buttonValue}
        </Button>
      </Box>
    </Box>
  );
};

export default ReusableSession;
