import { Box, Text } from "@chakra-ui/react";
const Section_title = ({ section_title }) => {
  return (
    <Box sx={{ display: "flex", mb: 6 }}>
      <Box
        sx={{ border: "4px solid #7563DC", borderRadius: "10px", py: 2 }}
      ></Box>

      <Text
         fontSize={{ base: "xs", md:"sm" }}
        fontWeight={"bold"}
        mr={2}
      >
        {section_title}
      </Text>
    </Box>
  );
};

export default Section_title;
