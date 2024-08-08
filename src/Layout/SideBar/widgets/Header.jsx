import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Header = ({ textHead }) => {
  return (
    <Box mb="25px">
      <Flex
        sx={{
          alignItems: "center",
          gap: "6px",
          mr: "40px",
          fontSize: { base: "12px", md: "14px", lg: "16px" },
          color: "gray",
        }}
      >
        <Text>{textHead}:</Text>
        <Text fontWeight="bold">سهند</Text>
      </Flex>
    </Box>
  );
};

export default Header;
