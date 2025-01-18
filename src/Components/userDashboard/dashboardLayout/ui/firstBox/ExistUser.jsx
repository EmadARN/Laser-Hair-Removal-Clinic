import React from "react";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import SectionTitle from "@/Common/sectionTitle";
import CancelTurnModal from "@/Components/userDashboard/cancelTurn/CancelTurnModal";
import { UserData } from "@/constants";
import { getReserveStatus } from "@/Components/userDashboard/utils/ReserveStatus";
import { extractDate, extractTime } from "@/utils/extractDate";

const formatReserveData = (item, sessionRecords, operatorName) => {
  switch (item.title) {
    case "تاریخ":
      return extractDate(sessionRecords?.last_reserve?.reserve_time_str);
    case "زمان":
      return extractTime(sessionRecords?.last_reserve?.reserve_time_str);
    case "اپراتور":
      return operatorName;
    case "مبلغ کل":
      return sessionRecords?.last_reserve?.total_price_amount;
    default:
      return "";
  }
};

const ReserveInfoRow = ({ title, value }) => (
  <Flex justifyContent="space-between" p={2} w="100%">
    <Text color="#999" fontSize={{ base: "13px", md: "14px" }}>
      {title}
    </Text>
    <Text fontWeight="bold" fontSize={{ base: "13px", md: "14px" }}>
      {value}
    </Text>
  </Flex>
);

const ExistUser = ({ sessionRecords, operatorName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      borderRadius="10px"
      bgColor="white"
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        h="auto"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        width="100%"
        p={4}
      >
        <SectionTitle section_title="نوبت بعدی شما" />
        <ReserveInfoRow
          title="وضعیت"
          value={getReserveStatus(sessionRecords?.last_reserve?.reserve_type)}
        />
        {UserData.map((item) => (
          <ReserveInfoRow
            key={item.id}
            title={item.title}
            value={formatReserveData(item, sessionRecords, operatorName)}
          />
        ))}
        <Box mt={3} display="flex" justifyContent="center" width="100%">
          <Button
            bgColor="#1111"
            color="#888"
            borderRadius="7px"
            onClick={onOpen}
            width="95%"
          >
            لغو نوبت
          </Button>
        </Box>
      </Box>
      {isOpen && (
        <CancelTurnModal onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
      )}
    </Flex>
  );
};

export default ExistUser;
