import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import UserInfoBox from "./widgets/UserInfoBox";
import TurnSetting from "./widgets/turnSetting";
import { useDispatch, useSelector } from "react-redux";
import { settingAsyncChanging } from "@/features/adminDashboard/adminDashboardSlice";

const Setting = () => {
  const [turnSetting, setTurnSetting] = useState({
    trust_price: 0,
    morning_time: 0,
    afternoon_time: 0,
  });
  const { token } = useSelector((store) => store.adminDashboard);
  const dispatch = useDispatch();
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setTurnSetting((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(settingAsyncChanging({ ...turnSetting, token }));
  };

  return (
    <>
      <Box sx={{ py: 6 }}>تنظیمات</Box>
      <Box>
        <UserInfoBox />
      </Box>
      <Box sx={{ mt: 8 }}>
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
