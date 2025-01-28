import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { datasWhyLaser } from "@/constants";
import { toPersianDigits } from "@/utils/toPersianDigits";
import Compare from "./ui/Compare";

const MotionBox = motion(Box);

const WhyLaser = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = React.useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // زمانی که اسکرول اتفاق افتاد و مقدار isVisible تغییر کرد، انیمیشن را شروع می‌کنیم
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
    // پاک کردن رویداد اسکرول هنگام unmount شدن کامپوننت
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, controls]);
  return (
    <>
      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        px={{ base: 10, md: 28 }}
        mx={2}
        py={8}
        rounded={"25px"}
        backgroundColor="#ffff"
        color={"gray.600"}
        minHeight="600px"
        textAlign="center" // متن را وسط چپ کنیم
      >
        <Heading
          sx={{ display: "flex", justifyContent: "center" }}
          as="h2"
          size={{ base: "md", md: "lg" }}
          py={4}
        >
          چرا باید لیزر ساید را انتخاب کنم؟
        </Heading>
        <Text
          fontSize={{ base: "14px", md: "18px" }}
          mb={4}
          fontWeight={"bold"}
        >
          {toPersianDigits(5)} سال است که در کنار شما هستیم
        </Text>
        <Text fontSize="md" mb={6}>
          مرکز لیزر ساید با داشتن بهترین دستگاه لیزر و تیم اپراتور آماده ارائه
          خدمات لیزر مو با بهترین کیفیت و نازلترین قیمت می باشد و شعار ما جذب
          حداکثری مشتری و دریافت سود حداقلی از مشتری است و قیمت های پایین این
          مرکز دلیل بر کاهش کیفیت کارمان نیست.
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-around"
          align="flex-start"
          p={4}
          wrap="wrap"
        >
          {datasWhyLaser(Compare).map((item, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="md"
              width={{ base: "100%", md: "30%" }}
            >
              <Heading size="md" mb={2}>
                {toPersianDigits(item.header)}
              </Heading>
              <Text whiteSpace="nowrap">{toPersianDigits(item.text)}</Text>
              <Box h={"100%"}>{item.images}</Box>
            </Box>
          ))}
        </Flex>
      </MotionBox>
    </>
  );
};

export default WhyLaser;
