import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { items } from "@/constants";
import SelectTime from "./selectTme";

// ایجاد یک کامپوننت برای مربع‌ها
const Square = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: ${({ color }) => color}; /* رنگ بر اساس prop */
`;

const Date = ({
  timeList,
  selectedDateId,
  setSelectedDateId,
  selectedSlot,
  reserveInformation,
  loading,
  error,
  setSelectedSlot,
}) => {
  return (
    <Box>
      <Box mb={2} pr={4} pt={2} pb={12} bgColor={"white"} rounded={"8px"}>
        {loading ? (
          "loading"
        ) : error ? (
          <Box color="red">خطایی رخ داده است!</Box>
        ):(
          <SelectTime
            timeList={timeList}
            selectedDateId={selectedDateId}
            setSelectedDateId={setSelectedDateId}
            selectedSlot={selectedSlot}
            setSelectedSlot={setSelectedSlot}
          />
        )}
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
              {items.map((item, index) => (
                <GridItem colSpan={index < 2 ? 2 : 4} key={index}>
                  <Flex gap={2} alignItems={"center"}>
                    <Box as="span">
                      <Square color={item.color} />
                    </Box>
                    {item.text}
                  </Flex>
                </GridItem>
              ))}
            </Grid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Box bgColor={"white"} my={2}>
        {/* <AccordionMenu
          error={error}
          loading={loading}
          reserveInformation={reserveInformation}
        /> */}
      </Box>
    </Box>
  );
};

export default Date;
