
import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { ImNotification } from "react-icons/im";
import { For, Stack, createListCollection } from "@chakra-ui/react";
import { Box, Flex, Input, Text } from "@chakra-ui/react";


import InputSelect from './InputSelect';
const EachPaymentBox = ({title}) => {
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
            <InputSelect />
          
              <Input placeholder="مبلغ" />
          
          </Box>
        </Box>
        </>
  )
}

export default EachPaymentBox