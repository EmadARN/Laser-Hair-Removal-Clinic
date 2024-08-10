import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const RegisterForm = () => {
  return (
    <Box
      width={"40%"}
      mx={"auto"}
      mt={5}
      bgColor={"white"}
      p={8}
      rounded={"8px"}
    >
      <FormControl isRequired>
        <FormLabel>نام</FormLabel>
        <Input />
        <FormLabel>نام خانوادگی</FormLabel>
        <Input />
        <FormLabel>تلفن ثابت </FormLabel>
        <Input />
        <FormLabel>کدملی (باید 11 رقمی )</FormLabel>
        <Input />
      </FormControl>
      <FormControl isRequired pt={8}>
        <Flex color={"blue"} alignItems={"center"}>
          <ExclamationCircleIcon width={"12px"} />
          <Text fontSize={"12px"}>دارو ها و بیماری های مهم</Text>
        </Flex>
        <FormLabel>دارو های مصرفی</FormLabel>
        <Input />
        <FormLabel>سابقه بیماری پوستی</FormLabel>
        <Input />
      </FormControl>
      {/* <AccordionMenu /> */}
    </Box>
  );
};

export default RegisterForm;
