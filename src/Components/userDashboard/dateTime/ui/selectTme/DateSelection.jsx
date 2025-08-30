import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { groupByWeekdays } from "../../logic/getDayOFWeeks";

const DateSelection = ({
  timeList,
  selectedDateId,
  onClickDate,
  numberOfSlots,
}) => {
  return (
    <Flex
      overflowX="auto"
      w="100%"
      p={4}
      gap={2}
      css={{
        scrollSnapType: "x mandatory", // Enable horizontal snap
        "& > div": {
          scrollSnapAlign: "start", // Align each box at the start of the viewport
        },
      }}
    >
      {timeList &&
        timeList.time_data &&
        timeList.time_data?.map((item) => (
          <Box
            key={item.date_id}
            onClick={() => onClickDate(item.date_id)}
            p={{ base: 4, md: 10 }}
            borderRadius="md"
            border="1px solid #e0e0e0"
            bg={selectedDateId === item.date_id ? "brand.400" : "white"}
            color={selectedDateId === item.date_id ? "white" : "black"}
            minWidth={{ base: "60px", sm: "80px" }}
            flex="none" // Prevent flex items from growing or shrinking
            textAlign="center"
            cursor="pointer"
            _hover={{ bg: "purple.200" }}
            transition="background 0.3s"
            boxShadow="md"
          >
            <Text fontWeight="bold">{item.date}</Text>
            <Text fontSize="sm" mt={1}>
              {groupByWeekdays(item.date_id)}
            </Text>
            <Text fontSize="xs" mt={1}>
              {numberOfSlots
                ? `${numberOfSlots} نوبت`
                : `${item.time_length} نوبت`}
            </Text>
          </Box>
        ))}
    </Flex>
  );
};

export default DateSelection;
