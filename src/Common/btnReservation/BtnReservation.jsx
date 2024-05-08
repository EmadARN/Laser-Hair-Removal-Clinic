import { Button } from "@chakra-ui/react";
import React from "react";

const BtnReservation = ({ onClose }) => {
  return (
    <Button
      p="28px"
      rounded="50px"
      variant="solid"
      bgColor="purple.500"
      color="purple.50"
      _hover={{
        bgColor: "purple.100",
        color: "purple.500",
      }}
      transition=".5s"
      mr={3}
      onClick={onClose}
    >
      دریافت نوبت
    </Button>
  );
};

export default BtnReservation;
