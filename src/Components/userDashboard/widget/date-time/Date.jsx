import CardProductView from "@/Common/CardProductView/CardProductView";
import React from "react";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import AccordionMenu from "@/Common/accordionMenu/AccordionMenu";
import { day, shift, time } from "@/Common/CardProductView/data";

const Date = () => {
  const PurpleSquare = styled.div`
    width: 20px;
    height: 20px;
    background-color: purple;
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  `;
  return (
    <Box>
      <CardProductView data={day} />
      <CardProductView data={shift} />
      <CardProductView data={time} />

      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton display={"flex"} justifyContent={"end"}>
              <Box as="span" textAlign="right">
                بستن راهنما
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
              <GridItem colSpan={2}>
                <Flex gap={2} alignItems={"center"}>
                  <Box as="span">
                    <PurpleSquare />
                  </Box>
                  انتخاب شما
                </Flex>
              </GridItem>
              <GridItem colSpan={2}>
                <Flex gap={2} alignItems={"center"}>
                  <Box as="span">
                    <PurpleSquare />
                  </Box>
                  قابل انتخاب
                </Flex>
              </GridItem>
              <GridItem colSpan={4}>
                <Flex gap={2} alignItems={"center"}>
                  <Box as="span">
                    <PurpleSquare />
                  </Box>
                  در انتظار پرداخت سایر مراجعین
                </Flex>
              </GridItem>
            </Grid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <AccordionMenu />
    </Box>
  );
};

export default Date;
