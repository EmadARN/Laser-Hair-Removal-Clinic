import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import EachPaymentBox from "./EachPaymentBox";

const CustomPayment = () => {
  return (
    <>
      <Flex flexDirection={"column"} gap={5} p={3}>
        <Box mb={4}>
          <EachPaymentBox title1="پرداخت ۱" />
        </Box>

        <Box mb={4}>
          <EachPaymentBox title1="پرداخت ۲" />
        </Box>

        <Flex justifyContent={"space-between"}>
          <Box>
            <Button color="#fff" colorPalette="blue" variant={"solid"}>
              تایید تغییرات
            </Button>
          </Box>

          <Box>
            <Button color={"blue"} variant={"ghost"}>
              لغو تغییرات
            </Button>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default CustomPayment;
