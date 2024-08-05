import React, { useState } from "react";
import { Box, Grid, Text, Button } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa6";
import { Select } from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import {
  firstGrid,
  firstBox,
  secBox,
  thirdBox,
  fourthBox,
  fifthBox,
  sisxthBox,
} from "./style";

const LaserAreas = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const removeHandle = (b) => {
    const b_str = b.toString();

    const FilterItem = selectedOptions.filter((item) => {
      if (item.id != b_str) {
        return item;
      }
    });

    setSelectedOptions(FilterItem);
  };
  const options = [
    { id: 1, value: "فول بادی" },
    { id: 2, value: "بیکینی " },
    { id: 3, value: "ناف " },
  ];

  return (
    <Grid sx={firstGrid}>
      <Box sx={firstBox}>
        <Box sx={secBox}>
          <FaArrowRight />
          <Text fontWeight={"bold"}> انتخاب نواحی</Text>
        </Box>

        <Select
          value={selectedOptions}
          onChange={(e) => {
            const value = e.target.value;
            const selectedId = Array.from(
              e.target.selectedOptions,
              (option) => option.id
            );

            const data = {
              id: selectedId[0],
              value: value,
            };

            setSelectedOptions([data, ...selectedOptions]);
          }}
          p={3}
        >
          {options.map((item) => (
            <option id={item.id} value={item.value}>
              {item.value}
            </option>
          ))}
        </Select>

        <Box sx={thirdBox}>
          <Text color={"#555"}>نواحی انتخاب شده</Text>

          <Box mt={3} display={"flex"} justifyContent={"flex-start"}>
            {selectedOptions.map((option) => (
              <Box sx={fourthBox} key={option.id}>
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <MdCancel
                    cursor={"pointer"}
                    onClick={() => removeHandle(option.id)}
                  />
                  {option.value}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={fifthBox}>
          <Box sx={sisxthBox}>
            <Button bgColor={"#3854c4"} color={"#fff"} width={"30%"}>
              تایید نواحی{" "}
            </Button>
            <Button width={"30%"}> لغو تغییرات </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default LaserAreas;
