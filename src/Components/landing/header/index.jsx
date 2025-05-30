
import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { toPersianDigits } from "@/utils/toPersianDigits";
import { TextGenerateEffect } from "./ui/TextEffect";
import HeaderBtn from "./ui/HeaderBtn";

const MotionHeading = motion(Heading);
const MotionButton = motion(Box);
const MotionVideo = motion(Box);

const Header = () => {
  const text = toPersianDigits(`
    لیزر ساید یکی از مراکز لیزر معتبر می باشد که از دستگاه های به روز
    لیزر مو های زائد استفاده می کند ، مرکز لیانا لیزر از دستگاه های
    الکساندریت نابلکس که جزو دستگاه های به روز لیزر مو در جهان به شما می
    رود استفاده می کند . لیزر الکساندرایت نابلکس جزو بهترین دستگاه های
    لیزر می باشد که استانداردهای کیفی معتبر جهانی همچون FDA آمریکا و CE
    اروپا و استاندارد بین المللی کیفیت تجهیزات پزشکی ISO 13485 را کسب کرده
    است .
  `);

  return (
    <Flex
      w="100%"
      direction={{ base: "column-reverse", lg: "row" }} // در موبایل عمودی، در دسکتاپ افقی
      alignItems="center" // تراز عمودی
      justifyContent="space-between" // فاصله بین باکس‌ها
    >
      <Box
        w={{ base: "100%", lg: "40%" }} // عرض کمتر برای متن در دسکتاپ
        h="100%"
        p={6}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start" // تراز متن به سمت چپ
        position="relative"
      >
        <MotionHeading
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          color="gray.600"
          fontSize={{ base: "14px", md: "18px", lg: "28px" }}
        >
          لیزر موهای زائد
        </MotionHeading>

        <TextGenerateEffect words={text} />

        <MotionButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          mt={{ sm: "0px", lg: "100px" }} // فاصله کمتر از 120px
        >
          <HeaderBtn />
        </MotionButton>
      </Box>

      <Box
        w={{ base: "100%", lg: "65%" }} // عرض بیشتر برای ویدئو
        h="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={0}
        overflow="hidden"
      >
        <MotionVideo
          as="video"
          src="/video/1778694294.webm"
          autoPlay
          loop
          muted
          controls={false}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            transform: "scale(3)",
            width: "100%", // عرض کامل باکس
            height: "auto", // ارتفاع خودکار
            objectFit: "cover", // پر کردن باکس بدون تغییر نسبت
          }}
        />
      </Box>
    </Flex>
  );
};

export default Header;
