import { Button } from "@chakra-ui/react";
import React, { forwardRef } from "react";

const CustomButton = forwardRef(
  (
    { children, onClick, isDisabled, display, justifyContent, w, ...props },
    ref
  ) => {
    return (
      <Button
        ref={ref} // پاس دادن ref به دکمه
        bg="brand.400"
        color="#fff"
        _hover={{ bg: "purple.100", color: "#fff" }} // اصلاح تایپ
        borderRadius="md"
        isDisabled={isDisabled} // استفاده مستقیم از isDisabled
        _disabled={{
          bg: "purple.100",
          cursor: "not-allowed",
          color: "gray.500",
        }}
        sx={{
          display, // استفاده از مقادیر استخراج‌شده
          justifyContent,
          w,
        }}
        {...props} // پاس دادن سایر props
        onClick={onClick} // استفاده از onClick به صورت مستقیم
      >
        {children}
      </Button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
