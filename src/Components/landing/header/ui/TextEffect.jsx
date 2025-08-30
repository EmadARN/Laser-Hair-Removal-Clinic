import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { Box, Text } from "@chakra-ui/react";

export const TextGenerateEffect = ({
  words,
  filter = true,
  duration = 0.1,
}) => {
  const [scope, animate] = useAnimate();
  const [isMounted, setIsMounted] = useState(false); // برای کنترل رندر اولیه
  let wordsArray = words.split(" ");

  useEffect(() => {
    setIsMounted(true); // کامپوننت در سمت کلاینت بارگذاری شد
  }, []);

  useEffect(() => {
    if (isMounted) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration,
          delay: stagger(0.1),
        }
      );
    }
  }, [scope.current, isMounted]);

  const renderWords = () => {
    return (
      <motion.span ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              style={{
                filter: filter ? "blur(10px)" : "none",
                opacity: 0, // رندر اولیه با opacity صفر
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.span>
    );
  };

  return (
    <Box fontWeight="bold">
      <Box mt={4}>
        <Text
          color="gray.500"
          fontSize={{ base: "12px", md: "15px" }}
          lineHeight="snug"
          letterSpacing="wide"
        >
          {isMounted && renderWords()}{" "}
          {/* فقط در صورت بارگذاری در کلاینت رندر شود */}
        </Text>
      </Box>
    </Box>
  );
};
