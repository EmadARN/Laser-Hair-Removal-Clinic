
import React from "react";
import { Box, Text, Radio, RadioGroup, Stack, Flex } from "@chakra-ui/react";
import { CiShare1 } from "react-icons/ci";

const PaymentMethodSection = ({
  setStep,
  step,
  oneWayPaymentValu,
  handlePaymentMethodChange,
}) => {
  const paymentMethods = [
    { value: "cr", label: "کارتخوان" },
    { value: "ca", label: "نقدی" },
    { value: "on", label: "کارت به کارت" },
    { value: "ch", label: "پرداخت به صورت نسیه" },
  ];

  return (
    <Box width="100%" h="auto" border="1px solid #ddd" borderRadius="md">
      {/* Header Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex justifyContent="space-between" alignItems="center" w="100%">
          <Text color={"#555"}> نحوه ی پرداخت</Text>

          <Box
            as="button"
            display={"flex"}
            alignItems={"center"}
            mt={{ base: 2, md: 0 }}
          >
            <CiShare1 color="blue" />
            <Text
              as={"button"}
              onClick={() => setStep(step + 2)}
              color={"blue"}
              ml={1}
            >
              پرداخت به چند روش
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Payment Methods Radio Buttons */}
      <Box mt={2} width="100%" p={2}>
        <RadioGroup
          defaultValue="pos"
          value={oneWayPaymentValu}
          onChange={handlePaymentMethodChange}
        >
          <Stack
            spacing={3}
            direction="row"
            wrap="wrap"
            justifyContent="flex-start"
          >
            {paymentMethods.map((method) => (
              <Radio
                key={method.value}
                value={method.value}
                flexBasis={{ base: "100%", md: "48%" }}
                colorScheme="purple" // تغییر رنگ به بنفش
              >
                {method.label}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default PaymentMethodSection;
