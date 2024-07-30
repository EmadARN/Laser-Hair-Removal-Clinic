import { Button } from "@chakra-ui/react";
import React from "react";

const BtnReservation = ({ onClose, text, px, py ,width,rounded}) => {
  return (
    <Button
    

     
      onClick={onClose}
      
    >
      {text}
    </Button>
  );
};

export default BtnReservation;
