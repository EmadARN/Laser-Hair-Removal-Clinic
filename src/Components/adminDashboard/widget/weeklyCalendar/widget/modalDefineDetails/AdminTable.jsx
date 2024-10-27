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
import ModalLayout from "./ModalLayout";
import { daysOfWeek, headers } from "@/constants";
import { groupByWeekdays } from "@/Components/adminDashboard/util/getDayOfWeek";

const tableStyle = {
  mx: 6,
  border: "3px solid #efefef",
  td: { border: "1px solid #ddd" },
  th: { border: "1px solid #ddd" },
};

const AdminTable = ({
  operator_list,
  operatorsDate,
  shiftData,
  setShiftData,
  currentShift,
  setCurrentShift,
  selectedDay,
  setSelectedDay,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editing, setEditing] = useState(false);

  const handleSelect = (name) => {
    const fullName = `${name.name} ${name.last_name}`;
    setShiftData((prev) => ({
      ...prev,
      [currentShift]: {
        ...prev[currentShift],
        [selectedDay]: { fullName, userName: name.username },
      },
    }));
    onClose();
  };

  const handleShiftAction = (shift, day, isEditing = false) => {
    setCurrentShift(shift);
    setSelectedDay(day);
    setEditing(isEditing);
    onOpen();
  };

  const renderOperators = (shift, day) => {
    const programTurn = shift === "morning" ? "m" : "a";
    const validOperatorsDate = operatorsDate.operator_program || [];
    const result = groupByWeekdays(validOperatorsDate); //conver date with jalali to weekOfDay
    const operatorDataList = result.find((op) => op.day === day) || {};
    const shiftOperator = shiftData[shift]?.[day];
    const shiftOperators =
      operatorDataList.shifts?.filter(
        (op) => op.program_turn === programTurn
      ) || [];

    // برای نمایش اپراتور انتخاب شده
    if (
      shiftOperator &&
      typeof shiftOperator === "object" &&
      "fullName" in shiftOperator
    ) {
      return <Text>{shiftOperator.fullName}</Text>;
    }

    // برای اپراتورهای موجود در شیفت
    if (shiftOperators.length > 0) {
      return shiftOperators.map((op) => (
        <Text key={op.username} sx={{ cursor: "pointer" }}>
          {op.operator_name}
        </Text>
      ));
    }

    // حالت پیش‌فرض
    return (
      <Text sx={{ cursor: "pointer", fontSize: { base: "12px", md: "20px" } }}>
        +
      </Text>
    );
  };

  const handleClear = () => {
    setShiftData((prev) => ({
      ...prev,
      [currentShift]: { ...prev[currentShift], [selectedDay]: undefined },
    }));
  };

  return (
    <>
      <ModalLayout
        isOpen={isOpen}
        onClose={onClose}
        operator_list={operator_list}
        onSelect={handleSelect}
        editing={editing}
        existingName={editing ? shiftData[currentShift]?.[selectedDay] : null}
        onClear={handleClear}
      />
      <TableContainer width="100%" display="flex" justifyContent="center">
        <Table bgColor="graySky.100" width="100%" sx={tableStyle}>
          <Thead>
            <Tr>
              {headers.map(({ title }) => (
                <Th key={title} textAlign="center">
                  <Text fontWeight="bold">{title}</Text>
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {daysOfWeek.map((day) => (
              <Tr key={day}>
                <Td textAlign="center">{day}</Td>
                {["morning", "evening"].map((shift) => (
                  <Td
                    key={shift}
                    textAlign="center"
                    sx={{ cursor: "pointer" }}
                    onClick={() =>
                      handleShiftAction(
                        shift,
                        day,
                        Boolean(shiftData[shift]?.[day])
                      )
                    }
                  >
                    {renderOperators(shift, day)}
                  </Td>
                ))}
                <Td textAlign="center">8:30</Td>
                <Td textAlign="center">23:00</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminTable;
