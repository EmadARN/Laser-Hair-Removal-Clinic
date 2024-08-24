import React from "react";
import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import CardProductView from "../CardProductView/CardProductView";
import AccordionMenu from "../accordionMenu/AccordionMenu";
import { day, shift, time } from "@/constants";

const Date = () => {
  const PurpleSquare = styled.div`
    width: 20px;
    height: 20px;
    background-color: brand.400;
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  `;
  return (
    <Box>
      <Box mb={2} pr={4} pt={2} pb={12} bgColor={"white"} rounded={"8px"}>
        <CardProductView data={day} />
        <CardProductView data={shift} />
        <Text pt={6}>
          اوپراتور:<span>زیبا کرمی</span>
        </Text>
        <CardProductView data={time} />
      </Box>

      <Accordion defaultIndex={[0]} allowMultiple bgColor={"white"}>
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
      <Box bgColor={"white"} my={2}>
        <AccordionMenu />
      </Box>
    </Box>
  );
};

export default Date;
