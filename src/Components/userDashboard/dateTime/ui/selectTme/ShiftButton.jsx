import { Box, Flex, Text } from "@chakra-ui/react";

function ShiftButton({ label, onClick, isSelected }) {
  return (
    <Box
      onClick={onClick}
      p={3}
      borderRadius="md"
      border="1px solid #e0e0e0"
      bg={isSelected ? "purple.500" : "white"}
      color={isSelected ? "white" : "black"}
      minWidth="80px"
      textAlign="center"
      cursor="pointer"
      _hover={{ bg: "purple.200" }}
      transition="background 0.3s"
    >
      <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
        {label}
      </Text>
    </Box>
  );
}
export const ShiftSelection = ({ selectedShift, onShiftClick }) => (
  <Flex w="100%" p={4} gap={1}>
    <ShiftButton
      label="شیفت صبح"
      onClick={() => onShiftClick("morning")}
      isSelected={selectedShift === "morning"}
    />
    <ShiftButton
      label="شیفت عصر"
      onClick={() => onShiftClick("afternoon")}
      isSelected={selectedShift === "afternoon"}
    />
  </Flex>
);
