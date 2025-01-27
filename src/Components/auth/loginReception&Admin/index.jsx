import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
// import Captcha from "./widget/Captcha";
import { useCustomToast } from "@/utils/useCustomToast ";
import { BgAnimate } from "./ui/BgAnimate";
import { useDispatch } from "react-redux";
import { resetAuthState } from "@/features/signin/authSlice";
import useLoginAdminRecptionHooks from "./logic/useLoginAdminRecptionHooks";
import FormLogin from "./ui/formLogin/FormLogin";
import AnimationSide from "./ui/AnimationSide";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [btnClick, setBtnClick] = useState(false);
  const [input, setInput] = useState({ username: "", password: "" });
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(""); // ذخیره توکن کپچا

  const [loading, setLoading] = useState(false);
  const login = useLoginAdminRecptionHooks(dispatch);
  const router = useRouter();
  const { showToast } = useCustomToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(resetAuthState());
    setInput({ username: "", password: "" });
    setLoading(true);
    if (!input.username || !input.password) {
      showToast({
        title: "خطا",
        description: "لطفا نام کاربری و رمز عبور را وارد کنید.",
        status: "error",
      });
      setLoading(false);
      setInput({ username: "", password: "" });
      return;
    }

    const { success } = await login(input, btnClick);
    if (success) {
      showToast({
        title: "ورود موفقیت‌آمیز",
        description: "به داشبورد هدایت شدید.",
        status: "success",
      });
      router.push(
        btnClick ? "/adminDashboard/home" : "/reseptionDashboard/dailyShifts"
      );
      if (
        success &&
        (router.pathname === "/adminDashboard/home" ||
          router.pathname === "/reseptionDashboard/dailyShifts")
      ) {
        setLoading(false);
      }
    } else {
      setLoading(false);

      showToast({
        title: "خطا",
        description: `شما نمی‌توانید به عنوان ${
          btnClick ? "مدیر" : "کارمند"
        } وارد شوید.`,
        status: "error",
      });
      setInput({ username: "", password: "" });
    }
    // Reset input fields
  };

  //enter manager ro reception
  const toggleForm = () => {
    setBtnClick((prev) => !prev);
    setInput({ username: "", password: "" });
  };
  const openModal = () => {};
  // مدیریت موفقیت کپچا
  const handleCaptchaSuccess = (token) => {
    setCaptchaToken(token); // ذخیره توکن کپچا در هنگام تایید
    setIsCaptchaVerified(true);
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
      <BgAnimate />
      {/* {!isCaptchaVerified ? (
        <Captcha onVerify={handleCaptchaSuccess} />
      ) : ( */}
      <>
        <Box
          sx={{
            position: "absolute",
            w: "50%",
            right: 0,
          }}
        >
          <Box sx={{ position: "relative", h: { base: "240px", md: "320px" } }}>
            <Box
              sx={{
                bgColor: "#1111",
                w: "100%",
                h: { base: "240px", md: "320px" },
                zIndex: btnClick ? 10 : 0,
                opacity: btnClick ? 1 : 0,
                p: { base: 2, md: 6 },
                position: "absolute",
                transition: "opacity 1s ease 0.75s",
              }}
            >
              <FormLogin
                loading={loading}
                label="ورود به عنوان مدیر"
                submitHandler={handleSubmit}
                inputHandler={handleInputChange}
                formInput={input}
                dispatch={dispatch}
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
            p: { base: 2, md: 6 },
            h: { base: "240px", md: "320px" },
            w: "50%",
            zIndex: btnClick ? 0 : 10,
            opacity: btnClick ? 0 : 1,
            transition: "opacity 1s ease 0.75s",
            position: "absolute",
            left: btnClick ? "100%" : 0,
          }}
        >
          <FormLogin
            loading={loading}
            label="ورود به عنوان کارمند"
            submitHandler={handleSubmit}
            inputHandler={handleInputChange}
            formInput={input}
            dispatch={dispatch}
          />
        </Box>
      </>
    </Flex>
  );
};

export default LoginPage;
