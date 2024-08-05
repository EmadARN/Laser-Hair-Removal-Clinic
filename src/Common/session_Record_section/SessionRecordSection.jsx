import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import { firstBox, secBox, buttonStyle } from "./Style";
const SessionRecordSection = ({ setSteperState, steperState }) => {
  return (
    <Box sx={firstBox}>
      <Box
        sx={secBox}
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
          variant={"ghost"}
          sx={buttonStyle}
          leftIcon={<IoExitOutline size={"18px"} />}
        >
          خروج از حساب کاربری
        </Button>
      </Box>
    </Box>
  );
};

export default SessionRecordSection;
