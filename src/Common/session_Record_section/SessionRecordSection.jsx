import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
const SessionRecordSection = ({ setSteperState, steperState }) => {
  return (
    <Box
      bgColor={"#FFFFFF"}
      mt={4}
      width={{ base: "100%", md: "45%" }}
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      borderRadius="10px"
      p={4}
      display="flex"
      flexDirection={"column"}
    >
      <Box
        w={"100%"}
        display="flex"
        justifyContent={"space-between"}
        as="button"
        onClick={() => setSteperState(steperState + 1)}
      >
        <Box mb={4}>
          <Text fontSize={{ base: "xs", md: "sm" }}>گزارش جلسات</Text>
        </Box>

        <Box>
          <IoIosArrowBack />
        </Box>
      </Box>

      <hr />

      <hr />

      <Box mt={1} w={"100%"} display="flex" justifyContent={"flex-start"}>
        <Button
          fontSize={{ base: "xs", md: "sm" }}
          variant={"ghost"}
          color={"red"}
          leftIcon={<IoExitOutline size={"18px"} />}
        >
          خروج از حساب کاربری
        </Button>
      </Box>
    </Box>
  );
};

export default SessionRecordSection;
