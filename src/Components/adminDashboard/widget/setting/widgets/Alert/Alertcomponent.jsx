import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
const Alertcomponent = () => {
  return (
    <Alert dir="rtl" status="success" variant="subtle">
      <AlertIcon />
      ساعت نوبت دهی با موفقیت تغییر کرد
    </Alert>
  );
};

export default Alertcomponent;
