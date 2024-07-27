import React, { useState } from "react";
import LoginPage from "./LoginPage";
import RegisterLogin from "./RegestirLogin";

const Login = () => {
  const [loginStepper, setLoginStepper] = useState(0);
  return (
    <>
      {loginStepper === 0 ? (
        <LoginPage
          loginStepper={loginStepper}
          setLoginStepper={setLoginStepper}
        />
      ) : null}
      {loginStepper === 1 ? (
        <RegisterLogin
          loginStepper={loginStepper}
          setLoginStepper={setLoginStepper}
        />
      ) : null}
    </>
  );
};

export default Login;
