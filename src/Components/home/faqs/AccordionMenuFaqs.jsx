import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Flex,
  Text,
} from "@chakra-ui/react";
import { DataFaQs } from "@/constants";

const AccordionMenu = () => {
  return (
    <>
      <Flex
        px={{ base: 10, md: 28 }}
        mx={2}
        pb={8}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Heading>سوالات متداول لیزر موهای زائد</Heading>
        <Text pt={4}>سوالات متداول برای مراجعین جلسه اول</Text>
      </Flex>
      <Accordion px={{ base: 10, md: 28 }} mx={2} allowToggle direction="rtl">
        {DataFaQs.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionButton>
              <Box flex="1" textAlign="right">
                <Heading size="">{item.title}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} textAlign="right">
              {item.content}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default AccordionMenu;
