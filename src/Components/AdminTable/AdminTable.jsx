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
  Text,
} from "@chakra-ui/react";
import { AdminTableData } from "./TablwData";
import ModalAdmin from "./Modal";
const AdminTable = () => {
  const [operatorInfo, setOperatorInfo] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          bgColor={"#efefef"}
          width={"70%"}
          variant="simple"
          sx={{
            border: "3px solid #efefef",
            td: {
              border: "1px solid #ddd",
            },
            th: {
              border: "1px solid #ddd",
            },
          }}
        >
          <Thead>
            <Tr>
              <Th textAlign={"center"}>
                <Text fontWeight={"bold"}>روز</Text>
              </Th>
              <Th fontWeight={"bold"} textAlign={"center"}>
                {" "}
                <Text fontWeight={"bold"}>شیفت صبح</Text>
              </Th>
              <Th fontWeight={"bold"} textAlign={"center"}>
                {" "}
                <Text fontWeight={"bold"}>شبفت عصر</Text>
              </Th>
              <Th fontWeight={"bold"} textAlign={"center"}>
                {" "}
                <Text fontWeight={"bold"}> ساعت شروع نوبت دهی</Text>
              </Th>
              <Th fontWeight={"bold"} textAlign={"center"}>
                <Text fontWeight="bold"> ساعت اتمام نوبت دهی</Text>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {AdminTableData.map((data) => {
              return (
                <Tr id={data.id}>
                  <Td textAlign={"center"}>{data.day}</Td>
                  <Td textAlign={"center"}>
                    <Button
                      fontSize={"20px"}
                      variant={"ghost"}
                      onClick={onOpen}
                    >
                      {operatorInfo == data.id ? data.id : "+"}
                    </Button>
                  </Td>
                  <Td textAlign={"center"}>
                    <Button
                      fontSize={"20px"}
                      variant={"ghost"}
                      onClick={onOpen}
                    >
                      {operatorInfo == data.id ? data.id : "+"}
                    </Button>
                  </Td>
                  <Td color={"#555"} textAlign={"center"}>
                    {data.timefor_turn}
                  </Td>
                  <Td color={"#555"} textAlign={"center"}>
                    {data.finish_time_turn}
                  </Td>
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
