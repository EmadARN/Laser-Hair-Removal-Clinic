import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import AboutHeader from "./ui/AboutHeader";
import CounterMain from "./ui/CounterMain";

const AboutUs = () => {
  return (
    <Flex p={12} flexDirection="column" gap={6}>
      <Flex
        container
        mt={17}
        p={12}
        width={"100%"}
        justifyContent={"space-around"}
      >
        <Box>
          <AboutHeader />
        </Box>
      </Flex>

      <Box my={24}>
        <CounterMain />
      </Box>
    </Flex>
  );
};

export default AboutUs;
