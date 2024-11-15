import React, { useState, useEffect } from "react";
import { Box, Text, IconButton, Heading } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { DataFaQs } from "@/constants";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === DataFaQs.length - 1 ? 0 : prev + 1));
  };

  // Go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? DataFaQs.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      flex="1"
      p={{ base: 3, md: 5 }}
      position="relative"
      h="100%"
    >
      <Heading
        color={"gray.600"}
        as="h2"
        fontSize={{ base: "16px", md: "18px" }}
        mb={4}
      >
        {DataFaQs[currentSlide].title}
      </Heading>

      <Text
        color={"gray.500"}
        fontSize={{ base: "14px", md: "16px" }}
        key={DataFaQs[currentSlide].id}
      >
        {DataFaQs[currentSlide].content}
      </Text>

      <Box
        mt={4}
        position="absolute"
        bottom="0"
        left="10px"
        display="flex"
        gap="12px"
      >
        <IconButton
          icon={<FaChevronRight />}
          onClick={nextSlide}
          aria-label="Next Slide"
          size={{ base: "sm", md: "md" }} // Responsive button size
          bgColor="purple.50"
          color="gray.500"
        />
        <IconButton
          icon={<FaChevronLeft />}
          onClick={prevSlide}
          aria-label="Previous Slide"
          size={{ base: "sm", md: "md" }} // Responsive button size
          bgColor="purple.50"
          color="gray.500"
        />
      </Box>
    </Box>
  );
};

export default Slider;
