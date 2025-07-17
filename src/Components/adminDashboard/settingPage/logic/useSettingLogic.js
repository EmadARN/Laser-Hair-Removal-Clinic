import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import {
  getAsyncUserName,
  settingAsyncChanging,
  changePassword,
  
} from "@/features/adminDashboard/adminThunks";
import { removeCommas } from "@/utils/formatNumber";
import { useCustomToast } from "@/utils/useCustomToast ";


const useSettingLogic = () => {
  const { showToast } = useCustomToast();
  const [turnSetting, setTurnSetting] = useState({
    trust_price: 0,
    morning_time: 0,
    afternoon_time: 0,
  });
  const [passwordChange, setPasswordChange] = useState({
    password: "",
    old_password: "",
  });



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
    const rawValue = removeCommas(value); // مقدار اصلی بدون ویرگول
    // setTurnSetting((prev) => ({ ...prev, [name]: value }));
    setTurnSetting((prev) => ({ ...prev, [name]: rawValue })); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordChange((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await dispatch(
      settingAsyncChanging({ ...turnSetting, token: auth_Admin_token })
    );
    if (result.meta.requestStatus === "fulfilled") {
      setTurnSetting({ trust_price: 0, morning_time: 0, afternoon_time: 0 });
      showToast({ title: "تنظیمات با موفقیت تغییر کرد", status: "success" });
    } else {
      showToast({ title: "خطا در تغییر تنظیمات", status: "error" });
    }
  };

  const changePasswordAsync = async (onClose) => {
    const result=await dispatch(
      changePassword({
        password: passwordChange.password,
        old_password: passwordChange.old_password,
        token: auth_Admin_token,
      })
    );
    if (result.meta.requestStatus === "fulfilled") {
      showToast({ title: "رمز عبور با موفقیت تغییر کرد", status: "success" });
    }else{
      showToast({ title: "خطا در تغییر رمز", status: "error" });
    }
    onClose();
  };

  return {
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
  };
};

export default useSettingLogic;
