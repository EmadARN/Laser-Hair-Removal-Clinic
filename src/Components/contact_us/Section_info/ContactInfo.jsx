import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ContactInfo = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={4}>
      <Box gap={3} display={"flex"} flexDirection={"column"}>
        <Text fontWeight={"bold"} fontSize={{ base: "16px", md: "22px" }}>
          شماره تماس
        </Text>

        <Text fontSize={{ base: "12px", md: "17px" }} color={"#777"}>
          09129129129
        </Text>
      </Box>

      <Box gap={3} display={"flex"} flexDirection={"column"}>
        <Text fontWeight={"bold"} fontSize={{ base: "16px", md: "22px" }}>
          آدرس کلینیک
        </Text>

        <Text fontSize={{ base: "12px", md: "17px" }} color={"#777"}>
          مهاباد.خیابان فیاضی..کوچه ی بهبهانی.پلاک ۴۲
        </Text>
      </Box>

      <Box gap={3} display={"flex"} flexDirection={"column"}>
        <Text fontWeight={"bold"} fontSize={{ base: "16px", md: "22px" }}>
          ساعت کاری
        </Text>

        <Text fontSize={{ base: "12px", md: "17px" }} color={"#777"}>
          همه روزه از ساعت 7:30 صبح تا 2 بعد از ظهر و 3 بعد از ظهر تا 11 شب
        </Text>
      </Box>
    </Box>
  );
};

export default ContactInfo;
