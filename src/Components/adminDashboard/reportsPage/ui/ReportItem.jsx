import { Box, Flex, Text } from "@chakra-ui/react";
import { getCustomerName } from "@/utils/getCustomerName";
import { extractDate } from "@/utils/extractDate";

const ReportItem = ({ item, customerListAdmin }) => {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      bgColor="#FEFEFE"
    >
      <Flex justifyContent="space-between" alignItems="center" gap={4}>
        {/* نام کاربر */}
        <Box flex="1" minWidth="0">
          <Text
            fontWeight="bold"
            fontSize={{ base: "14px", md: "16px" }}
            noOfLines={1}
          >
            {getCustomerName(item.user, customerListAdmin)}
          </Text>
        </Box>

        {/* تاریخ رزرو */}
        <Box flex="1" minWidth="0" textAlign="right">
          <Text fontSize={{ base: "12px", md: "14px" }} color="gray.600">
            {extractDate(item.reserve_time_str)}
          </Text>
        </Box>

        {/* ناحیه لیزر */}
        <Box flex="1" maxWidth={{ base: "50px", md: "110px" }} textAlign="left">
          <Text
            fontSize={{ base: "12px", md: "14px" }}
            color="brand.400"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
          >
            {item.laser_area_name}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ReportItem;
