import { Box, Text } from "@chakra-ui/react";
import React from "react";

const AboutText = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={5}>
      <Text mb={3} color={"#7563DC"} fontSize={"small"} fontWeight={"600"}>
        با لیانا از شر موهای زائد خلاص شو
      </Text>

      <Text
        mb={3}
        fontSize={{ base: "20px", md: "30px" }}
        color={"#222"}
        fontWeight={"bold"}
      >
        درباره ی ما
      </Text>

      <Text fontSize={{ base: "13px", md: "18px" }} color={"#777"}>
        ما در مرکز لیانا لیزر که مرکز تخصصی لیزر موهای زائد می باشد از بهترین
        دستگاه لیزر مو و اپراتور های مجرب بهره می بریم و با تجربه بیش از نیم دهه
        در اصفهان مشغول به فعالیت هستیم . در لیانا لیزر سه اپراتور مجرب و یک
        دکتر متخصص پوست مشغول ارائه خدمات به مشتریان گرامی هستند
      </Text>
    </Box>
  );
};

export default AboutText;
