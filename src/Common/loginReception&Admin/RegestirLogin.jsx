import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

const RegisterLogin = () => {
  return (
    <>
      <Box
        sx={{
          mr: { base: 0, md: 20 },
          pt: { base: 0, md: 6 },
        }}
      >
        <Text sx={{ fontWeight: "bold", fontSize: "24px" }}>
          ورود به عنوان منشی
        </Text>
      </Box>
      <Flex
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
        h={"100vh"}
        mx={"auto"}
        mt={5}
        bgColor={"white"}
      >
        <Box
          sx={{ rounded: "8px", border: "1px solid #1111", width: "40%", p: 8 }}
        >
          <Box>
            <Text sx={{ fontWeight: "bold" }}>
              نام کاربری و رمز ورود خود را وارد کنید
            </Text>
          </Box>
          <FormControl pt={10}>
            <FormLabel>نام کاربری</FormLabel>
            <Input />
            <FormLabel>رمز ورود</FormLabel>
            <Input />
          </FormControl>
          <Button colorScheme="blue" sx={{ width: "100%", mt: 16 }}>
            ورود
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default RegisterLogin;
