// import React, { useState } from "react";
// import {
//   Grid,
//   Box,
//   Text,
//   Input,
//   Button,
//   useDisclosure,
//   RadioGroup,
//   Stack,
//   Radio,
//   FormControl,
//   FormLabel,
//   Flex,
// } from "@chakra-ui/react";
// import { MdCancel } from "react-icons/md";
// import { firstGrid, firstBox, seccondBox } from "./style";
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
// } from "@chakra-ui/react";
// import { FaPlus } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { addCustomerWithOutTime } from "@/features/receptionDashboard/receptionDashboardSlice";

// const PatientWithoutTime = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const [inputsData, setinputsData] = useState({
//     name: "",
//     last_name: "",
//     phone_number: "",
//     national_code: "",
//     address: "",
//     house_number: "",
//     drug_hist: false,
//     decease_hist: false,
//     doctor: "-",
//     offline_number: 0,
//   });

//   const dispatch = useDispatch();

//   const { token } = useSelector((store) => store.adminDashboard);

//   // استیت برای مدیریت انتخاب Radio Button ها
//   const [drugHistory, setDrugHistory] = useState("fasle");
//   const [diseaseHistory, setDiseaseHistory] = useState("fasle");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setinputsData((prev) => ({ ...prev, [name]: value }));
//   };
//   const handleRadioChange = (name, value) => {
//     setinputsData((prev) => ({ ...prev, [name]: value === "true" }));
//     if (name === "drug_hist") setDrugHistory(value);
//     if (name === "decease_hist") setDiseaseHistory(value);
//   };
//   console.log("inputsData:", inputsData);

//   const handleSubmit = () => {
//     dispatch(
//       addCustomerWithOutTime({
//         ...inputsData,
//         token,
//       })
//     );
//     onClose();
//   };

//   return (
//     <>
//       <Button
//         onClick={onOpen}
//         leftIcon={<FaPlus />}
//         sx={{
//           color: "blue",
//           w: "100%",
//           h: "100%",
//           py: 3,
//           px: 8,
//         }}
//         variant="outline"
//         colorScheme={"blue"}
//       >
//         مراجع بین نوبت
//       </Button>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent p={6}>
//           <Box sx={firstBox}>
//             <Text fontWeight={"bold"}>مراجع جدید</Text>
//             <MdCancel cursor={"pointer"} onClick={onClose} />
//           </Box>

//           <Box
//             mb={4}
//             display={"flex"}
//             flexDirection={"column"}
//             gap={8}
//             width={"100%"}
//           >
//             <Input
//               onChange={handleChange}
//               name="name"
//               placeholder="نام "
//               size="md"
//             />
//             <Input
//               onChange={handleChange}
//               name="last_name"
//               placeholder=" نام خانوادگی"
//               size="md"
//             />
//             <Input
//               onChange={handleChange}
//               name="national_code"
//               placeholder=" کد ملی"
//               size="md"
//             />
//             <Input
//               onChange={handleChange}
//               name="phone_number"
//               placeholder=" شماره همراه"
//               size="md"
//             />

//             <Flex sx={{ flexWrap: "wrap" }}>
//               <FormControl as="fieldset" sx={{ flexBasis: 200, flexGrow: 1 }}>
//                 <FormLabel as="legend">مصرف دارو:</FormLabel>
//                 <RadioGroup
//                   onChange={(value) => handleRadioChange("drug_hist", value)}
//                   value={drugHistory}
//                 >
//                   <Stack direction="row">
//                     <Radio value="true">دارد</Radio>
//                     <Radio value="false">ندارد</Radio>
//                   </Stack>
//                 </RadioGroup>
//               </FormControl>

//               <FormControl as="fieldset" sx={{ flexBasis: 200, flexGrow: 1 }}>
//                 <FormLabel as="legend">سابقه بیماری:</FormLabel>
//                 <RadioGroup
//                   onChange={(value) => handleRadioChange("decease_hist", value)}
//                   value={diseaseHistory}
//                 >
//                   <Stack direction="row">
//                     <Radio value="true">دارد</Radio>
//                     <Radio value="false">ندارد</Radio>
//                   </Stack>
//                 </RadioGroup>
//               </FormControl>
//             </Flex>
//             <Input
//               onChange={handleChange}
//               name="house_number"
//               placeholder=" شماره ثابت"
//               size="md"
//             />
//             <Input
//               onChange={handleChange}
//               name="address"
//               placeholder="ادرس منزل"
//               size="md"
//             />
//           </Box>

//           <Box width={"100%"} mt={"4"}>
//             <Button onClick={handleSubmit} width={"100%"}>
//               تایید اطلاعات و ادامه
//             </Button>
//           </Box>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default PatientWithoutTime;
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

const PatientWithoutTime = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.adminDashboard);

  const [inputsData, setInputsData] = useState({
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
    dispatch(addCustomerWithOutTime({ ...inputsData, token }));
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
