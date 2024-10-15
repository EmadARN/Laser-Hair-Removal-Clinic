import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Logo = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height={32}
      stroke="currentColor"
      width={32}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
      />
    </svg>
  );
};
const FooterSub = () => {
  return (
    <>
      <Flex
        align={"center"}
        _before={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.200"),
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.200"),
          flexGrow: 1,
          ml: 8,
        }}
      >
        <Flex>
          <span>لیزر ساید</span>
          <Logo />
        </Flex>
      </Flex>
      <Text pt={6} fontSize={"sm"} textAlign={"center"}>
        تمامی حقوق این سایت متعلق به کلینیک لیزر ساید می باشد
      </Text>
    </>
  );
};

export default FooterSub;
