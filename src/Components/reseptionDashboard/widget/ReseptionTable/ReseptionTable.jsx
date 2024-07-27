import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Box,
  Td,
  Checkbox,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { TableData } from "./Data";
export const ReseptionTable = (props) => {
  return (
    <TableContainer>
      <Table
        overflowY={"auto"}
        width={"100%"}
        size={"md"}
        dir="rtl"
        variant="striped"
        colorScheme="gray"
      >
        <Tbody>
          {TableData.map((item) => {
            return (
              <Tr id={item.id}>
                <Td>
                  <Checkbox
                    display={props.display}
                    border={"1px solid #444"}
                    colorScheme="gray"
                    ml={6}
                  />
                  {item.customerName}
                </Td>

                <Td>{item.rezervationTime}</Td>
                <Td>{item.laserarea} </Td>
                <Td>
                  <Button color={"blue"}>{props.ButtonValue}</Button>
                </Td>
                <Td>
                  <Button color={"red"}>لغو نوبت</Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
