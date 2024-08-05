import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import backgroundImage from "../../../public//images/Curve Line (1).svg";
import {
  firstBox,
  seccondBox,
  TextStyle,
  flexStyle,
  Button2Style,
} from "./LoginStyle";
const LoginPage = ({ setLoginStepper, loginStepper }) => {
  const handle = () => {
    setLoginStepper(loginStepper + 1);
  };
  return (
    <Flex justifyContent="space-between">
      <Box sx={firstBox}>
        <img
          style={{ width: "100%", height: "100vh" }}
          src="/images/Curve Line.svg"
          alt=""
        />
      </Box>
      <Box sx={seccondBox(backgroundImage)}>
        <Box>
          <Box w={"100%"}>
            <Text sx={TextStyle} as="h1">
              به سامانه مدیریت کلینیک لیزر <Text>اسیندا خوش آمدید</Text>
            </Text>
          </Box>
          <Flex sx={flexStyle}>
            <Button sx={Button2Style} onClick={handle}>
              ورود به عنوان مدیر
            </Button>
            <Button sx={Button2Style} onClick={handle}>
              ورود به عنوان منشی
            </Button>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginPage;
