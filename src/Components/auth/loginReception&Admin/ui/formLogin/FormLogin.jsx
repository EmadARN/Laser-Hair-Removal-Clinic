import CustomButton from "@/Common/customeButton/CustomeButton";
import Loading from "@/Common/loading";
import { Box, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ForgotPasswordModal from "./ForgotPasswordModal";

const style = {
  width: "100%",
  h: { base: "auto", md: "40px" },
  "::placeholder": {
    color: "#ccc",
    fontSize: { base: "10px", md: "16px" },
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
  dispatch,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = () => setIsOpen(true);
  return (
    <form onSubmit={submitHandler} style={{ position: "relative" }}>
      <Box
        sx={{
          py: { base: 0, md: 2 },
          color: "#fff",
        }}
      >
        <Text
          sx={{ fontWeight: "bold", fontSize: { base: "10px", md: "24px" } }}
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
        <CustomButton
          type="submit"
          bg="#fff"
          color="#555"
          w={{ base: "40%", md: "30%" }}
          h={{ base: "25px", md: "40px" }}
          textAlign="center"
        >
          {loading ? <Loading noneHeight="0vh" h="8px" w="8px" /> : "تایید"}
        </CustomButton>
      </Flex>
      <Text
        onClick={onOpen}
        sx={{
          mt: { base: 3, md: 0 },
          color: "#fff",
          cursor: "pointer",
          position: "absolute",

          fontSize: { base: "8px", md: "16px" },
        }}
      >
        فراموشی رمز عبور ؟
      </Text>
      <ForgotPasswordModal
        isOpen={isOpen}
        onClose={onClose}
        dispatch={dispatch}
      />
    </form>
  );
};

export default FormLogin;
