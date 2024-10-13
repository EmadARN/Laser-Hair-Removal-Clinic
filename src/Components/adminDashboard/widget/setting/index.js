import { Box, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import UserInfoBox from "./widgets/UserInfoBox";
import TurnSetting from "./widgets/turnSetting";
import { useDispatch, useSelector } from "react-redux";
import {
  getSettingInformation,
  settingAsyncChanging,
} from "@/features/adminDashboard/adminDashboardSlice";

const Setting = () => {
  const [turnSetting, setTurnSetting] = useState({
    trust_price: 0,
    morning_time: 0,
    afternoon_time: 0,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { token } = useSelector((store) => store.adminDashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getSettingInformation({ token }));
    }
  }, [dispatch, token]);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setTurnSetting((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(settingAsyncChanging({ ...turnSetting, token }));
  };

  const editUserName = () => {
    onClose();
  };
  return (
    <>
      <Box sx={{ py: 6 }}>تنظیمات</Box>
      <Box width={"100%"}>
        <UserInfoBox
          editUserName={editUserName}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      </Box>
      <Box width={"100%"} sx={{ mt: 8 }}>
        <TurnSetting
          handleInputs={handleInputs}
          setTurnSetting={setTurnSetting}
          turnSetting={turnSetting}
          token={token}
          submitHandler={submitHandler}
        />
      </Box>
    </>
  );
};

export default Setting;
