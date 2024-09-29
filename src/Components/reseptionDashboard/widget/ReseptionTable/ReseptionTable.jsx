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
import { TableData } from "@/constants";

export const ReseptionTable = ({isDisabled,ButtonValue,display}) => {
  return (
    <Box sx={{ w: { base: "100vw", md: "100%" }, px: 4 }}>
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

                  <Td display={display}>{item.rezervationTime}</Td>
                  <Td display={display}>{item.laserarea} </Td>
                  <Td>
                    <Button sx={{ bgColor: "transparent", color: "blue" }}>
                     {ButtonValue}
                    </Button>
                  </Td>
                  <Td>
                    <Button display={display} isDisabled={isDisabled} sx={{ bgColor: "transparent", color: "red" }}>
                      لغو نوبت
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
