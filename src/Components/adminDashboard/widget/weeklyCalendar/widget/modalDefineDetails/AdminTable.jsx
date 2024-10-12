import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { daysOfWeek, headers } from "@/constants";
import ModalLayout from "./ModalLayout";

const AdminTable = ({
  operator_list,
  shiftData,
  setShiftData,
  currentShift,
  setCurrentShift,
  selectedDay,
  setSelectedDay,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editing, setEditing] = useState(false);

  const handleShiftClick = (shift, day) => {
    setCurrentShift(shift);
    setSelectedDay(day);
    setEditing(false);
    onOpen();
  };

  const handleSelect = (name) => {
    const fullName = `${name.name} ${name.last_name}`;
    setShiftData((prev) => ({
      ...prev,
      [currentShift]: { ...prev[currentShift], [selectedDay]: fullName },
    }));

    onClose();
  };

  const handleClear = () => {
    setShiftData((prev) => ({
      ...prev,

      [currentShift]: { ...prev[currentShift], [selectedDay]: undefined },
    }));
    onClose();
  };

  const handleNameClick = (shift, day) => {
    setCurrentShift(shift);
    setSelectedDay(day);
    setEditing(true);
    onOpen();
  };
  const tableStyle = {
    mx: 6,
    border: "3px solid #efefef",
    td: {
      border: "1px solid #ddd",
    },
    th: {
      border: "1px solid #ddd",
    },
  };
  return (
    <>
      <ModalLayout
        isOpen={isOpen}
        onClose={onClose}
        shiftData={operator_list}
        onSelect={handleSelect}
        editing={editing}
        existingName={
          editing ? shiftData[currentShift][selectedDay] : undefined
        }
        onClear={handleClear}
      />
      <TableContainer width={"100%"} display={"flex"} justifyContent={"center"}>
        <Table
          bgColor={"#efefef"}
          width={"100%"}
          variant="simple"
          sx={tableStyle}
        >
          <Thead>
            <Tr>
              {headers.map(({ title }) => (
                <Th textAlign={"center"} key={title}>
                  <Text fontWeight={"bold"}>{title}</Text>
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {daysOfWeek.map((day) => (
              <Tr key={day}>
                <Td textAlign={"center"}>{day}</Td>
                {["morning", "evening"].map((shift) => (
                  <Td
                    key={shift}
                    textAlign={"center"}
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      if (shiftData[shift][day]) {
                        handleNameClick(shift, day); // برای ویرایش نام
                      } else {
                        handleShiftClick(shift, day); // برای اضافه کردن اپراتور
                      }
                    }}
                  >
                    {shiftData[shift][day] ? (
                      <Text>{shiftData[shift][day]}</Text>
                    ) : (
                      <Text
                        sx={{
                          all: "unset",
                          fontSize: { base: "12px", md: "20px" },
                        }}
                        onClick={(e) => {
                          e.stopPropagation(); // جلوگیری از فراخوانی onClick روی Td
                        }}
                      >
                        +
                      </Text>
                    )}
                  </Td>
                ))}

                <Td color={"#555"} textAlign={"center"}>
                  8:30
                </Td>
                <Td color={"#555"} textAlign={"center"}>
                  23:00
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminTable;
