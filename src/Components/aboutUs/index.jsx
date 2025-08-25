import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import AboutHeader from "./ui/AboutHeader";
import CounterMain from "./ui/CounterMain";

const AboutUs = () => {
  return (
    <Flex p={{ base: 6, md: 12 }} flexDirection="column" gap={{ base: 4, md: 6 }}>
      <Flex
        mt={{ base: 8, md: 17 }}
        p={{ base: 6, md: 12 }}
        width="100%"
        justifyContent="space-around"
      >
        <Box>
          <AboutHeader />
        </Box>
      </Flex>

      <Box my={{ base: 12, md: 24 }}>
        <CounterMain />
      </Box>
    </Flex>
  );
};

export default AboutUs;
