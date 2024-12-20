import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { MainBox, ButtonStyle } from "./style";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
export const AcceptBtn = ({
  text,
  bgColor,
  slug,
  submitHandler,
  onNextStep,
  isDisabled,
}) => {
  const router = useRouter();

  const { loading } = useSelector((store) => store.customerDashboard);

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
      <Button
        isDisabled={isDisabled}
        sx={ButtonStyle}
        onClick={() => handleNextStep()}
      >
        {loading ? "..." :  text }
      </Button>
    </Box>
  );
};
