import React, { useEffect, useRef, useState } from "react";
import { Box, Text, SimpleGrid, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { numberTicker } from "@/constants";

const CounterMain = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const [counts, setCounts] = useState(Array(numberTicker.length).fill(0));

  const handleScroll = () => {
    const { top } = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (top < windowHeight && top > 0) {
      setIsVisible(true);
      window.removeEventListener("scroll", handleScroll); // پس از یکبار نمایش، لیسنر را حذف می‌کنیم
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      numberTicker.forEach((item, index) => {
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / item.count));

        let start = 0;
        const interval = setInterval(() => {
          if (start <= item.count) {
            setCounts((prevCounts) => {
              const newCounts = [...prevCounts];
              newCounts[index] = start;
              return newCounts;
            });
            start++;
          } else {
            clearInterval(interval);
          }
        }, stepTime);
      });
    }
  }, [isVisible]);

  return (
    <Box ref={ref} p={8} textAlign="center">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            لیزر ساید در یک نگاه
          </Text>
          <Text fontSize="lg">
            اینجا شما می‌توانید به آمارها و اطلاعات مربوط به شرکت ما دسترسی پیدا
            کنید. هدف ما ارائه بهترین خدمات در زمینه لیزر است.
          </Text>
        </Box>
        <VStack spacing={4} align="stretch">
          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
            {numberTicker.map((item, index) => (
              <Box key={index} p={4} bg="white" borderRadius="md">
                <Text fontSize="3xl">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    style={{ display: "inline-block" }}
                  >
                    {counts[index]}
                  </motion.span>
                </Text>
                <Text fontSize="xl">{item.title}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default CounterMain;
