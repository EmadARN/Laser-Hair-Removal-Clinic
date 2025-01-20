import React from "react";
import {
  Box,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import CustomButton from "@/Common/customeButton/CustomeButton";
import { formatNumber } from "@/utils/formatNumber";

const TurnSetting = ({ handleInputs, submitHandler,turnSetting }) => {
  return (
    <form onSubmit={submitHandler}>
      <Box
        width={{ base: "170%", md: "100%" }}
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        alignItems={"center"}
        justifyContent={"center"}
        mb={8}
      >
        <Box width="100%">
          <Text fontWeight={"bold"} textAlign={"right"} color={"#111"}>
            تنظیمات نوبت دهی و ودیعه
          </Text>
        </Box>
        <Stack
          spacing={3}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          bgColor={"graySky.100"}
          width={{ sm: "100%", lg: "100%" }}
          height={"auto"}
          p={6}
          display={"flex"}
          justifyContent={"space-between"}
          borderRadius={"8px"}
        >
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <FormControl>
              <FormLabel> شروع نوبت دهی</FormLabel>
              <Input
                sx={{ borderColor: "#777" }}
                name="morning_time"
                type="time"
                min="08:00"
                max="11:00"
                onChange={handleInputs}
              />
            </FormControl>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <FormControl>
              <FormLabel> پایان نوبت دهی</FormLabel>
              <Input
                sx={{ borderColor: "#777" }}
                name="afternoon_time"
                type="time"
                min="12:00"
                max="23:59"
                onChange={handleInputs}
              />
            </FormControl>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <FormControl>
              <FormLabel> تنظیمات ودیعه </FormLabel>
              <Input
                sx={{ borderColor: "#777" }}
                onChange={handleInputs}
                name="trust_price"
                value={formatNumber(turnSetting.trust_price)}
              />
            </FormControl>
          </Box>
          <Box mt={4}>
            <CustomButton
              sx={{ fontSize: { base: "13px", md: "16px" } }}
              colorScheme={"blue"}
              py={4}
              type="submit"
            >
              ثبت تغییرات
            </CustomButton>
          </Box>
        </Stack>
      </Box>
    </form>
  );
};

export default TurnSetting;
