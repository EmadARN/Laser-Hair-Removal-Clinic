import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Bottom = () => {
  return (
    <Box
      sx={{
        border: "1px solid #1111",
        borderRadius: "8px",
        w: "70%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        mt: 12,
        fontSize: "14px",
        p: 1,
        position: "absolute",
        bottom: "70px",
        right: "15%",
      }}
    >
      <Flex sx={{ flexDirection: "column", alignSelf: "start" }}>
        <Text sx={{ color: "#222", fontWeight: "bold" }}>اوپراتور شیفت</Text>
        <Flex sx={{ my: "10px", alignItems: "center" }}>
          <img
            style={{ width: "20px", height: "20px" }}
            src="/images/logo.png"
            alt=""
          />
          <Text sx={{ color: "gray" }}>نام اوپراتور</Text>
        </Flex>
      </Flex>
      <Button
        sx={{
          border: "1px solid #1111",
          borderRadius: "8px",
          mt: 3,
          w: "90%",
          fontSize: "12px",
          color: "blue",
          bgColor: "transparent",
        }}
      >
        ثپت ورود اوپراتور
      </Button>
    </Box>
  );
};

export default Bottom;
