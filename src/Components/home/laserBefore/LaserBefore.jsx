import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { boxes } from "@/constants";

const MotionBox = motion(Box);

const BoxComponent = ({ icon, title, text, index }) => {
  return (
    <MotionBox
      as="article"
      initial={{ opacity: 0, x: index % 3 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      p={5}
      m={3}
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
      bg="gray.100"
      textAlign="center"
      maxWidth="400px" // از maxWidth استفاده کنید
      width="100%" // اصلاح عرض به width
      backgroundColor="#fff"
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text fontSize="2xl">{icon}</Text>
        <Heading
          size={{ base: "sm", md: "md" }}
          mt={3}
          py={4}
          color={"gray.600"}
        >
          {title}
        </Heading>
        <Text fontSize={{ base: "14px", md: "16px" }} color={"gray.500"} mt={2}>
          {text}
        </Text>
      </Flex>
    </MotionBox>
  );
};

export const LaserBefore = () => {
  return (
    <>
      <Flex
        px={{ base: 10, md: 28 }}
        mx={2}
        flexDirection={"column"}
        alignItems={"center"}
        color={"gray.600"}
      >
        <Heading
          sx={{ display: "flex", justifyContent: "center" }}
          as="h2"
          size={{ base: "md", md: "lg" }}
        >
          نکات مهم قبل از انجام لیزر موهای زائد
        </Heading>
        <Text pt={4}>
          شما قبل از انجام لیزر موهای زائد باید نکاتی را بدانید که در ادامه به
          صورت خلاصه مواردی را ذکر کرده ایم
        </Text>
      </Flex>
      <Flex
        px={{ base: 10, md: 28 }}
        mx={2}
        direction="column"
        align="center"
        overflow="hidden"
      >
        {/* اضافه کردن overflow: hidden */}
        <Flex wrap={{ base: "wrap", md: "nowrap" }} justify="center" my={5}>
          {boxes.slice(0, 3).map((box, index) => (
            <BoxComponent key={index} {...box} index={index} />
          ))}
        </Flex>
        <Flex wrap={{ base: "wrap", md: "nowrap" }} justify="center" my={5}>
          {boxes.slice(3).map((box, index) => (
            <BoxComponent key={index + 3} {...box} index={index + 3} />
          ))}
        </Flex>
      </Flex>
    </>
  );
};
