import React from "react";
import { Box, Text } from "@chakra-ui/react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Captcha = ({ onVerify }) => {
  return (
    <Box textAlign="center" zIndex={1}>
      <HCaptcha
        sitekey="56c2ced4-7af6-477a-b582-7b8410a4e03e"
        onVerify={onVerify}
        hl="fa"
      />
      <Text mt={2} color="#fff">
        لطفا تأیید کنید که ربات نیستید.
      </Text>
    </Box>
  );
};

export default Captcha;
