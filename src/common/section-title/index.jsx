import { Box, Text } from "@chakra-ui/react";
const Section_title = ({ section_title, size }) => {
  return (
    <Box sx={{ display: "flex", mb: 6 }}>
      <Box
        sx={{ border: "4px solid brand.400", borderRadius: "10px", py: 2 }}
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

export default Section_title;
