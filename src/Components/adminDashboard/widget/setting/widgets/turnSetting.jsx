import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
const TurnSetting = () => {
  return (
    <Box
   
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      gap={3}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box width={{sm:"100%",lg:"80%"}}>
        <Text fontWeight={"bold"} textAlign={"right"} color={"#111"}>
          تنظیمات نوبت دهی
        </Text>
      </Box>
      <Box
    
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        bgColor={"#ededed"}
        width={{sm:"100%",lg:"80%"}}
        height={"auto"}
        p={6}
        display={"flex"}
        justifyContent={"space-between"}
        borderRadius={"8px"}
      >
        <Box  display={"flex"} alignItems={"center"} gap={2}>
          <Text sx={{fontSize:{base:"13px",md:"17px"}}} whiteSpace={'nowrap'} color={"#555"}> شروع نوبت دهی </Text>
          <Select px={4} textAlign={'center'} placeholder="انتخاب زمان">
            <option value="option1">8.30</option>
            <option value="option2">9.30</option>
            <option value="option3">10</option>
          </Select>
        </Box>


        <Box  display={"flex"} alignItems={"center"} gap={2} >
          <Text sx={{fontSize:{base:"13px",md:"17px"}}} whiteSpace={'nowrap'} color={"#555"}> پایان نوبت دهی </Text>
          <Select px={4} textAlign={'center'}  placeholder="انتخاب زمان">
            <option value="option1">8.30</option>
            <option value="option2">9.30</option>
            <option value="option3">10</option>
          </Select>
        </Box>


        <Box ><Button sx={{fontSize:{base:"13px",md:"20px"}}} colorScheme={'blue'} py={4}>ثبت تغییرات</Button></Box>
      </Box>
    </Box>
  );
};

export default TurnSetting;
