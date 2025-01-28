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
      <Flex justifyContent="space-between" alignItems="center">
        {/* نام کاربر */}
        <Text fontWeight="bold" fontSize={{ base: "14px", md: "16px" }}>
          {getCustomerName(item.user, customerListAdmin)}
        </Text>

        {/* تاریخ رزرو */}
        <Text fontSize={{ base: "12px", md: "14px" }} color="gray.600">
          {extractDate(item.reserve_time_str)}
        </Text>

        {/* ناحیه لیزر */}
        <Text fontSize={{ base: "12px", md: "14px" }} color="blue.600">
          {item.laser_area_name}
        </Text>
      </Flex>
    </Box>
  );
};

export default ReportItem;
