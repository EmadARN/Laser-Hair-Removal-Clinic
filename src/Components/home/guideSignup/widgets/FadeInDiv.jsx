import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const FadeInDiv = ({ tabs, active }) => (
  <Box position="relative" width="full" height="full" mt={{ base: 0, lg: 10 }}>
    {tabs.map((tab) => (
      <motion.div
        key={tab.id}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={
          active?.id === tab.id
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0.4, scale: 0.6, y: 20 }
        }
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 10,
          zIndex: active?.id === tab.id ? 1 : 0,
        }}
      >
        <Box
          p={4}
          bg="#F7F7F7"
          borderRadius="md"
          color="gray.600"
          shadow="md"
          minH={{ base: "220px", lg: "130px" }}
          minW={{ base: "170px", lg: "200px" }}
          h="100%"
          w="100%"
          overflow="auto"
          transform={active?.id === tab.id ? "scale(1)" : "scale(0.9)"}
        >
          <Text fontWeight="bold">{tab.title}</Text>
          <Text mt={4}>{tab.desc}</Text>
        </Box>
      </motion.div>
    ))}
  </Box>
);

export default FadeInDiv;
