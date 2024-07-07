import StepperPrototype from "@/Common/stepper/Stepper";
import TitleUserDashboard from "@/Common/titleUserDashboard/TitleUserDashboard";
import React from "react";
import RegisterForm from "./RegisterForm";
import { AcceptBtn } from "@/Common/acceptBtn/AcceptBtn";

const UserInformation = ({ page, setPage }) => {
  return (
    <>
      <StepperPrototype />
      <TitleUserDashboard />
      <RegisterForm />
      <AcceptBtn page={page} setPage={setPage} text="ادامه" />
    </>
  );
};

export default UserInformation;
