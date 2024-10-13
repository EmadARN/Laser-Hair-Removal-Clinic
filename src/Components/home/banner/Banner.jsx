import React, { useEffect, useRef, useState } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { dataBanners } from "@/constants";

// تعریف انیمیشن
const MotionFlex = motion(Flex);

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false); // وضعیت نمایش
  const ref = useRef(); // مرجع به عنصر

  // تابع برای مشاهده تغییرات در visibility
  const handleObserver = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting); // تنظیم وضعیت بر اساس اینکه عنصر داخل یا خارج viewport است
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.1, // درصدی از عنصر که باید در viewport باشد
    });

    if (ref.current) {
      observer.observe(ref.current); // مشاهده عنصر
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // از مشاهده عنصر خارج می‌شویم
      }
    };
  }, []);

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-around"
      px={{ base: 10, md: 28 }}
      mx={2}
      align="flex-start"
      p={4}
      wrap="wrap"
      ref={ref} // مرجع به عنصر
    >
      {dataBanners.map((item, index) => (
        <MotionFlex
          flexDirection={"column"}
          alignItems={"center"}
          key={index}
          bg="white"
          borderRadius="md"
          boxShadow="md"
          p={4}
          width={index === 1 ? { base: "100%", md: "40%" } : { base: "100%", md: "25%" }} // عریض‌تر کردن باکس وسط
          height="120px"
          mb={{ base: 4, md: 0 }}
          initial={{ opacity: 0, scale: 0.5 }} // انیمیشن شروع
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          } // انیمیشن پایان
          exit={{ opacity: 0, scale: 0.5 }} // انیمیشن خروج
          transition={{ duration: 0.5 }} // زمان انیمیشن
        >
          <Heading size="md" mb={2}>
            {item.header}
          </Heading>
          <Text>{item.text}</Text>
        </MotionFlex>
      ))}
    </Flex>
  );
};

export default Banner;
