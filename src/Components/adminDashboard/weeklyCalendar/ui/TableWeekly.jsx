import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { tableHeaders } from "@/constants";

const TableWeekly = ({ handleCellClick, tableData = [], programList = [] }) => {
  const getCellContent = (index) => {
    if (!programList.length) return "+";
    return programList[index]?.operator_name || "+";
  };

  const renderRow = (row, index) => (
    <Tr key={index}>
      <Td textAlign="center">{row}</Td>
      <Td
        textAlign="center"
        cursor="pointer"
        whiteSpace="nowrap"
        onClick={() => handleCellClick(row, "morningShift", index * 2)}
      >
        {getCellContent(index * 2)}
      </Td>
      <Td
        textAlign="center"
        cursor="pointer"
        whiteSpace="nowrap"
        onClick={() => handleCellClick(row, "afternoonShift", index * 2 + 1)}
      >
        {getCellContent(index * 2 + 1)}
      </Td>
      <Td textAlign="center">{tableData.time.morning_time}</Td>
      <Td textAlign="center">{tableData.time.afternoon_time}</Td>
    </Tr>
  );

  return (
    <Box
        id="printable-table"
      className="printable"
      padding={4}
      width="100%"
      overflowX="auto"
      
    >
      <Table variant="simple" size="md">
        <Thead bg="brand.400">
          <Tr>
            {tableHeaders.map((header) => (
              <Th
                key={header.key}
                color="#fff"
                textAlign="center"
                whiteSpace="nowrap"
              >
                {header.label}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>{tableData.day.map(renderRow)}</Tbody>
      </Table>
    </Box>
  );
};

export default TableWeekly;
