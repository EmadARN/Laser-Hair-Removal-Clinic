import Loading from "@/Common/loading";
import { Box, Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";

const style = {
  width: "100%",
  h: { base: "auto", md: "40px" },
  "::placeholder": {
    color: "#ccc",
    fontSize: { base: "12px", md: "16px" },
  },
  _focus: {
    borderColor: "brand.400",
    boxShadow: "0 0 0 2px #ab9dfa",
    color: "#fff",
  },
};
const FormLogin = ({
  label,
  submitHandler,
  inputHandler,
  formInput,
  loading,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <Box
        sx={{
          mr: { base: 0, md: 20 },
          pt: { base: 0, md: 6 },
          color: "#fff",
        }}
      >
        <Text
          sx={{ fontWeight: "bold", fontSize: { base: "12px", md: "24px" } }}
        >
          {label}
        </Text>
      </Box>
      <Box mt={{ base: 4, md: 0 }}>
        <FormLabel
          sx={{ color: "#fff", fontSize: { base: "10px", md: "16px" } }}
        >
          نام کاربری
        </FormLabel>
        <Input
          sx={style}
          type="text"
          placeholder="نام کاربری"
          onChange={inputHandler}
          name="username"
          value={formInput.username}
        />
      </Box>
      <Box mt={{ base: 3, md: 0 }}>
        <FormLabel
          sx={{ color: "#fff", fontSize: { base: "10px", md: "16px" } }}
        >
          رمز ورود
        </FormLabel>
        <Input
          sx={style}
          type="password"
          placeholder="رمز ورود"
          onChange={inputHandler}
          name="password"
          value={formInput.password}
        />
      </Box>
      <Flex justifyContent={"center"} alignItems={"center"} mt={4}>
        <Button
          sx={{ w: "30%", h: { base: "30px", md: "40px" } }}
          type="submit"
        >
          {loading ? <Loading w="6px" h="6px" /> : "تایید"}
        </Button>
      </Flex>
    </form>
  );
};

export default FormLogin;
