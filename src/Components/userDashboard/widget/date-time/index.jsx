import StepperPrototype from "@/Common/stepper/Stepper";
import TitleUserDashboard from "@/Common/titleUserDashboard/TitleUserDashboard";
import React from "react";
import Date from "./Date";
import { AcceptBtn } from "@/Common/acceptBtn/AcceptBtn";

const Date_Time = ({ page, setPage }) => {
  return (
    <>
      <StepperPrototype />
      <TitleUserDashboard />
      <Date />
      <AcceptBtn page={page} setPage={setPage} text="ادامه" bgColor={"white"}/>
    </>
  );
};

export default Date_Time;
