import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { useCustomToast } from "@/utils/useCustomToast ";
import StepperPrototype from "../stepper";
import { postCustomerInformation } from "@/features/customerDashboard/customerThunks";
import { useRouter } from "next/router";
import CustomButton from "@/Common/customeButton/CustomeButton";
import Loading from "@/Common/loading";
import { Flex } from "@chakra-ui/react";
import TitleUserDashboard from "../shared/TitleUserDashboard";
import FormInput from "./ui/FormInput";

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
  const [isDisabled, setIsDisabled] = useState(true);
  const [drugHistory, setDrugHistory] = useState("fasle");
  const [diseaseHistory, setDiseaseHistory] = useState("fasle");
  const [{ auth_token } = cookies] = useCookies(["auth_token"]);

  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.customerDashboard);
  const router = useRouter();

  useEffect(() => {
    // تابع برای بررسی اینکه آیا تمام فیلدها پر شده‌اند یا نه
    const isFormValid = () => {
      const requiredFields = [
        "name",
        "last_name",
        "phone_number",
        "national_code",
        "address",
        "house_number",
      ];
      return requiredFields.every(
        (field) => inputsData[field] && inputsData[field].trim() !== ""
      );
    };

    // به‌روزرسانی وضعیت دکمه با توجه به وضعیت فیلدهای ضروری
    setIsDisabled(!isFormValid());
  }, [inputsData]);

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
        slug,
        router: router.pathname,
      })
    );

    if (result.meta.requestStatus === "fulfilled") {
      showToast({
        title: "موفقیت‌آمیز",
        description: "اطلاعات با موفقیت ثبت شد",
        status: "success",
      });
    } else {
      showToast({
        title: "خطا",
        description: "خطا در ثبت اطلاعات",
        status: "error",
      });
    }
  };

  return (
    <>
      <StepperPrototype currentStep={1} />
      <TitleUserDashboard />
      <FormInput
        handleChange={handleChange}
        handleRadioChange={handleRadioChange}
        drugHistory={drugHistory}
        diseaseHistory={diseaseHistory}
        inputsData={inputsData}
      />
      <Flex
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          p: 3,
        }}
      >
        <CustomButton
          slug={slug}
          onClick={submitHandler}
          isDisabled={isDisabled}
          w="30%"
        >
          {loading ? (
            <Loading noneHeight="0vh" bg="#fff" h="4px" w="4px" />
          ) : (
            "ادامه"
          )}{" "}
        </CustomButton>
      </Flex>
    </>
  );
};

export default UserInformation;
