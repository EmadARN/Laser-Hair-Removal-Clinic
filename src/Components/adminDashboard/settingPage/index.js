import { Box, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import UserInfoBox from "./ui/UserInfoBox";
import TurnSetting from "./ui/turnSetting";
import {
  changePassword,
  getAsyncUserName,
  settingAsyncChanging,
} from "@/features/adminDashboard/adminThunks";

const Setting = () => {
  const [turnSetting, setTurnSetting] = useState({
    trust_price: 0,
    morning_time: 0,
    afternoon_time: 0,
  });
  const [passwordChange, setPasswordChange] = useState({
    password: "",
    old_password: "",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [{ auth_Admin_token }] = useCookies(["auth_Admin_token"]);

  const { userNames } = useSelector((store) => store.adminDashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth_Admin_token) {
      dispatch(getAsyncUserName({ token: auth_Admin_token }));
    }
  }, [dispatch, auth_Admin_token]);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setTurnSetting((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(settingAsyncChanging({ ...turnSetting, token: auth_Admin_token }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setPasswordChange((prev) => ({ ...prev, [name]: value })); // Update this line
  };
  const changePasswordAsync = (passwordChange) => {
    dispatch(
      changePassword({
        password: passwordChange.password,
        old_password: passwordChange.old_password,
        token: auth_Admin_token,
      })
    );
    onClose();
  };

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
          submitHandler={submitHandler}
        />
      </Box>
    </>
  );
};

export default Setting;
