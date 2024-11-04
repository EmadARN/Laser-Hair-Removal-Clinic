import React, { useState } from "react";
import {
  Table,
  Tbody,
  Tr,
  Td,
  Checkbox,
  TableContainer,
  Button,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { extractTime } from "@/utils/extractTime";
import PaymentDialog from "../paymentDialog/PaymentDialog";
import { useDispatch } from "react-redux";
import { cancelReserve } from "@/features/receptionDashboard/receptionDashboardSlice";

export const ReseptionTable = ({
  isDisabled,
  ButtonValue,
  display,
  todayReserve,
  auth_Employee_token,
}) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedReserve, setSelectedReserve] = useState(null);

  const handlePaymentClick = (item) => {
    setSelectedReserve(item);
    onOpen();
  };

  const cancelHandler = (item) => {
    setSelectedReserve(item);
    dispatch(
      cancelReserve({
        reserve: item.id,
        cancel_type: "sc",
        sms_status: true,
        auth_Employee_token,
      })
    );
  };

  return (
    <Box w={{ base: "100vw", md: "100%" }} px={4}>
      <TableContainer>
        <Table
          overflowY="auto"
          width="100%"
          size="sm"
          dir="rtl"
          variant="striped"
        >
          <Tbody>
            {todayReserve?.all_list?.map((item) => (
              <Tr key={item.id}>
                {/* ستون چک‌باکس */}
                <Td px={{ base: 1, md: 2 }} textAlign="center">
                  <Checkbox
                    border="1px solid #444"
                    colorScheme="gray"
                    size={{ base: "sm", md: "md" }}
                  />
                </Td>

                {/* ستون نام کاربر */}
                <Td
                  display={{ base: "none", sm: "table-cell" }}
                  fontSize={{ base: "12px", md: "16px" }}
                >
                  {item.user}
                </Td>

                {/* ستون زمان رزرو */}
                <Td
                  display={{ base: "none", sm: "table-cell" }}
                  fontSize={{ base: "12px", md: "16px" }}
                >
                  {extractTime(item.reserve_time_str)}
                </Td>

                {/* ستون ناحیه لیزر */}
                <Td
                  display={{ base: "none", md: "table-cell" }}
                  fontSize={{ base: "12px", md: "16px" }}
                >
                  {item.laser_area_name}
                </Td>

                {/* دکمه‌ها */}
                <Td textAlign="center">
                  <Button
                    onClick={() => handlePaymentClick(item)}
                    size={{ base: "xs", md: "sm" }}
                    bg="transparent"
                    color="blue"
                    px={2}
                  >
                    {ButtonValue}
                  </Button>
                </Td>

                <Td textAlign="center">
                  <Button
                    onClick={() => cancelHandler(item)}
                    display={display}
                    isDisabled={isDisabled}
                    size={{ base: "xs", md: "sm" }}
                    bg="transparent"
                    color="red"
                    px={2}
                  >
                    لغو نوبت
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {isOpen && (
        <PaymentDialog
          isOpen={isOpen}
          onClose={onClose}
          reserve={selectedReserve}
        />
      )}
    </Box>
  );
};
