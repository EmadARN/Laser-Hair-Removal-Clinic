import { Button } from "@chakra-ui/react";
import React from "react";
import { ButtonStyle } from "./Style";

const BtnReservation = ({ onClose, text, px, py, width, rounded }) => {
  return (
    <Button sx={ButtonStyle(px, py, width, rounded)} onClick={onClose}>
      {text}
    </Button>
  );
};

export default BtnReservation;
