import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import StepperPrototype from "../stepper";
import { postCustomerInformation } from "@/features/customerDashboard/customerThunks";
import { useRouter } from "next/router";
import CustomButton from "@/Common/customeButton/CustomeButton";
import Loading from "@/Common/loading";
import { Flex } from "@chakra-ui/react";
import TitleUserDashboard from "../shared/TitleUserDashboard";
import FormInput from "./ui/FormInput";
import { useFormik } from "formik";
import { useCustomToast } from "@/utils/useCustomToast ";
import { validationSchema } from "./schema";

const UserInformation = ({ slug }) => {
  const { showToast } = useCustomToast();
  const [{ auth_token }] = useCookies(["auth_token"]);
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.customerDashboard);
  const router = useRouter();
  const [drugHistory, setDrugHistory] = useState("false");
  const [diseaseHistory, setDiseaseHistory] = useState("false");

  // تنظیم Formik
  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema,
    onSubmit: async (values) => {
      const result = await dispatch(
        postCustomerInformation({
          ...values,
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
    },
  });

  // مدیریت تغییرات رادیوباتن‌ها
  const handleRadioChange = (name, value) => {
    formik.setFieldValue(name, value === "true");
    if (name === "drug_hist") setDrugHistory(value);
    if (name === "decease_hist") setDiseaseHistory(value);
  };

  // غیرفعال کردن دکمه در صورت وجود خطا یا پر نشدن فیلدها
  const isDisabled = !formik.isValid || !formik.dirty;

  return (
    <>
      <StepperPrototype currentStep={1} />
      <TitleUserDashboard />
      <FormInput
        formik={formik}
        drugHistory={drugHistory}
        diseaseHistory={diseaseHistory}
        handleRadioChange={handleRadioChange}
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
          onClick={formik.handleSubmit}
          isDisabled={isDisabled}
          w="30%"
        >
          {loading ? (
            <Loading noneHeight="0vh" bg="#fff" h="4px" w="4px" />
          ) : (
            "ادامه"
          )}
        </CustomButton>
      </Flex>
    </>
  );
};

export default UserInformation;
