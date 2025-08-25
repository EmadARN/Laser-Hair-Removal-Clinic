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
      window.removeEventListener("scroll", handleScroll);
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
    <Box ref={ref} p={{ base: 4, md: 8 }} textAlign="center">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 10 }}>
        <Box>
          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            fontWeight="bold"
            mb={{ base: 2, md: 4 }}
            color="gray.600"
          >
            لیزر ساید در یک نگاه
          </Text>
          <Text fontSize={{ base: "sm", md: "lg" }} color="gray.500">
            اینجا شما می‌توانید به آمارها و اطلاعات مربوط به شرکت ما دسترسی پیدا
            کنید. هدف ما ارائه بهترین خدمات در زمینه لیزر است.
          </Text>
        </Box>
        <VStack spacing={{ base: 3, md: 4 }} align="stretch">
          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={{ base: 3, md: 4 }}>
            {numberTicker.map((item, index) => (
              <Box key={index} p={{ base: 3, md: 4 }} bg="white" borderRadius="md">
                <Text
                  fontSize={{ base: "2xl", md: "3xl" }}
                  color="gray.500"
                  mb={1}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    style={{ display: "inline-block" }}
                  >
                    {counts[index]}
                  </motion.span>
                </Text>
                <Text fontSize={{ base: "md", md: "xl" }} color="gray.600">
                  {item.title}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default CounterMain;
