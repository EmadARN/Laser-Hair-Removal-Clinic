import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const DataSlider = () => {
  const dates = [
    { id: 1, date: "2022-01-01" },
    { id: 2, date: "2022-01-02" },
    { id: 3, date: "2022-01-03" },
    { id: 4, date: "2022-01-04" },
    { id: 5, date: "2022-01-05" },
  ];
  const [current, setCurrent] = useState(0);
  function dateHandler(type) {
    var index = 0;
    var counter = 0;
    dates.map((item) => {
      if (item.id == dates[current].id) {
        type == "neg" ? (index = counter - 1) : (index = counter + 1);
      }

      counter++;
    });
    if (index == dates.length) {
      index--;
    } else if (index < 0) {
      index = 0;
    }
    setCurrent(index);
  }
  return (
    <Flex
      sx={{
        alignItems: "center",
        gap: 4,
      }}
    >
      <Button
        onClick={() => dateHandler("neg")}
        sx={{
          w: { base: "30px", md: "40px" },
          h: { base: "30px", md: "40px" },
          "& .chakra-button": {
            fontSize: "18px",
          },
        }}
      >
        <IoIosArrowForward />
      </Button>
      <Flex py={6}>
        <Text sx={{ fontSize: { base: "12px", md: "18px" } }}>امروز -</Text>
        <Text sx={{ fontSize: { base: "12px", md: "18px" } }}>
          {dates[current].date}
        </Text>
      </Flex>
      <Button
        sx={{
          w: { base: "30px", md: "40px" },
          h: { base: "30px", md: "40px" },
        }}
        onClick={() => dateHandler("pus")}
      >
        <IoIosArrowBack />
      </Button>
    </Flex>
  );
};

export default DataSlider;
