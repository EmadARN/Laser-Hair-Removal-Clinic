import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Icon } from "@chakra-ui/react";
import { FaChevronLeft } from "react-icons/fa";
import { extractDate } from "@/utils/extractDate";
import { toPersianDigits } from "@/utils/toPersianDigits";
import { getReserveStatus } from "../../utils/ReserveStatus";

const SessionList = ({ sessions, onSessionClick, ComparePayeds }) => {
  const isCancelled = (session) => session?.reserve_type === "sc";

  const date = new Date();
  const nowDay = date.toLocaleDateString("fa-IR");
  // تابع کمکی برای تبدیل تاریخ به فرمت YYYY.MM.DD
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("/");
    return `${year}/${month.padStart(2, "0")}/${day.padStart(2, "0")}`;
  };
  return (
    <Box overflowX="auto" height="300px">
      <Table variant="simple" size="md">
        <Thead bg="gray.100">
          <Tr>
            <Th textAlign="center">تاریخ</Th>
            <Th textAlign="center">وضعیت رزرو</Th>
            <Th textAlign="center">جزئیات</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sessions.map((session) => {
            const isPaid = ComparePayeds.includes(session.id);
            const formattedDate = formatDate(
              extractDate(session.reserve_time_str)
            );
            const compare =
              session?.reserve_type === "pe" &&
              toPersianDigits(formattedDate) < nowDay;

            return (
              <Tr
                key={session.id}
                cursor="pointer"
                _hover={{ bg: "gray.50" }}
                onClick={() => onSessionClick(session, isPaid)}
              >
                <Td textAlign="center">{toPersianDigits(formattedDate)}</Td>
                <Td
                  textAlign="center"
                  color={
                    isCancelled(session)
                      ? "red.500"
                      : isPaid || compare
                      ? "gray.400"
                      : "green.500"
                  }
                  fontWeight="bold"
                >
                  {getReserveStatus(
                    isPaid ? "co" : compare ? "" : session?.reserve_type
                  )}
                </Td>
                <Td textAlign="center">
                  <Icon as={FaChevronLeft} boxSize={4} />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default SessionList;
