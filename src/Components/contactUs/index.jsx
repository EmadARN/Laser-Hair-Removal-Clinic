import React from "react";
import HeaderImg from "./ui/HeaderImg";
import { Box, Flex } from "@chakra-ui/react";
import SectionInfo from "./ui/SectionInfo";

const ContactUs = () => {
  return (
    <Flex flexDirection={"column"} gap={5}>
      <Box width={"100%"}>
        {/* header image box */}
        <HeaderImg />

        <Box
          width={"70%"}
          margin={"auto"}
          borderBottom={"2px solid #444"}
          mt={4}
        ></Box>
      </Box>

      {/* contact info box */}
      <Box p={14} width={"100%"}>
        <SectionInfo />
      </Box>
    </Flex>
  );
};

export default ContactUs;
