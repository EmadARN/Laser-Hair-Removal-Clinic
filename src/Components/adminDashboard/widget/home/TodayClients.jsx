import React from "react";
import Lists from "../../common/Lists";
import { Box } from "@chakra-ui/react";

const TodayClients = () => {
  return (
    <>
      <Lists
        firstArea="نام و نام خانوادگی"
        secondArea="جمع کل خدمات (تومان)"
        thirdArea="زمان نوبت"
        imgDisplay="none"
        editDeleteDisplay="none"
        bgColor="blue.500"
        color="#fff"
        rounded="0px"
        fontSize={{ base: "12px", md: "14px" }}
      />
      <Box pt={4}>
        <Lists
          firstArea="علی مظفری"
          secondArea="120,000 تومان"
          thirdArea="12:20"
          imgDisplay="none"
          editDeleteDisplay="none"
          rounded="0px"
          fontSize={{ base: "12px", md: "14px" }}
        />
      </Box>
    </>
  );
};

export default TodayClients;
