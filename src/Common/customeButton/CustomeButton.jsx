import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { forwardRef } from "react";

const CustomButton = forwardRef(
  (
    {
      children,
      onClick,
      isDisabled,
      display,
      justifyContent,
      w,
      slug,
      ...props
    },
    ref
  ) => {
    const router = useRouter();

    const handleNextStep = () => {
      if (onClick) {
        onClick();
      }
      if (onClick && slug) {
        router.push(`${slug}`);
      }
    };
    return (
      <Button
        ref={ref}
        bg="brand.400"
        color="#fff"
        _hover={{ bg: "purple.100", color: "#fff" }}
        borderRadius="md"
        isDisabled={isDisabled}
        _disabled={{
          bg: "purple.100",
          cursor: "not-allowed",
          color: "gray.500",
        }}
        sx={{
          display,
          justifyContent,
          w,
        }}
        {...props}
        onClick={handleNextStep}
      >
        {children}
      </Button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
