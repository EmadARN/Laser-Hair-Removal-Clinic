import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { ImNotification } from "react-icons/im";
import { Box, Flex, Input, Select, Text } from "@chakra-ui/react";

const EachPaymentBox = ({
  paymentPriceKepper,
  handlePrice,
  title,
  selectedValue,
  handlePaymentChange,
}) => {
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} mb={5}>
        <Text color={"#666"} fontSize={{ base: "13px", md: "16px" }}>
          {title}
        </Text>
        <Flex gap={3} alignItems={"center"}>
          <Text color={"red"} fontSize={"16px"}>
            حذف
          </Text>
          <MdDeleteOutline fontSize={"16px"} color="red" />
        </Flex>
      </Flex>

      <Box display={"flex"} flexDirection={"column"}>
        <Flex justifyContent={"space-between"}>
          <Text color={"#666"} fontSize={{ base: "13px", md: "15px" }}>
            روش پرداخت
          </Text>
        </Flex>

        <Box py={4}>
          <Select
            mb={4}
            placeholder="انتخاب کنید"
            value={selectedValue}
            onChange={(event) => handlePaymentChange(event)}
            css={{
              textAlign: "right",
              direction: "ltr",
             
            }}
          >
            <option value="ca">نقدی</option>
            <option value="cr">کارتخوان</option>
          </Select>

          <Input
            value={paymentPriceKepper}
            placeholder="مبلغ"
            onChange={(event) => handlePrice(event)}
          />
        </Box>
      </Box>
    </>
  );
};

export default EachPaymentBox;
