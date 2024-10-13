import React, { useEffect, useRef } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Slider from "./widget/Slider";
import { motion, useAnimation } from "framer-motion";

const MotionBox = motion(Box);

const Faqs = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    if (!ref.current) return;
    const { top } = ref.current.getBoundingClientRect();

    // اگر المان در دید کاربر باشد
    if (top < window.innerHeight && !isVisible) {
      setIsVisible(true);
      controls.start({ opacity: 1, y: 0 }); // انیمیشن از بالا
    } else if (top >= window.innerHeight && isVisible) {
      setIsVisible(false);
      controls.start({ opacity: 0, y: 50 }); // مخفی شدن
    } else if (top >= 0 && top < window.innerHeight && isVisible) {
      controls.start({ opacity: 1, y: 0 }); // انیمیشن از پایین
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, isVisible]);

  return (
    <Box py={10} px={5} height="100vh" ref={ref}>
      <Heading
        sx={{ display: "flex", justifyContent: "center" }}
        as="h2"
        size="lg"
      >
        سوالات متداول لیزر موهای زائد
      </Heading>
      <Flex
        direction={{ base: "column", md: "row-reverse" }}
        align="center"
        justify="center"
        maxW="1200px"
        mx="auto"
        p={5}
        borderRadius="lg"
        height="100%"
        position="relative"
        overflow="hidden"
      >
        {/* Image Section */}
        <MotionBox
          position={{ base: "relative", md: "absolute" }}
          left={{ base: 0, md: "100px" }}
          width={{ base: "100%", md: "50%" }}
          height={{ base: "40%", md: "60%" }}
          bgImage="url('images/blur-hospital.jpg')"
          bgSize="cover"
          bgPosition="center"
          borderRadius="md"
          boxShadow="md"
          zIndex={1}
          initial={{ opacity: 0, y: 50 }} // انیمیشن شروع
          animate={controls} // انیمیشن کنترل شده
          transition={{ duration: 0.5 }} // زمان انیمیشن
        />

        {/* Slider Section */}
        <MotionBox
          flex="1"
          zIndex={4}
          p={5}
          position="relative"
          top={{ base: 0, md: 10 }}
          bg={"white"}
          boxShadow="lg"
          maxWidth={"600px"}
          w={"100%"}
          height={{ base: "60%", md: "60%" }}
          borderRadius="md"
          mt={{ base: "-20%", md: "0" }}
          left={{ base: "0", md: "100px" }}
          initial={{ opacity: 0, y: 50 }} // انیمیشن شروع
          animate={controls} // انیمیشن کنترل شده
          transition={{ duration: 0.5 }} // زمان انیمیشن
        >
          <Slider />
        </MotionBox>
      </Flex>
    </Box>
  );
};

export default Faqs;
