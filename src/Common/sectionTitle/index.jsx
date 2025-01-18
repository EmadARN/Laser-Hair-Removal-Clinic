import { Box, Text } from "@chakra-ui/react";
import React from "react";

const SectionTitle = ({ section_title, size }) => {
  return (
    <Box sx={{ display: "flex", mb: 6 }}>
      <Box
        sx={{ border: "4px solid #7563DC", borderRadius: "10px", py: 2 }}
      ></Box>

      <Text
        fontSize={{ base: "xs", md: size || "sm" }}
        fontWeight={"bold"}
        mr={2}
        color={"gray.600"}
      >
        {section_title}
      </Text>
    </Box>
  );
};

export default SectionTitle;
