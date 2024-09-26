// import LoginManager from "@/Common/loginReception&Admin/LoginManager";
// import LoginReception from "@/Common/loginReception&Admin/LoginReception";
// import React, { useState } from "react";

// const LoginManagerReception = () => {
//   const [loginStepper, setLoginStepper] = useState(0);
//   return (
//     <>
//       {loginStepper === 0 ? (
//         <LoginManager
//           loginStepper={loginStepper}
//           setLoginStepper={setLoginStepper}
//         />
//       ) : null}
//       {loginStepper === 1 ? (
//         <LoginReception
//           loginStepper={loginStepper}
//           setLoginStepper={setLoginStepper}
//         />
//       ) : null}
//     </>
//   );
// };

// export default LoginManagerReception;
import LoginPage from "@/Common/loginReception&Admin/LoginPage";
import React from "react";

const LoginManagerReception = () => {
  return <LoginPage />;
};

export default LoginManagerReception;
