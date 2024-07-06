import AccordionMenu from "@/Common/accordionMenu/AccordionMenu";
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
    <Box>
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
      <FormControl isRequired>
        <Flex color={"blue"} alignItems={"center"}>
          <ExclamationCircleIcon width={"12px"} />
          <Text fontSize={"12px"}>دارو ها و بیماری های مهم</Text>
        </Flex>
        <FormLabel>دارو های مصرفی</FormLabel>
        <Input />
        <FormLabel>سابقه بیماری پوستی</FormLabel>
        <Input />
      </FormControl>
      <AccordionMenu />
    </Box>
  );
};

export default RegisterForm;
