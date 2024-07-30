import React from "react";
import {
  Table,
  Tbody,
  Tr,
  Td,
  Checkbox,
  TableContainer,
  Button,
  Box,
} from "@chakra-ui/react";
import { TableData } from "./Data";
import HeaderDetails from "../headerDetails/HeaderDetails";
import SearchInput from "@/Common/searchInput/SearchInput";
export const ReseptionTable = () => {
  return (
    <>
      <Box sx={{ pt: 6 }}>
        <HeaderDetails />
      </Box>
      <Box sx={{ py: 6 }}>
        <SearchInput size={"lg"} placeholder="جستجو در نوبت های روز" />
      </Box>
      <TableContainer>
        <Table
          overflowY={"auto"}
          width={"100%"}
          size={"md"}
          dir="rtl"
          variant="striped"
        >
          <Tbody>
            {TableData.map((item) => {
              return (
                <Tr id={item.id} key={item.id}>
                  <Td>
                    <Checkbox
                      border={"1px solid #444"}
                      colorScheme="gray"
                      ml={6}
                    />
                    {item.customerName}
                  </Td>

                  <Td>{item.rezervationTime}</Td>
                  <Td>{item.laserarea} </Td>
                  <Td>
                    <Button sx={{ bgColor: "transparent", color: "blue" }}>
                      پرداخت
                    </Button>
                  </Td>
                  <Td>
                    <Button sx={{ bgColor: "transparent", color: "red" }}>
                      لغو نوبت
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
