import { Button } from "@chakra-ui/react";
import React from "react";

const Btn = () => {
  return (
    <Button
      bgColor="RGBA(0, 0, 0, 0.04)"
      color="RGBA(0, 0, 0, 0.64)"
      _hover={{
        bgColor: "RGBA(0, 0, 0, 0.09)",
        color: "RGBA(0, 0, 0, 0.75)",
      }}
      mt={8}
      width="12%"
    >
      ثپت
    </Button>
  );
};

export default Btn;
