import { baseTheme, Button } from "@chakra-ui/react";
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
      h,
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
        bg={props.bg || "brand.400"}
        color="#fff"
        mt={props.mt}
        boxShadow={props.boxShadow}
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
          h: h || "40px",
          fontSize: { base: "12px", md: "16px" },
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
