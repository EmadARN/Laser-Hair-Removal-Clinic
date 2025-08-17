// FormInput.jsx
import InputControl from "@/Common/formController/InputControl";
import RadioControl from "@/Common/formController/RadioControl";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const FormInput = ({ formik, drugHistory, diseaseHistory, handleRadioChange }) => {
  const getValue = (name) => formik.values[name];
  const getError = (name) => formik.touched?.[name] && formik.errors?.[name];

  return (
    <Box
      width={{ base: "90%", md: "60%", lg: "40%" }}
      mx={"auto"}
      mt={5}
      bgColor={"white"}
      p={6}
      rounded={"8px"}
      boxShadow={"lg"}
    >
      <InputControl
        name="name"
        value={getValue("name")}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="نام"
        placeholder="نام"
        error={getError("name")}
      />
      <InputControl
        name="last_name"
        value={getValue("last_name")}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="نام خانوادگی"
        placeholder="نام خانوادگی"
        error={getError("last_name")}
      />
      <InputControl
        name="national_code"
        value={getValue("national_code")}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="کد ملی"
        placeholder="کد ملی"
        error={getError("national_code")}
      />
      <InputControl
        name="phone_number"
        value={getValue("phone_number")}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="شماره همراه"
        placeholder="شماره همراه"
        error={getError("phone_number")}
      />

      <Flex wrap="wrap" gap={4}>
        <RadioControl
          label="مصرف دارو:"
          value={drugHistory}
          handleChange={handleRadioChange}
          name="drug_hist"
          error={getError("drug_hist")}
        />
        <RadioControl
          label="سابقه بیماری:"
          value={diseaseHistory}
          handleChange={handleRadioChange}
          name="decease_hist"
          error={getError("decease_hist")}
        />
      </Flex>

      <InputControl
        name="house_number"
        value={getValue("house_number")}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="شماره ثابت"
        placeholder="شماره ثابت"
        error={getError("house_number")}
      />
      <InputControl
        name="address"
        value={getValue("address")}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        label="آدرس منزل"
        placeholder="آدرس منزل"
        error={getError("address")}
      />
    </Box>
  );
};

export default FormInput;
