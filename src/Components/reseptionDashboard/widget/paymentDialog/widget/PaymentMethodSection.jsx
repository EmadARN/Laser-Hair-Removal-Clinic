import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { CiShare1 } from "react-icons/ci";
import { Checkbox, CheckboxGroup,Stack } from '@chakra-ui/react'
const PaymentMethodSection = () => {
  return (
    <Box p={3} width={"100%"} h={"auto"} border={"1px solid #777"}>
      <Box
        display={"flex"}
        width={"100%"}
        justifyContent={"space-between"}
        p={2}
      >
        <Text color={"#555"}>نحوه ی پرداخت</Text>
        <Box display={"flex"} alignItems={"center"}>
        <CiShare1 color="blue"  />
          <Text mr={1} color="blue">پرداخت به چند روش</Text>
         
        </Box>
      </Box>

      <Box mt={2} width={'100%'} p={2}>
        <CheckboxGroup colorScheme="green" defaultValue={["naruto", "kakashi"]}>
          <Stack spacing={[1, 5]} direction={["column", "row"]}>
            <Checkbox rounded={'50%'} value="naruto">کارتخوان</Checkbox>
            <Checkbox value="sasuke">نقدی</Checkbox>
            <Checkbox value="kakashi">کارت به کارت</Checkbox>
            <Checkbox value="kakashi">پرداخت به صورت نسیه</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>
    </Box>
  );
};

export default PaymentMethodSection;
