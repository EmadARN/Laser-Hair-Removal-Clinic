import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { MainBox, ButtonStyle } from "./style";
import { useRouter } from "next/router";
export const AcceptBtn = ({
  text,
  bgColor,
  slug,
  submitHandler,
  onNextStep,
}) => {
  const router = useRouter();
  const handleNextStep = (step) => {
    if (submitHandler) {
      submitHandler();
      router.push(`${slug}`);
      onNextStep();
    } else {
      router.push(`${slug}`);
      onNextStep();
    }
  };
  return (
    <Box sx={MainBox} bgColor={bgColor}>
      <Button sx={ButtonStyle} onClick={() => handleNextStep()}>
        {text}
      </Button>
    </Box>
  );
};
