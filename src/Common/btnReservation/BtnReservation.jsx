import { Button } from "@chakra-ui/react";
import React from "react";

const BtnReservation = ({ onClose, text, px, py }) => {
  return (
    <Button
      px={px}
      py={py}
      rounded="50px"
      variant="solid"
      bgColor="#7563DC"
      color="purple.50"
      _hover={{
        bgColor: "purple.100",
        color: "purple.500",
      }}
      transition=".5s"
      mr={3}
      onClick={onClose}
      fontWeight="500"
    >
      {text}
    </Button>
  );
};

export default BtnReservation;
