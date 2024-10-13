import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { Compare } from "./widget/Compare";
import { datasWhyLaser } from "@/constants";

const MotionBox = motion(Box);

const WhyLaser = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = React.useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // وقتی اسکرول به موقعیت 500px رسید، کامپوننت را نمایش بده
    if (scrollY > 500) {
      setIsVisible(true);
      controls.start({ opacity: 1, y: 0 });
    } else {
      setIsVisible(false);
      controls.start({ opacity: 0, y: 50 });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

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
        color="black"
        minHeight="600px"
        textAlign="center" // متن را وسط چپ کنیم
      >
        <Heading
          sx={{ display: "flex", justifyContent: "center" }}
          as="h2"
          size="lg"
          pb={2}
        >
          چرا باید ساید لیزر را انتخاب کنم؟
        </Heading>
        <Text fontSize="lg" mb={2}>
          5 سال است که در کنار شما هستیم
        </Text>
        <Text fontSize="md" mb={4}>
          مرکز ساید لیزر با داشتن بهترین دستگاه لیزر و تیم اپراتور آماده ارائه
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
                {item.header}
              </Heading>
              <Text> {item.text}</Text>
              <Box>{item.images}</Box>
            </Box>
          ))}
        </Flex>
      </MotionBox>
    </>
  );
};

export default WhyLaser;
