import TitleUserDashboard from "@/Common/titleUserDashboard/TitleUserDashboard";
import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import StepperPrototype from "../stepper/Stepper";
import { AcceptBtn } from "../acceptBtn/AcceptBtn";
import { useDispatch } from "react-redux";
import { postCustomerInformation } from "@/features/customerDashboard/customerDashboardSlice";
import { useCookies } from "react-cookie";
import { useCustomToast } from "@/utils/useCustomToast ";
import useStepper from "@/hooks/userDashboard/useSteper";
const UserInformation = ({ slug }) => {
  const { showToast } = useCustomToast();

  const [inputsData, setinputsData] = useState({
    name: "",
    last_name: "",
    phone_number: "",
    national_code: "",
    address: "",
    house_number: "",
    drug_hist: false,
    decease_hist: false,
    doctor: "-",
    offline_number: 0,
  });
  const [drugHistory, setDrugHistory] = useState("fasle");
  const [diseaseHistory, setDiseaseHistory] = useState("fasle");
  const [{ auth_token } = cookies] = useCookies(["auth_token"]);
  const dispatch = useDispatch();

  const { handleNextStep } = useStepper();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setinputsData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name, value) => {
    setinputsData((prev) => ({ ...prev, [name]: value === "true" }));
    if (name === "drug_hist") setDrugHistory(value);
    if (name === "decease_hist") setDiseaseHistory(value);
  };
  const submitHandler = async () => {
    const result = await dispatch(
      postCustomerInformation({
        ...inputsData,
        auth_token,
      })
    );

    if (result.meta.requestStatus === "fulfilled") {
      showToast({
        title: " موفقیت‌آمیز",
        description: " اطلاعات با موفقیت ثبت شد",
        status: "success",
      });
    } else {
      showToast({
        title: "خطا ",
        description: "خطا در ثبت اطلاعات ",
        status: "error",
      });
    }
  };

  return (
    <>
      <StepperPrototype onCompleteStep={handleNextStep} />
      <TitleUserDashboard />
      <RegisterForm
        handleChange={handleChange}
        handleRadioChange={handleRadioChange}
        drugHistory={drugHistory}
        diseaseHistory={diseaseHistory}
        inputsData={inputsData}
      />
      <AcceptBtn
        slug={slug}
        text="ادامه"
        bgColor={"white"}
        submitHandler={submitHandler}
        onNextStep={handleNextStep}
      />
    </>
  );
};

export default UserInformation;
