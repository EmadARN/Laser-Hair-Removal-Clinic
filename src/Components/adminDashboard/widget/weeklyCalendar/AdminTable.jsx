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
import ModalDefine from "@/Common/moadals/ModalDefine";
import ModalBodyContent from "./widget/modalDefineDetails/ModalBodyContent";
import ModalFooterContent from "./widget/modalDefineDetails/ModalFooterContent";

const AdminTable = () => {
  const [operatorInfo, setOperatorInfo] = useState();
  const { isOpen, onOpen } = useDisclosure();
  console.log("dataAll:", operatorInfo);
  return (
    <>
      {isOpen ? (
        <ModalDefine
          displayHeader="none"
          renderContent={() => ({
            body: <ModalBodyContent setOperatorInfo={setOperatorInfo} />,
            footer: <ModalFooterContent />,
          })}
          setOperatorInfo={setOperatorInfo}
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
                <Tr id={data.id} key={data.id}>
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
