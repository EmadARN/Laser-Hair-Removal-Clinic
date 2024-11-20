import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { ImNotification } from "react-icons/im";
import { Box, Flex, Input, Select, Text } from "@chakra-ui/react";

const EachPaymentBox = ({ title }) => {
  return (
    <>
      <Flex justifyContent={"space-between"}>
        <Text> {title}</Text>
        <Flex gap={3} alignItems={"center"}>
          <Text color={"red"} fontSize={"16px"}>
            حذف
          </Text>
          <MdDeleteOutline fontSize={"16px"} color="red" />
        </Flex>
      </Flex>

      <Box display={"flex"} flexDirection={"column"}>
        <Flex justifyContent={"space-between"}>
          <Text fontSize={"16px"}>روش پرداخت</Text>
          <ImNotification fontSize={"16px"} />
        </Flex>

        <Box py={4}>
          <Select placeholder="انتخاب کنید">
            <option value="option1"> نقدی</option>
            <option value="option2"> کارتخوان</option>
            <option value="option3"> کارت به کارت</option>
          </Select>
          <Input placeholder="مبلغ" />
        </Box>
      </Box>
    </>
  );
};

export default EachPaymentBox;
