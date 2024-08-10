import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
const PaySetting = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      gap={3}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box width={{ sm: "100%", lg: "80%" }}>
        <Text fontWeight={"bold"} textAlign={"right"} color={"#111"}>
          تنظیمات ودیعه
        </Text>
      </Box>
      <Box
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        bgColor={"#ededed"}
        width={{ sm: "100%", lg: "80%" }}
        height={"auto"}
        p={6}
        display={"flex"}
        justifyContent={"space-between"}
        borderRadius={"8px"}
      >
        <Box alignItems={"center"} display={"flex"} gap={6}>
          <Text>مبلغ ودیعه</Text>
          <Box>
            <Input border={"2px solid #444"} size={"sm"} />
          </Box>
        </Box>

        <Box>
          <Button
            sx={{ fontSize: { base: "13px", md: "20px" } }}
            colorScheme={"blue"}
            py={4}
          >
            ثبت تغییرات
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PaySetting;
