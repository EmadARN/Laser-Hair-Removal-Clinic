import StepperPrototype from "@/Common/stepper/Stepper";
import TitleUserDashboard from "@/Common/titleUserDashboard/TitleUserDashboard";
import React from "react";
import AreaChoice from "./AreaChoice";
import { AcceptBtn } from "@/Common/acceptBtn/AcceptBtn";

const ChoosingArea = ({ page, setPage }) => {
  return (
    <>
      <StepperPrototype />
      <TitleUserDashboard page={page} setPage={setPage} />
      <AreaChoice />
      <AcceptBtn page={page} setPage={setPage} text="ادامه" bgColor={"white"} />
    </>
  );
};

export default ChoosingArea;
