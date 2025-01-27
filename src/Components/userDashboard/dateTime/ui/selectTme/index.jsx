import { Flex, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import DateSelection from "./DateSelection";
import { ShiftSelection } from "./ShiftButton";
import TimeSlots from "./TimeSlots";

export default function SelectTime({
  timeList,
  selectedDateId,
  setSelectedDateId,
  selectedSlot,
  setSelectedSlot,
}) {
  const [selectedShift, setSelectedShift] = useState("morning");

  useEffect(() => {
    if (timeList?.time_data?.length) {
      setSelectedDateId(timeList.time_data[0].date_id);
    }
  }, [timeList,setSelectedDateId]);

  useEffect(() => {
    // بارگذاری مقادیر از localStorage در زمان راه‌اندازی کامپوننت
    const storedDate = localStorage.getItem("date");
    const storedSlots = localStorage.getItem("slots");

    if (storedDate) {
      setSelectedDateId(storedDate);
    }
    if (storedSlots) {
      setSelectedSlot(storedSlots);
    }
  }, [setSelectedDateId,setSelectedSlot]);

  const handleClickDate = (dateId) => {
    setSelectedDateId(dateId);
    setSelectedSlot(null);

    // ذخیره‌سازی در localStorage
    localStorage.setItem("date", dateId.replace(/\//g, "-"));
    localStorage.setItem("operatorName", operatorName.replace(/ /g, "-"));
  };

  const handleShiftClick = (shift) => {
    setSelectedShift(shift);
    setSelectedSlot(null);
  };

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
    localStorage.setItem("slots", slot);
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
