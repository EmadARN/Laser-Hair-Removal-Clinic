import React, { useEffect } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import {
  getCutomerList,
  todayDate,
} from "@/features/receptionDashboard/receptionThunks";
import PatientwithouttimeModal from "./ui/modal/modalLayout/PatientwithouttimeModal";
import useCommonUsers from "./logic/useCommonUsers";
import useReceptionAPI from "./logic/useReceptionAPI";
import useFormManagement from "./logic/useFormManagement";
import ModalStepDetail from "./ui/modal/modalStepsDetail/modalStepsDetail";

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

const PatientWithoutTime = () => {
  const [{ auth_Employee_token } = cookies] = useCookies();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCutomerList({ auth_Employee_token }));
    dispatch(todayDate({ auth_Employee_token }));
  }, [dispatch, auth_Employee_token]);

  //custom hook:
  //onChanges & resetForms handler
  const {
    inputsData,
    setInputsData,
    usernameValue,
    setUsernameValue,
    step,
    setStep,
    resetForm,
    handleChange,
    handleRadioChange,
    patientWithoutTimeHandleChange,
  } = useFormManagement(onClose, initialInputState);

  // Filterd common userName
  const { filteredList, handleRowClick, loading, cutomerList } = useCommonUsers(
    setInputsData,
    setStep,
    initialInputState
  );

  // handleSubmitForm & acceptNumberInput
  const { acceptPhoneNumber, handleSubmit } = useReceptionAPI({
    inputsData,
    usernameValue,
    resetForm,
    setUsernameValue,
    auth_Employee_token,
    dispatch,
  });

  //handle modal details
  const { renderCustomerDetails, renderCustomerList } = ModalStepDetail(
    handleRowClick,
    setStep,
    acceptPhoneNumber,
    handleSubmit,
    handleChange,
    patientWithoutTimeHandleChange,
    handleRadioChange,
    filteredList,
    inputsData,
    usernameValue,
    handleChange,
    handleRadioChange,
    handleRowClick,
    loading,
    cutomerList
  );

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return renderCustomerList();
      case 1:
        return renderCustomerDetails(true);
      case 2:
        return renderCustomerDetails();
      default:
        return null;
    }
  };

  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<FaPlus />}
        w={{ base: "60%", lg: "100%" }}
        py={3}
        px={{ base: 10, md: 8 }}
        variant="outline"
        color="brand.400"
        borderColor="brand.400"
        fontSize={{ base: "12px", sm: "15px" }}
      >
        مراجع بین نوبت
      </Button>
      <PatientwithouttimeModal
        renderStepContent={renderStepContent}
        initialInputState={initialInputState}
        step={step}
        setInputsData={setInputsData}
        setStep={setStep}
        resetForm={resetForm}
        isOpen={isOpen}
      />
    </>
  );
};

export default PatientWithoutTime;
