import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { MainBox, ButtonStyle } from "./style";
import { useRouter } from "next/router";
export const AcceptBtn = ({ text, bgColor, slug }) => {
  const router = useRouter();
  const handleNextStep = (step) => {
    router.push(`${slug}`);
  };
  return (
    <Box sx={MainBox} bgColor={bgColor}>
      <Button sx={ButtonStyle} onClick={() => handleNextStep()}>
        {text}
      </Button>
    </Box>
  );
};
