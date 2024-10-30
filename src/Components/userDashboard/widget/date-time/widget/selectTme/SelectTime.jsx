import { Flex, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ShiftSelection } from "./widgets/ShiftButton";
import TimeSlots from "./widgets/TimeSlots";
import DateSelection from "./widgets/DateSelection";
import { useCookies } from "react-cookie";

export default function SelectTime({
  timeList,
  selectedDateId,
  setSelectedDateId,
  selectedSlot,
  setSelectedSlot,
}) {
  const [selectedShift, setSelectedShift] = useState("morning");
  const [cookie, setCookie] = useCookies(["date", "name", "slots"]);

  useEffect(() => {
    if (timeList?.time_data?.length) {
      setSelectedDateId(timeList.time_data[0].date_id);
    }
  }, [timeList]);

  const handleClickDate = (dateId) => {
    setSelectedDateId(dateId);
    setSelectedSlot(null);
    setCookie("date", dateId.replace(/\//g, "-")),
      {
        path: "/",
      };
    setCookie("name", operatorName.replace(/ /g, "-")),
      {
        path: "/",
      };
  };

  const handleShiftClick = (shift) => {
    setSelectedShift(shift);
    setSelectedSlot(null);
  };

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
    setCookie("slots", slot),
      {
        path: "/",
      };
  };

  const selectedDateData = timeList?.time_data?.find(
    (item) => item.date_id === selectedDateId
  );

  const operatorName = selectedDateData
    ? selectedShift === "morning"
      ? selectedDateData.morning_operator
      : selectedDateData.afternoon_operator
    : null;

  const numberOfSlots = selectedDateData
    ? selectedShift === "morning"
      ? selectedDateData.morning_time.length
      : selectedDateData.afternoon_time.length
    : 0;

  return (
    <VStack spacing={4} align="start">
      <DateSelection
        timeList={timeList}
        selectedDateId={selectedDateId}
        onClickDate={handleClickDate}
        numberOfSlots={numberOfSlots}
      />

      <ShiftSelection
        selectedShift={selectedShift}
        onShiftClick={handleShiftClick}
      />

      {operatorName && (
        <Text fontSize="lg" mt={4} fontWeight="bold" color="gray.500">
          اپراتور: {operatorName}
        </Text>
      )}

      {selectedDateData && (
        <Flex w="100%" p={4} overflowX="auto">
          <TimeSlots
            slots={
              selectedShift === "morning"
                ? selectedDateData.morning_time
                : selectedDateData.afternoon_time
            }
            selectedSlot={selectedSlot}
            onSlotClick={handleSlotClick}
          />
        </Flex>
      )}
    </VStack>
  );
}
