import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Header = ({ textHead }) => {
  return (
    <Box mb="25px">
      <Flex sx={{ alignItems: "center", gap: "6px", mr: "40px" }}>
        <Text sx={{ color: "gray" }}>{textHead}:</Text>
        <Text fontWeight="bold" sx={{ color: "gray" }}>
          سهند
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
