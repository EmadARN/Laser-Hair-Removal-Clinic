import React, { useState } from "react";
import { Box, Grid, Text, Button } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa6";
import { Select } from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";

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
    <Grid
      width={"100%"}
      height="100vh"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        width={"70%"}
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        p={3}
        h={"90%"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box
          borderBottom={"2px solid #ddd"}
          mb={4}
          width={"100%"}
          display={"flex"}
          justifyContent={"flex-start"}
          p={3}
        >
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

        <Box width={"100%"} mt={"2"} display={"flex"} flexDirection={"column"}>
          <Text color={"#555"}>نواحی انتخاب شده</Text>

          <Box mt={3} display={"flex"} justifyContent={"flex-start"}>
            {selectedOptions.map((option) => (
              <Box
                ml={2}
                py={2}
                px={1}
                width={"auto"}
                border={"1px solid #ddd"}
                key={option.id}
              >
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
        <Box
          height={"100%"}
          flexDirection={"column"}
          width={"100%"}
          mt={20}
          display={"flex"}
          justifyContent={"flex-end"}
        >
          <Box
            display={"flex"}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
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
