import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  useDisclosure,
} from "@chakra-ui/react";
import { AdminTableData } from "./TablwData";
import ModalAdmin from "./Modal";
const AdminTable = () => {
  const [operatorInfo, setOperatorInfo] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log("dataAll:", operatorInfo);
  return (
    <>
      {isOpen ? (
        <ModalAdmin
          setOperatorInfo={setOperatorInfo}
          onOpen={onOpen}
          onClose={onClose}
          isOpen={isOpen}
        />
      ) : null}
      <TableContainer width={"100%"} display={"flex"} justifyContent={"center"}>
        <Table
          width={"70%"}
          variant="simple"
          sx={{
            td: {
              border: "1px solid #111",
            },
            th: {
              border: "1px solid #111",
            },
          }}
        >
          <Thead>
            <Tr>
              <Th textAlign={"center"}>روز</Th>
              <Th textAlign={"center"}>شیفت صبح</Th>
              <Th textAlign={"center"}>شیفت عصر</Th>
              <Th textAlign={"center"}> ساعت شروع نوبت دهی</Th>
              <Th textAlign={"center"}>ساعت اتمام نوبت دهی</Th>
            </Tr>
          </Thead>
          <Tbody>
            {AdminTableData.map((data) => {
              return (
                <Tr id={data.id}>
                  <Td textAlign={"center"}>{data.day}</Td>
                  <Td textAlign={"center"}>
                    <Button onClick={onOpen}>
                      {operatorInfo == data.id ? data.id : "+"}
                    </Button>
                  </Td>
                  <Td textAlign={"center"}>
                    <Button onClick={onOpen}>
                      {operatorInfo == data.id ? data.id : "+"}
                    </Button>
                  </Td>
                  <Td textAlign={"center"}>{data.timefor_turn}</Td>
                  <Td textAlign={"center"}>{data.finish_time_turn}</Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminTable;
