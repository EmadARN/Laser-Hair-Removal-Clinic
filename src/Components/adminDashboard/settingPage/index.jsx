import { Box, useDisclosure } from "@chakra-ui/react";
import React from "react";
import UserInfoBox from "./ui/UserInfoBox";
import TurnSetting from "./ui/turnSetting";
import useSettingLogic from "./logic/useSettingLogic";
import { useCustomToast } from "@/utils/useCustomToast ";

const Setting = () => {
  const { showToast } = useCustomToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    turnSetting,
    setTurnSetting,
    handleInputs,
    passwordChange,
    setPasswordChange,
    handleInputChange,
    submitHandler,
    changePasswordAsync,
    userNames,
    auth_Admin_token,
  } = useSettingLogic(showToast);

  return (
    <>
      <Box sx={{ py: 6 }}>تنظیمات</Box>
      <Box width={"100%"}>
        <UserInfoBox
          changePasswordAsync={changePasswordAsync}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          userNames={userNames}
          passwordChange={passwordChange}
          setPasswordChange={setPasswordChange}
          handleInputChange={handleInputChange}
        />
      </Box>
      <Box width={"100%"} sx={{ mt: 8 }}>
        <TurnSetting
          handleInputs={handleInputs}
          setTurnSetting={setTurnSetting}
          turnSetting={turnSetting}
          token={auth_Admin_token}
          submitHandler={() => submitHandler(showToast)}
        />
      </Box>
    </>
  );
};

export default Setting;
