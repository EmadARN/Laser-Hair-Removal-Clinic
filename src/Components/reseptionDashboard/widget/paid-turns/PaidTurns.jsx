import React from "react";
import { Box, Stack } from "@chakra-ui/react";
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
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton display={"flex"} justifyContent={"space-between"}>
            <Box as="span" textAlign="right">
              نمایش
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Stack>
            <ReseptionTable display="none" ButtonValue="ورود به شارژ" />
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default PaidTurns;
