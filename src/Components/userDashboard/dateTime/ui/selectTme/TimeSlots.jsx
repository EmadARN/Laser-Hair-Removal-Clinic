import { Box, Text, Grid } from "@chakra-ui/react";

const TimeSlots = ({ slots, selectedSlot, onSlotClick }) => (
  <Grid
    templateColumns="repeat(auto-fill, minmax(100px, 1fr))"
    gap={4}
    w="100%"
  >
    {slots.map((slot, index) => (
      <Box
        key={index}
        p={4}
        border="1px solid #e0e0e0"
        bg={selectedSlot === slot ? "purple.500" : "#fff"}
        borderRadius="md"
        onClick={() => onSlotClick(slot)} // Call onSlotClick when clicked
        cursor="pointer"
        _hover={{ bg: selectedSlot === slot ? "purple.600" : "purple.200" }}
        transition="background 0.3s"
        textAlign="center"
      >
        <Text color={selectedSlot === slot ? "white" : "black"}>{slot}</Text>
      </Box>
    ))}
  </Grid>
);

export default TimeSlots;
