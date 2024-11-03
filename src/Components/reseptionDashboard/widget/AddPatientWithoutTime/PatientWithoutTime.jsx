import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  useDisclosure,
  RadioGroup,
  Stack,
  Radio,
  FormControl,
  FormLabel,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerWithOutTime } from "@/features/receptionDashboard/receptionDashboardSlice";
import { useCookies } from "react-cookie";

const PatientWithoutTime = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [{ auth_Employee_token } = cookies, setCookie] = useCookies([
    "auth_Employee_token",
  ]);

  const [inputsData, setInputsData] = useState({
    username: "",
    password: "",
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
    last_date: "",
  });

  const [drugHistory, setDrugHistory] = useState("fasle");
  const [diseaseHistory, setDiseaseHistory] = useState("fasle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputsData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name, value) => {
    setInputsData((prev) => ({ ...prev, [name]: value === "true" }));
    if (name === "drug_hist") setDrugHistory(value);
    if (name === "decease_hist") setDiseaseHistory(value);
  };

  const handleSubmit = () => {
    dispatch(addCustomerWithOutTime({ ...inputsData, auth_Employee_token }));
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<FaPlus />}
        colorScheme="blue"
        w="100%"
        h="100%"
        py={3}
        px={8}
        variant="outline"
      >
        مراجع بین نوبت
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={6}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontWeight="bold">مراجع جدید</Text>
            <MdCancel cursor="pointer" onClick={onClose} />
          </Box>

          <Box
            mb={4}
            display="flex"
            flexDirection="column"
            gap={4}
            width="100%"
          >
            {[
              "name",
              "last_name",
              "national_code",
              "phone_number",
              "house_number",
              "address",
            ].map((field, idx) => (
              <Input
                key={idx}
                onChange={handleChange}
                name={field}
                placeholder={
                  field === "name"
                    ? "نام"
                    : field === "last_name"
                    ? "نام خانوادگی"
                    : field === "national_code"
                    ? "کد ملی"
                    : field === "phone_number"
                    ? "شماره همراه"
                    : field === "house_number"
                    ? "شماره ثابت"
                    : "آدرس منزل"
                }
                size="md"
              />
            ))}

            <Flex flexWrap="wrap" gap={4}>
              {[
                {
                  label: "مصرف دارو",
                  value: drugHistory,
                  name: "drug_hist",
                  setState: setDrugHistory,
                },
                {
                  label: "سابقه بیماری",
                  value: diseaseHistory,
                  name: "decease_hist",
                  setState: setDiseaseHistory,
                },
              ].map((radio, idx) => (
                <FormControl key={idx} as="fieldset" flexBasis="48%">
                  <FormLabel as="legend">{radio.label}</FormLabel>
                  <RadioGroup
                    onChange={(value) => handleRadioChange(radio.name, value)}
                    value={radio.value}
                  >
                    <Stack direction="row">
                      <Radio value="true">دارد</Radio>
                      <Radio value="false">ندارد</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              ))}
            </Flex>
          </Box>

          <Button onClick={handleSubmit} w="100%" colorScheme="blue">
            تایید اطلاعات و ادامه
          </Button>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PatientWithoutTime;
