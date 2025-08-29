import React from "react";
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Button,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { getCustomerName } from "@/utils/getCustomerName";
import PatientsProfile from "./ui/PaitientsProfile";
import usePatientList from "./logic/usePatientList";

const PatientList = ({ todayReserve, isPaymentTable }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    cutomerList,
    profileInfo,
    setSelectedId,
    handleProfileClick,
    handleChargeClick,
  } = usePatientList();

  return (
    <Box w={{ base: "100vw", md: "100%" }} px={4}>
      <TableContainer>
        <Table
          overflowY="auto"
          width="100%"
          size="sm"
          dir="rtl"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          bgColor="graySky.100"
        >
          <Tbody>
            {todayReserve?.all_list
              ?.filter((item) => !isPaymentTable || item.payed) // Show only paid users if isPaymentTable is true
              .map((item) => (
                <Tr key={item.id} onClick={() => handleProfileClick(item)}>
                  {/* ستون نام کاربر */}
                  <Td
                    display={{ base: "none", sm: "table-cell" }}
                    fontSize={{ base: "12px", md: "16px" }}
                  >
                    {getCustomerName(item.user, cutomerList)}
                  </Td>

                  {/* دکمه‌ها */}
                  <Td textAlign="center">
                    <Button
                      onClick={() => {
                        setSelectedId(item);
                        onOpen();
                      }}
                      size={{ base: "xs", md: "sm" }}
                      bg="transparent"
                      color="blue"
                      px={2}
                    >
                      ورود به شارژ
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>

      <PatientsProfile
        handleChargeClick={handleChargeClick}
        isOpen={isOpen}
        onClose={onClose}
        profileInfo={profileInfo}
        cutomerList={cutomerList}
      />
    </Box>
  );
};

export default PatientList;
