import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import CustomButton from "@/Common/customeButton/CustomeButton";

const formFields = [
  { label: "نام", name: "name" },
  { label: "نام خانوادگی", name: "last_name" },
  { label: "کد ملی", name: "national_code" },
  { label: "شماره همراه", name: "phone_number" },
  { label: "شماره ثابت", name: "house_number" },
  { label: "آدرس منزل", name: "address" },
];

const radioFields = [
  { label: "مصرف دارو", name: "drug_hist" },
  { label: "سابقه بیماری", name: "decease_hist" },
];

const ModalStepDetail = (
  handleRowClick,
  setStep,
  acceptPhoneNumber,
  handleSubmit,
  handleChange,
  patientWithoutTimeHandleChange,
  handleRadioChange,
  filteredList = [],
  inputsData = {},
  usernameValue = ""
) => {
  const renderCustomerList = () => (
    <Box>
      <Flex gap={2}>
        <Input
          value={usernameValue}
          placeholder="شماره همراه"
          size="md"
          onChange={patientWithoutTimeHandleChange}
        />
        <Button onClick={acceptPhoneNumber}>ثبت</Button>
      </Flex>
      <Box>
        <Text
          as="button"
          mt={4}
          onClick={() => {
            setStep(2);
          }}
          color="brand.400"
          fontWeight="bold"
        >
          +مراجع جدید
        </Text>
      </Box>
      <Table
        mt={6}
        cursor="pointer"
        width="100%"
        size="sm"
        dir="rtl"
        variant="striped"
      >
        <Tbody>
          {filteredList.map((item, idx) => (
            <Tr key={idx} onClick={() => handleRowClick(item)}>
              <Td fontSize={{ base: "12px", md: "16px" }}>
                {item.name || "-"} {item.last_name || "-"}
              </Td>
              <Td fontSize={{ base: "12px", md: "16px" }}>
                {item.phone_number || "-"}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );

  const renderCustomerDetails = (isReadOnly) => (
    <Box mb={4} display="flex" flexDirection="column" gap={4} width="100%">
      {formFields.map(({ label, name }, idx) => (
        <Input
          key={idx}
          name={name}
          value={inputsData[name] || ""}
          placeholder={label}
          size="md"
          isReadOnly={isReadOnly}
          onChange={!isReadOnly ? handleChange : undefined}
        />
      ))}
      <Flex flexWrap="wrap" gap={4}>
        {radioFields.map(({ label, name }, idx) => (
          <FormControl key={idx} as="fieldset" flexBasis="48%">
            <FormLabel as="legend">{label}</FormLabel>
            <RadioGroup
              onChange={(value) => handleRadioChange(name, value)}
              value={inputsData[name] ? "true" : "false"}
            >
              <Stack direction="row">
                <Radio value="true">دارد</Radio>
                <Radio value="false">ندارد</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
        ))}
      </Flex>
      <CustomButton
        onClick={handleSubmit}
        w="100%"
        colorScheme="blue"
        display={isReadOnly && "none"}
      >
        تایید اطلاعات و ادامه
      </CustomButton>
    </Box>
  );

  return { renderCustomerList, renderCustomerDetails };
};

export default ModalStepDetail;
