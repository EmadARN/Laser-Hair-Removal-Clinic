import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
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
      <FormControl mb={4}>
        <FormLabel>نام</FormLabel>
        <Input
          name="name"
          value={inputsData.name}
          onChange={handleChange}
          placeholder="نام"
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>نام خانوادگی</FormLabel>
        <Input
          name="last_name"
          value={inputsData.last_name}
          onChange={handleChange}
          placeholder="نام خانوادگی"
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>کد ملی</FormLabel>
        <Input
          name="national_code"
          value={inputsData.national_code}
          onChange={handleChange}
          placeholder="کد ملی"
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>شماره همراه</FormLabel>
        <Input
          name="phone_number"
          value={inputsData.phone_number}
          onChange={handleChange}
          placeholder="شماره همراه"
        />
      </FormControl>

      <Flex wrap="wrap" gap={4}>
        <FormControl as="fieldset" flex="1 1 200px" mb={4}>
          <FormLabel as="legend">مصرف دارو:</FormLabel>
          <RadioGroup
            value={drugHistory}
            onChange={(value) => handleRadioChange("drug_hist", value)}
          >
            <Stack direction="row">
              <Radio value="true">دارد</Radio>
              <Radio value="false">ندارد</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl as="fieldset" flex="1 1 200px" mb={4}>
          <FormLabel as="legend">سابقه بیماری:</FormLabel>
          <RadioGroup
            value={diseaseHistory}
            onChange={(value) => handleRadioChange("decease_hist", value)}
          >
            <Stack direction="row">
              <Radio value="true">دارد</Radio>
              <Radio value="false">ندارد</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      </Flex>

      <FormControl mb={4}>
        <FormLabel>شماره ثابت</FormLabel>
        <Input
          name="house_number"
          value={inputsData.house_number}
          onChange={handleChange}
          placeholder="شماره ثابت"
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>آدرس منزل</FormLabel>
        <Input
          name="address"
          value={inputsData.address}
          onChange={handleChange}
          placeholder="آدرس منزل"
        />
      </FormControl>
      {/* <AccordionMenu /> */}
    </Box>
  );
};

export default RegisterForm;
