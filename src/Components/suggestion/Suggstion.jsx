import Section_title from "@/Common/section-title";
import { Box, Button, Flex, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import Btn from "./widgets/Btn";

const Suggstion = ({ logIn }) => {
  return (
    <Box
      px={{ base: 10, md: 28 }}
      py={10}
      mx={2}
      bgColor={"#ffffff"}
      rounded={"25px"}
    >
      <Section_title section_title="پیشنهادات و انتقادات"></Section_title>
      <Text fontSize="md" color={"GrayText"} textAlign="justify">
        با ثپت پیشنهادات و انتقادات خود،ما را در ارائه خدمات به شما مراجعین عزیز
        همراهی کنید.
      </Text>
      <Flex flexDirection="column" mt={logIn ? 8 : 5}>
        {!logIn ? (
          <Text textAlign="justify">
            برای ثبت پیشنهاد و انتقادات، ابتدا وارد حساب کاربری خود شوید
          </Text>
        ) : (
          <>
            <Text fontSize="sm">پیشنهادات و انتقادات شما</Text>
            <Textarea
              focusBorderColor="purple.400"
              placeholder="اینجا بنویسید"
              mt={3}
            />
            <Btn />
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Suggstion;
