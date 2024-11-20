import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { toPersianDigits } from "@/utils/toPersianDigits";
import { TextGenerateEffect } from "./TextEffect";
import HeaderBtn from "./HeaderBtn";

const MotionHeading = motion(Heading);
const MotionButton = motion(Box);
const MotionVideo = motion(Box);

const Header = () => {
  const text = toPersianDigits(`
    ساید لیزر یکی از مراکز لیزر معتبر می باشد که از دستگاه های به روز
    لیزر مو های زائد استفاده می کند ، مرکز لیانا لیزر از دستگاه های
    الکساندریت نابلکس که جزو دستگاه های به روز لیزر مو در جهان به شما می
    رود استفاده می کند . لیزر الکساندرایت نابلکس جزو بهترین دستگاه های
    لیزر می باشد که استانداردهای کیفی معتبر جهانی همچون FDA آمریکا و CE
    اروپا و استاندارد بین المللی کیفیت تجهیزات پزشکی ISO 13485 را کسب کرده
    است .
  `);

  return (
    <Flex
      h={{ base: "100%", md: "60vh", lg: "100vh" }}
      w="100%"
      direction={{ base: "column-reverse", lg: "row" }} // در نمایشگرهای کوچک (base) عمودی و در بزرگ (lg) افقی
    >
      <Box
        w={{ base: "100%", lg: "35%" }} // عرض ۱۰۰٪ در نمایشگر کوچک و ۳۵٪ در بزرگ
        h="100%"
        p={4}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        position={"relative"}
      >
        <MotionHeading
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          color="gray.600"
          fontSize={{ base: "18px", md: "28px" }}
        >
          لیزر موهای زائد
        </MotionHeading>
        <TextGenerateEffect words={text} />
        <MotionButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <HeaderBtn />
        </MotionButton>
      </Box>
      <Box
        w={{ base: "100%", lg: "65%" }} // عرض ۱۰۰٪ در نمایشگر کوچک و ۶۵٪ در بزرگ
        h="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={0}
        overflow="hidden"
      >
        <MotionVideo
          as="video"
          src="/video/1778694294.mp4"
          autoPlay
          loop
          muted
          initial={{ x: "-100%", opacity: 0 }} // شروع از سمت چپ با اوپسیتی 0
          animate={{ x: 0, opacity: 1 }} // حرکت به سمت راست با اوپسیتی 1
          transition={{ duration: 1 }} // زمان انیمیشن
          style={{
            transform: "scale(3)",
            width: "100%",
          }}
        />
      </Box>
    </Flex>
  );
};

export default Header;
