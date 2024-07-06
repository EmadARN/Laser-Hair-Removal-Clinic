import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
const AccordionMenu = () => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton display={"flex"} justifyContent={"space-between"}>
            <Box as="span" textAlign="right">
              اطلاعات نوبت
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Stack>
            <Box>
              مدت زمان جلسه :<Box as="span"></Box>
            </Box>
            <Box>
              نواحی انتخاب شده :<Box as="span"></Box>
            </Box>
            <Box>
              ودیعه جهت رزرو نوبت :<Box as="span"></Box>
            </Box>
            <Box>
              موجودی کیف پول :<Box as="span"></Box>
            </Box>
            <Box>
              مبلغ کل:
              <Box as="span"></Box>
            </Box>
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionMenu;
