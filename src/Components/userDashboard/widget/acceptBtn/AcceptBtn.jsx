import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { MainBox, ButtonStyle } from "./style";
import { useRouter } from "next/router";
export const AcceptBtn = ({ text, bgColor, slug, submitHandler, letPush }) => {
  const router = useRouter();
  const handleNextStep = (step) => {
    if (letPush.length === 0) {
      alert("لطفا نواحی را انتخاب کنید.");
      return;
    }
    submitHandler();
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
