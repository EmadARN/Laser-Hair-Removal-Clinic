import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useDataSliderLogic from "../logic/useDataSliderLogic";

const DataSlider = ({ btnDisplay }) => {
  const {
    dateRanges,
    formattedStart,
    formattedEnd,
    dateHandler,
    currentRange,
    currentDate,
  } = useDataSliderLogic();
  return (
    <Flex
      sx={{
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        fontSize: "18px",
        color: "blue",
      }}
    >
      <Button
        onClick={() => dateHandler("prev")}
        isDisabled={currentRange === 0 || btnDisplay}
      >
        <IoIosArrowForward />
      </Button>

      <Flex py={6} sx={{ minWidth: "200px", justifyContent: "center" }}>
        <Text
          sx={{
            fontSize: { base: "14px", md: "18px" },
            fontWeight: "bold",
            color: "brand.400",
          }}
        >
          {currentDate
            ? `${formattedStart} - ${formattedEnd}`
            : "No data available"}
        </Text>
      </Flex>

      <Button
        onClick={() => dateHandler("next")}
        isDisabled={currentRange === dateRanges.length - 1 || btnDisplay}
      >
        <IoIosArrowBack />
      </Button>
    </Flex>
  );
};

export default DataSlider;
