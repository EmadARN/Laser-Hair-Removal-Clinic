import { Button, forwardRef } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const ButtonAccept = forwardRef((props, ref) => {
  const { value, onSubmit, loading, isDisabled,page } = props;
  const router = useRouter()
  
  

  return (
    <Button
      isDisabled={isDisabled}
      onClick={onSubmit}
      ref={ref}
      bg={value ? "brand.400" : "purple.100"}
      width="100%"
      color="white"
      _hover={{
        bgColor: "purple.100",
        color: "purple.500",
      }}
      _disabled={{
        bg: "purple.100",
        cursor: "not-allowed",
        color: "gray.500",
      }}
      id="mybtn"
    >

      { loading   ? "..." : "ادامه"}
    </Button>
  );
});

export default ButtonAccept;
