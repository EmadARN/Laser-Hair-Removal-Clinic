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
  const [btnClick, setBtnClick] = React.useState(false);
  const [adminInput, setAdminInput] = useState({ username: "", password: "" });
  const [employeeInput, setEmployeeInput] = useState({
    username: "",
    password: "",
  });
  const [cookies, setCookie] = useCookies(["auth_AdminReception_token"]);

  const router = useRouter();
  const adminInputHandler = (e) => {
    const { name, value } = e.target;
    setAdminInput({ ...adminInput, [name]: value });
  };

  const employeeInputHandler = (e) => {
    const { name, value } = e.target;
    setEmployeeInput({ ...employeeInput, [name]: value });
  };

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    const payload = btnClick ? adminInput : employeeInput;
    const result = await dispatch(postAsyncLogin(payload));

    if (result.meta.requestStatus === "fulfilled") {
      const receivedToken = result.payload.token;
      if (receivedToken) {
        setCookie("auth_AdminReception_token", receivedToken, {
          path: "/",
        });

        if (btnClick) {
          router.push("/adminDashboard/home");
        } else {
          router.push("/reseptionDashboard/dailyShifts");
        }
      }

      setAdminInput({});
      setEmployeeInput({});
    }
  };

  const clicHandler = () => {
    setBtnClick(!btnClick);
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
              submitHandler={submitHandler}
              inputHandler={adminInputHandler}
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
            <AnimationSide clicHandler={clicHandler} btnClick={btnClick} />
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
          submitHandler={submitHandler}
          inputHandler={employeeInputHandler}
          formInput={employeeInput}
        />
      </Box>
    </Flex>
  );
};

export default LoginPage;
