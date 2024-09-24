import { Box } from "@chakra-ui/react";
import React from "react";
import UserInfoBox from "./widgets/UserInfoBox";
import PaySetting from "./widgets/PaySetting";
import TurnSetting from "./widgets/turnSetting";

const Setting = () => {
  return (
    <>
      <Box sx={{ py: 6 }}>تنظیمات</Box>
      <Box>
        <UserInfoBox />
      </Box>
      <Box sx={{ mt: 8 }}>
        <TurnSetting />
      </Box>
      <Box sx={{ mt: 8 }}>
        <PaySetting />
      </Box>
    </>
  );
};

export default Setting;
