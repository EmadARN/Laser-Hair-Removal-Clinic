import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import backgroundImage from "../../../public//images/Curve Line (1).svg";
const LoginPage = ({ setLoginStepper, loginStepper }) => {
  const handle = () => {
    setLoginStepper(loginStepper + 1);
  };
  return (
    <Flex justifyContent="space-between">
      <Box
        sx={{
          display: { base: "none", md: "flex" },
          boxShadow: "1px 0px  20px pink",
          h: "100%",
          w: "100%",
        }}
      >
        <img
          style={{ width: "100%", height: "100vh" }}
          src="/images/Curve Line.svg"
          alt=""
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: { base: "center", md: "start" },
          flexDirection: "column",
          width: "100%",
          h: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",

          pr: { base: 0, md: 6 },
        }}
      >
        <Box>
          <Box
            sx={{
              w: "100%",
            }}
          >
            <Text
              sx={{ fontSize: { base: "18px", md: "30px" } }}
              as="h1"
              fontWeight="bold"
            >
              به سامانه مدیریت کلینیک لیزر <Text>اسیندا خوش آمدید</Text>
            </Text>
          </Box>
          <Flex
            mt={8}
            sx={{
              gap: { base: "20px", md: "80px" },
              flexDirection: { base: "column", md: "row" },
            }}
            justifyContent="space-between"
          >
            <Button
              colorScheme="gray"
              size="lg"
              sx={{
                color: "blue",
                fontSize: "14px",
                width: "100%",
                minWidth: "250px",
              }}
              onClick={handle}
            >
              ورود به عنوان مدیر
            </Button>
            <Button
              colorScheme="gray"
              size="lg"
              sx={{
                color: "blue",
                fontSize: "14px",
                width: "100%",
                minWidth: "250px",
              }}
              onClick={handle}
            >
              ورود به عنوان منشی
            </Button>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginPage;
