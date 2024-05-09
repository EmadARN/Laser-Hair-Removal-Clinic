import { Box, Button, Flex, Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

const Suggstion = () => {
  const [logIn, setLogIn] = useState(false);
  return (
    <Box width="50%">
      <Text fontSize="md" color={"GrayText"}>
        با ثپت پیشنهادات و انتقادات خود،ما را در ارائه خدمات به شما مراجعین عزیز
        همراهی کنید.
      </Text>
      <Flex flexDirection="column" mt={logIn ? 8 : 5}>
        {!logIn ? (
          <Text>
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
            <Button
              bgColor="RGBA(0, 0, 0, 0.04)"
              color="RGBA(0, 0, 0, 0.64)"
              _hover={{
                bgColor: "RGBA(0, 0, 0, 0.09)",
                color: "RGBA(0, 0, 0, 0.75)",
              }}
              mt={8}
              width="18%"
            >
              ثپت
            </Button>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Suggstion;
