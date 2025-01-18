import InputControl from "@/Common/formController/InputControl";
import RadioControl from "@/Common/formController/RadioControl";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const RegisterForm = ({
  handleChange,
  handleRadioChange,
  drugHistory,
  diseaseHistory,
  inputsData,
}) => {

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
        value={inputsData.name}
        handleChange={handleChange}
        placeholder="نام"
      />
      <InputControl
        name="last_name"
        value={inputsData.last_name}
        handleChange={handleChange}
        placeholder="نام خانوادگی"
      />
      <InputControl
        name="national_code"
        value={inputsData.national_code}
        handleChange={handleChange}
        placeholder="کد ملی"
      />
      <InputControl
        name="phone_number"
        value={inputsData.phone_number}
        handleChange={handleChange}
        placeholder="شماره همراه"
      />

      <Flex wrap="wrap" gap={4}>
        <RadioControl
          label="مصرف دارو:"
          value={drugHistory}
          handleChange={handleRadioChange}
          name="drug_hist"
        />
        <RadioControl
          label="سابقه بیماری:"
          value={diseaseHistory}
          handleChange={handleRadioChange}
          name="decease_hist"
        />
      </Flex>

      <InputControl
        name="house_number"
        value={inputsData.house_number}
        handleChange={handleChange}
        placeholder="شماره ثابت"
      />
      <InputControl
        name="address"
        value={inputsData.address}
        handleChange={handleChange}
        placeholder="آدرس منزل"
      />
    </Box>
  );
};

export default RegisterForm;
