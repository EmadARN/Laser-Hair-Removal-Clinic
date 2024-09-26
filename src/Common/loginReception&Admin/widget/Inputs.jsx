import { Box, FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";

const style = {
  "::placeholder": {
    color: "#ccc",
  },
  _focus: {
    borderColor: "brand.400",
    boxShadow: "0 0 0 2px #ab9dfa",
  },
};
const Inputs = ({ label }) => {
  return (
    <>
      <Box
        sx={{
          mr: { base: 0, md: 20 },
          pt: { base: 0, md: 6 },
          color: "#fff",
        }}
      >
        <Text sx={{ fontWeight: "bold", fontSize: "24px" }}>{label}</Text>
      </Box>
      <Box>
        <FormLabel sx={{ color: "#fff" }}>نام کاربری</FormLabel>
        <Input sx={style} type="text" placeholder="نام کاربری" />
      </Box>
      <Box>
        <FormLabel sx={{ color: "#fff" }}>رمز ورود</FormLabel>
        <Input sx={style} type="password" placeholder="رمز ورود" />
      </Box>
    </>
  );
};

export default Inputs;
