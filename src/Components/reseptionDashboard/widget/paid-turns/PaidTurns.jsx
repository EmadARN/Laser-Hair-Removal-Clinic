import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { ReseptionTable } from "../ReseptionTable/ReseptionTable";
const PaidTurns = () => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple mt={10}>
      <AccordionItem>
        <Text>
          <AccordionButton
            display={"flex"}
            justifyContent={"space-between"}
            p={0}
          >
            <Box>نوبت های پرداخت شده</Box>
            <Box as="span" textAlign="right">
              نمایش <AccordionIcon />
            </Box>
          </AccordionButton>
        </Text>
        <AccordionPanel pb={4} px={0}>
          <Stack>
            <ReseptionTable display="none" ButtonValue="ورود به شارژ" />
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default PaidTurns;
