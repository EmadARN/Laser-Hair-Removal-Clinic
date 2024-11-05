import {  Table,
    Tbody,
    Tr,
    Td,
    TableContainer,
    Button,
    Box,
    useDisclosure, } from '@chakra-ui/react'
import React from 'react'
import PatientsProfile from '../paitientsProfile/PatientsProfile'

const PatientList = ({todayReserve,isPaymentTable}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box w={{ base: "100vw", md: "100%" }} px={4}>
    <TableContainer>
      <Table
      onClick={onOpen}
      cursor={'pointer'}
        overflowY="auto"
        width="100%"
        size="sm"
        dir="rtl"
        variant="striped"
      >
        <Tbody>
          {todayReserve?.all_list
            ?.filter((item) => !isPaymentTable || item.payed) // Show only paid users if isPaymentTable is true
            .map((item) => (
              <Tr key={item.id}>
                {/* ستون نام کاربر */}
                <Td
                  display={{ base: "none", sm: "table-cell" }}
                  fontSize={{ base: "12px", md: "16px" }}
                >
                  {item.user}
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
                    ورود به شارژ
                  </Button>
                </Td>

              
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
     
      <PatientsProfile
        isOpen={isOpen}
        onClose={onClose}
     
      />

  </Box>
  )
}

export default PatientList