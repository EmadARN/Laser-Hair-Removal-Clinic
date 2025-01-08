// import React, { useEffect, useState } from "react";
// import {
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
//   Modal,
//   ModalOverlay,
//   ModalContent,
// } from "@chakra-ui/react";
// import { MdCancel } from "react-icons/md";

// import { FaArrowRight, FaPlus } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { Table, Tbody, Tr, Td } from "@chakra-ui/react";
// import { useCookies } from "react-cookie";
// import {
//   addCustomerWithOutTime,
//   getCutomerList,
// } from "@/features/receptionDashboard/receptionThunks";

// const PatientWithoutTime = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [inputsData, setInputsData] = useState({
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

//   const [drugHistory, setDrugHistory] = useState("false");
//   const [diseaseHistory, setDiseaseHistory] = useState("false");
//   const [step, setStep] = useState(0);

//   const dispatch = useDispatch();
//   const { cutomerList, loading, error } = useSelector(
//     (store) => store.receptionDashboardSlice
//   );

//   const [{ auth_Employee_token }] = useCookies(["auth_Employee_token"]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     console.log("vlueeee", value);

//     setInputsData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleRadioChange = (name, value) => {
//     setInputsData((prev) => ({ ...prev, [name]: value === "true" }));
//     if (name === "drug_hist") setDrugHistory(value);
//     if (name === "decease_hist") setDiseaseHistory(value);
//   };

//   const handleSubmit = () => {
//     dispatch(addCustomerWithOutTime({ ...inputsData, auth_Employee_token }));
//     onClose();
//   };

//   const mdCancelHandler = () => {
//     setStep(0);
//     setInputsData({
//       name: "",

//       last_name: "",
//       phone_number: "",
//       national_code: "",
//       address: "",
//       house_number: "",
//       drug_hist: false,
//       decease_hist: false,
//       doctor: "-",

//       offline_number: 0,
//     });
//     onClose();
//   };

//   const handleRowClick = (item) => {
//     // Get the customer info from customer_list
//     const customer = item;

//     // Find the detailed information for this customer from customer_information_list
//     const customerInfo = cutomerList.customer_information_list.find(
//       (info) => info.user === customer.username
//     );

//     // Combine the data from both lists
//     setInputsData({
//       name: customer.name,
//       last_name: customer.last_name,
//       phone_number: customer.phone_number,
//       national_code: customerInfo ? customerInfo.national_code : "",
//       address: customerInfo ? customerInfo.address : "",
//       house_number: customerInfo ? customerInfo.house_number : "",
//       drug_hist: customerInfo ? customerInfo.drug_hist : false,
//       decease_hist: customerInfo ? customerInfo.decease_hist : false,
//       doctor: customerInfo ? customerInfo.doctor : "-",
//       offline_number: customerInfo ? customerInfo.offline_num : 0,
//     });

//     // Move to step 1 to show the details
//     setStep(1);
//   };

//   useEffect(() => {
//     dispatch(getCutomerList({ auth_Employee_token }));
//   }, [dispatch, auth_Employee_token]);

//   return (
//     <>
//       <Button
//         onClick={onOpen}
//         leftIcon={<FaPlus />}
//         color="brand.400"
//         borderColor="brand.400"
//         w="100%"
//         h="100%"
//         py={3}
//         px={8}
//         variant="outline"
//       >
//         مراجع بین نوبت
//       </Button>

//       <Modal isOpen={isOpen} onClose={mdCancelHandler}>
//         <ModalOverlay />
//         <ModalContent p={6} height="500px" overflowY="scroll">
//           <Box
//             mb={5}
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             <Box gap={3} display="flex" alignItems="center">
//               <FaArrowRight
//                 onClick={() => setStep(0)}
//                 cursor="pointer"
//                 fontSize="17px"
//               />
//               <Text fontWeight="bold">
//                 {step === 0 ? "مراجع بین نوبت" : "مراجع جدید"}
//               </Text>
//             </Box>
//             <MdCancel cursor="pointer" onClick={mdCancelHandler} />
//           </Box>

//           {step === 0 ? (
//             <Box>
//               <Input />
//               <Text
//                 as="button"
//                 mt={4}
//                 onClick={() => setStep(2)}
//                 color="brand.400"
//                 fontWeight="bold"
//               >
//                 +مراجع جدید
//               </Text>
//               <Table
//                 mt={6}
//                 cursor="pointer"
//                 overflowY="scroll"
//                 width="100%"
//                 size="sm"
//                 dir="rtl"
//                 variant="striped"
//               >
//                 <Tbody>
//                   {!loading &&
//                   !error &&
//                   cutomerList &&
//                   cutomerList.customer_list &&
//                   Array.isArray(cutomerList.customer_list)
//                     ? cutomerList.customer_list.map((item) => (
//                         <Tr
//                           key={item.username}
//                           onClick={() => handleRowClick(item)}
//                         >
//                           <Td fontSize={{ base: "12px", md: "16px" }}>
//                             {item.name} {item.last_name}
//                           </Td>
//                           <Td fontSize={{ base: "12px", md: "16px" }}>
//                             {item.phone_number}
//                           </Td>
//                         </Tr>
//                       ))
//                     : error
//                     ? console.log("Error:", error)
//                     : null}
//                 </Tbody>
//               </Table>
//             </Box>
//           ) : step === 1 ? (
//             <Box
//               mb={4}
//               display="flex"
//               flexDirection="column"
//               gap={4}
//               width="100%"
//             >
//               {[
//                 { label: "نام", name: "name" },
//                 { label: "نام خانوادگی", name: "last_name" },
//                 { label: "کد ملی", name: "national_code" },
//                 { label: "شماره همراه", name: "phone_number" },
//                 { label: "شماره ثابت", name: "house_number" },
//                 { label: "آدرس منزل", name: "address" },
//               ].map((field, idx) => (
//                 <Input
//                   key={idx}
//                   name={field.name}
//                   value={inputsData[field.name]}
//                   placeholder={field.label}
//                   size="md"
//                   isReadOnly
//                 />
//               ))}

//               <Flex flexWrap="wrap" gap={4}>
//                 {[
//                   { label: "مصرف دارو", value: drugHistory, name: "drug_hist" },
//                   {
//                     label: "سابقه بیماری",
//                     value: diseaseHistory,
//                     name: "decease_hist",
//                   },
//                 ].map((radio, idx) => (
//                   <FormControl key={idx} as="fieldset" flexBasis="48%">
//                     <FormLabel as="legend">{radio.label}</FormLabel>
//                     <RadioGroup
//                       onChange={(value) => handleRadioChange(radio.name, value)}
//                       value={radio.value}
//                     >
//                       <Stack direction="row">
//                         <Radio value="true">دارد</Radio>
//                         <Radio value="false">ندارد</Radio>
//                       </Stack>
//                     </RadioGroup>
//                   </FormControl>
//                 ))}
//               </Flex>

//               <Button onClick={handleSubmit} w="100%" colorScheme="blue">
//                 تایید اطلاعات و ادامه
//               </Button>
//             </Box>
//           ) : step === 2 ? (
//             <Box
//               mb={4}
//               display="flex"
//               flexDirection="column"
//               gap={4}
//               width="100%"
//             >
//               {[
//                 { label: "نام", name: "name" },
//                 { label: "نام خانوادگی", name: "last_name" },
//                 { label: "کد ملی", name: "national_code" },
//                 { label: "شماره همراه", name: "phone_number" },
//                 { label: "شماره ثابت", name: "house_number" },
//                 { label: "آدرس منزل", name: "address" },
//               ].map((field, idx) => (
//                 <Input
//                   onChange={(e) => handleChange(e)}
//                   key={idx}
//                   name={field.name}
//                   placeholder={field.label}
//                   size="md"
//                 />
//               ))}

//               <Flex flexWrap="wrap" gap={4}>
//                 {[
//                   { label: "مصرف دارو", value: drugHistory, name: "drug_hist" },
//                   {
//                     label: "سابقه بیماری",
//                     value: diseaseHistory,
//                     name: "decease_hist",
//                   },
//                 ].map((radio, idx) => (
//                   <FormControl key={idx} as="fieldset" flexBasis="48%">
//                     <FormLabel as="legend">{radio.label}</FormLabel>
//                     <RadioGroup
//                       onChange={(value) => handleRadioChange(radio.name, value)}
//                       value={radio.value}
//                     >
//                       <Stack direction="row">
//                         <Radio value="true">دارد</Radio>
//                         <Radio value="false">ندارد</Radio>
//                       </Stack>
//                     </RadioGroup>
//                   </FormControl>
//                 ))}
//               </Flex>

//               <Button onClick={handleSubmit} w="100%" colorScheme="blue">
//                 تایید اطلاعات و ادامه
//               </Button>
//             </Box>
//           ) : null}
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default PatientWithoutTime;
import React, { useEffect, useState } from "react";
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
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import {
  addCustomerWithOutTime,
  getCutomerList,
  ReserveReceptionWithOutTime,
  todayDate,
} from "@/features/receptionDashboard/receptionThunks";

const PatientWithoutTime = () => {
  const [{ auth_Employee_token } = cookies] = useCookies();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [inputsData, setInputsData] = useState(initialInputState);
  const [drugHistory, setDrugHistory] = useState("false");
  const [diseaseHistory, setDiseaseHistory] = useState("false");
  const [usernameValue, setUsernameValue] = useState("");
  const [step, setStep] = useState(0);
  const [commonUsers, setCommonUsers] = useState([]);

  const dispatch = useDispatch();
  const { cutomerList, todayReserve, loading, error } = useSelector(
    (store) => store.receptionDashboardSlice
  );

  useEffect(() => {
    if (!todayReserve?.all_list || !cutomerList?.customer_list) return;

    const usersTodayReserve = todayReserve.all_list
      .filter((item) => item?.user)
      .map((item) => item.user);

    const usersCutomerList = cutomerList.customer_list
      .filter((item) => item?.username)
      .map((item) => item.username);

    // پیدا کردن مقادیر مشابه
    const common = usersTodayReserve.filter((user) =>
      usersCutomerList.includes(user)
    );
    setCommonUsers(common);
  }, [auth_Employee_token, todayReserve, cutomerList]);

  const filteredList =
    cutomerList?.customer_list?.filter((item) =>
      commonUsers.includes(item.username)
    ) || [];

  useEffect(() => {
    dispatch(getCutomerList({ auth_Employee_token }));
    dispatch(todayDate({ auth_Employee_token }));
  }, [dispatch, auth_Employee_token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputsData((prev) => ({ ...prev, [name]: value }));
  };

  const patientWithoutTimeHandleChange = (e) => {
    setUsernameValue(e.target.value);
  };

  const handleRadioChange = (name, value) => {
    setInputsData((prev) => ({ ...prev, [name]: value === "true" }));
    if (name === "drug_hist") setDrugHistory(value);
    if (name === "decease_hist") setDiseaseHistory(value);
  };

  const handleSubmit = () => {
    dispatch(addCustomerWithOutTime({ ...inputsData, auth_Employee_token }));
    resetForm();
  };

  const acceptPhoneNumber = () => {
    dispatch(
      ReserveReceptionWithOutTime({ usernameValue, auth_Employee_token })
    );
  };

  const resetForm = () => {
    setStep(0);
    setInputsData(initialInputState);
    onClose();
  };

  const handleRowClick = (item) => {
    const customerInfo = cutomerList.customer_information_list.find(
      (info) => info.user === item.username
    );
    setInputsData({
      ...initialInputState,
      ...item,
      ...customerInfo,
      drug_hist: customerInfo?.drug_hist || false,
      decease_hist: customerInfo?.decease_hist || false,
    });
    setStep(1);
  };

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return renderCustomerList();
      case 1:
        return renderCustomerDetails(true);
      case 2:
        return renderCustomerDetails(false);
      default:
        return null;
    }
  };

  const renderCustomerList = () => (
    <Box>
      <Flex gap={2}>
        <Input
          value={usernameValue}
          placeholder="شماره همراه"
          size="md"
          onChange={patientWithoutTimeHandleChange}
        />
        <Button onClick={acceptPhoneNumber}>ثپت</Button>
      </Flex>
      <Text
        as="button"
        mt={4}
        onClick={() => setStep(2)}
        color="brand.400"
        fontWeight="bold"
      >
        +مراجع جدید
      </Text>
      <Table
        mt={6}
        cursor="pointer"
        width="100%"
        size="sm"
        dir="rtl"
        variant="striped"
      >
        <Tbody>
          {filteredList.map((item) => (
            <Tr key={item.username} onClick={() => handleRowClick(item)}>
              <Td fontSize={{ base: "12px", md: "16px" }}>
                {item.name} {item.last_name}
              </Td>
              <Td fontSize={{ base: "12px", md: "16px" }}>
                {item.phone_number}
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
          value={inputsData[name]}
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
      <Button onClick={handleSubmit} w="100%" colorScheme="blue">
        تایید اطلاعات و ادامه
      </Button>
    </Box>
  );

  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<FaPlus />}
        w="100%"
        py={3}
        px={8}
        variant="outline"
        color="brand.400"
        borderColor="brand.400"
      >
        مراجع بین نوبت
      </Button>
      <Modal isOpen={isOpen} onClose={resetForm} size="lg">
        <ModalOverlay />
        <ModalContent p={6} height="500px" overflowY="scroll">
          <Box
            mb={5}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Flex alignItems="center">
              <FaArrowRight
                onClick={() => setStep(0)}
                cursor="pointer"
                fontSize="17px"
              />
              <Text fontWeight="bold">
                {step === 0 ? "مراجع بین نوبت" : "مراجع جدید"}
              </Text>
            </Flex>
            <MdCancel cursor="pointer" onClick={resetForm} />
          </Box>
          {renderStepContent()}
        </ModalContent>
      </Modal>
    </>
  );
};

const initialInputState = {
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
};

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

export default PatientWithoutTime;
