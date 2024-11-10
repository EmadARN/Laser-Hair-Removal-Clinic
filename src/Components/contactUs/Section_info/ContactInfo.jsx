import { contactDetails } from "@/constants";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ContactInfo = () => {
  return (
    <Box display="flex" flexDirection="column" gap={4}>
      {contactDetails.map((detail, index) => (
        <Box key={index} gap={3} display="flex" flexDirection="column">
          <Text
            fontWeight="bold"
            fontSize={{ base: "16px", md: "22px" }}
            color="gray.600"
          >
            {detail.title}
          </Text>
          <Text fontSize={{ base: "12px", md: "17px" }} color="gray.500">
            {detail.content}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default ContactInfo;
