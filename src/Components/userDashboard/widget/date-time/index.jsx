import TitleUserDashboard from "@/Common/titleUserDashboard/TitleUserDashboard";
import React from "react";
import Date from "./Date";
import StepperPrototype from "../stepper/Stepper";
import { AcceptBtn } from "../acceptBtn/AcceptBtn";

const Date_Time = ({ page, setPage, slug }) => {
  return (
    <>
      <StepperPrototype />
      <TitleUserDashboard page={page} setPage={setPage} />
      <Date />
      <AcceptBtn
        page={page}
        setPage={setPage}
        slug={slug}
        text="ادامه"
        bgColor={"white"}
      />
    </>
  );
};

export default Date_Time;
