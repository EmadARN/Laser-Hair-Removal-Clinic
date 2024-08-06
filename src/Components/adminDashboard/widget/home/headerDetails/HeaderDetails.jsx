import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const HeaderDetails = () => {
  return (
    <Flex sx={{ justifyContent: "space-between",px:4 }}>
      <Text>خانه خوش آمدید</Text>
      <Text>شنبه ,17 دی</Text>
    </Flex>
  );
};

export default HeaderDetails;
