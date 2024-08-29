import { Button, forwardRef } from "@chakra-ui/react";
import React from "react";

const ButtonAccept = forwardRef((props, ref) => {
  const { value, onSubmit, loading } = props;
  return (
    <Button
      disabled={!value}
      onClick={onSubmit}
      ref={ref}
      sx={{
        bgColor: value ? "brand.400" : "purple.100",
        width: "100%",
        color: "white",
      }}
      _hover={{
        bgColor: "purple.100",
        color: "purple.500",
      }}
      id="mybtn"
    >
      {loading ? "..." : "ادامه"}
    </Button>
  );
});

export default ButtonAccept;
