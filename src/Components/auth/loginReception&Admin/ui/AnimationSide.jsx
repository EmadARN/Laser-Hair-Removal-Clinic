import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import CustomButton from "@/Common/customeButton/CustomeButton";

const AnimationSide = ({ clicHandler, btnClick }) => {
  return (
    <>
      <Box w={"100%"}>
        <Text
          sx={{
            fontSize: { base: "16px", md: "30px" },
            fontWeight: "bold",
            color: "#fff",
          }}
          as="h1"
        >
          به سامانه مدیریت کلینیک لیزر <Text>ساید خوش آمدید</Text>
        </Text>
      </Box>
      <Flex
        sx={{
          w: "90%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <CustomButton
          onClick={clicHandler}
          mt={10}
          w={{ base: "100%", md: "40%" }}
          boxShadow="rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset"
          bg="#fff"
          color="#666"
        >
          {btnClick ? "ورود کارمند" : "ورود مدیر"}
        </CustomButton>
      </Flex>
    </>
  );
};

export default AnimationSide;
