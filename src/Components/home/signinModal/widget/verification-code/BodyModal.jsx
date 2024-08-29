import { Box, Text, Button } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

const BodyModal = () => {
  const [secconds, setSecconds] = useState(5);
  const box1 = useRef();
  const box2 = useRef();
  useEffect(() => {
    if (secconds > 0) {
      const interval = setInterval(() => {
        setSecconds(secconds - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (secconds === 0) {
      box1.current.style.display = "none";
      box2.current.style.display = "flex";
    }
  }, [secconds]);
  return (
    <>
      <Box mb={4}>
        <Text flexWrap={"nowrap"} fontSize={{ base: "xs", md: "md" }}>
          کد تایید به شماره ی ۰۹۱۹۰۹۷۸۰۴۲ارسال شد
        </Text>
      </Box>

      <Box ref={box1} id="box" mb={6}>
        <Text flexWrap={"nowrap"} fontSize={{ base: "xs", md: "md" }}>
          ارسال مجدد کد تایید در {secconds}
        </Text>
      </Box>
      <Button ref={box2} mb={6} as="button" maxW={"35%"} variant="ghost">
        <Text flexWrap={"nowrap"} fontSize={{ base: "xs", md: "sm" }}>
          ارسال مجدد کد؟
        </Text>
      </Button>
    </>
  );
};

export default BodyModal;
