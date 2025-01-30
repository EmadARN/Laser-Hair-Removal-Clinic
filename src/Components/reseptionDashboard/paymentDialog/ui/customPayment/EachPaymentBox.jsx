import React from "react";
import { Box, Flex, FormLabel, Input, Select, Text } from "@chakra-ui/react";

const EachPaymentBox = ({
  paymentPriceKepper,
  handlePrice,
  title,
  selectedValue,
  handlePaymentChange,
}) => {
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text color={"#666"} fontSize={{ base: "13px", md: "16px" }}>
          {title}
        </Text>
      </Flex>

      <Box display={"flex"} flexDirection={"column"}>
        <Box py={4}>
          <FormLabel color="#777" fontWeight="bold" fontSize="14px">
            روش پرداخت
          </FormLabel>
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
          <FormLabel color="#777" fontWeight="bold" fontSize="14px">
            مبلغ
          </FormLabel>
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
