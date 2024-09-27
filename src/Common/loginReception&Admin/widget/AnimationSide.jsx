import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CustomButton from "./CustomButton";

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
          به سامانه مدیریت کلینیک لیزر <Text>عماد خوش آمدید</Text>
        </Text>
      </Box>
      <Flex sx={{ w: "100%", justifyContent: "center" }}>
        <CustomButton clicHandler={clicHandler} btnClick={btnClick} />
      </Flex>
    </>
  );
};

export default AnimationSide;
