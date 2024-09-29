import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import AnimationSide from "./widget/AnimationSide";
import Inputs from "./widget/Inputs";
import { BgAnimate } from "./widget/BgAnimate";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { postAsyncLogin } from "@/features/adminDashboard/adminDashboardSlice";

const LoginPage = () => {
  const [btnClick, setBtnClick] = useState(false);
  const [adminInput, setAdminInput] = useState({ username: "", password: "" });
  const [employeeInput, setEmployeeInput] = useState({
    username: "",
    password: "",
  });
  const [cookies, setCookie] = useCookies([
    "auth_Admin_token",
    "auth_Employee_token",
  ]);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleInputChange = (setter) => (e) => {
    const { name, value } = e.target;
    setter((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const input = btnClick ? adminInput : employeeInput;
    const tokenName = btnClick ? "auth_Admin_token" : "auth_Employee_token";

    if (!input.username || !input.password) {
      alert(
        `لطفا نام کاربری و رمز عبور ${
          btnClick ? "مدیر" : "کارمند"
        } را وارد کنید.`
      );
      return;
    }

    const result = await dispatch(postAsyncLogin(input));

    if (result.meta.requestStatus === "fulfilled") {
      const receivedToken = result.payload.token;
      const userType = result.payload.user_type;

      if (
        receivedToken &&
        (btnClick ? userType === "a" : ["o", "r"].includes(userType))
      ) {
        setCookie(tokenName, receivedToken, { path: "/" });
        router.push(
          btnClick ? "/adminDashboard/home" : "/reseptionDashboard/dailyShifts"
        );
      } else {
        alert(
          `شما نمی‌توانید به عنوان ${btnClick ? "مدیر" : "کارمند"} وارد شوید.`
        );
      }
    }

    // Reset input fields
    setAdminInput({ username: "", password: "" });
    setEmployeeInput({ username: "", password: "" });
  };

  const toggleForm = () => {
    setBtnClick((prev) => !prev);
  };

  return (
    <Flex
      sx={{
        justifyContent: "center",
        alignItems: "center",
        w: "100%",
        h: "100vh",
        position: "relative",
      }}
    >
      <Box sx={{ position: "absolute", w: "50%", right: 0 }}>
        <BgAnimate />
        <Box sx={{ position: "relative", h: "300px" }}>
          <Box
            sx={{
              bgColor: "#1111",
              w: "100%",
              h: "100%",
              zIndex: btnClick ? 10 : 0,
              opacity: btnClick ? 1 : 0,
              p: 6,
              position: "absolute",
              transition: "opacity 1s ease 0.75s",
            }}
          >
            <Inputs
              label="ورود به عنوان مدیر"
              submitHandler={handleSubmit}
              inputHandler={handleInputChange(setAdminInput)}
              formInput={adminInput}
            />
          </Box>
          <Box
            sx={{
              bgColor: "brand.400",
              w: "100%",
              h: "100%",
              p: 6,
              boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
              zIndex: btnClick ? 10 : 0,
              position: "absolute",
              right: btnClick ? "100%" : 0,
              transition: "all 1s ease",
            }}
          >
            <AnimationSide clicHandler={toggleForm} btnClick={btnClick} />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          bgColor: "#1111",
          p: 6,
          h: "300px",
          w: "50%",
          zIndex: btnClick ? 0 : 10,
          opacity: btnClick ? 0 : 1,
          transition: "opacity 1s ease 0.75s",
          position: "absolute",
          left: btnClick ? "100%" : 0,
        }}
      >
        <Inputs
          label="ورود به عنوان کارمند"
          submitHandler={handleSubmit}
          inputHandler={handleInputChange(setEmployeeInput)}
          formInput={employeeInput}
        />
      </Box>
    </Flex>
  );
};

export default LoginPage;
