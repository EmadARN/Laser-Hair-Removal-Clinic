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
import ModalStepDetail from "./ui/modal/modalStepsDetail/Index";
import useCommonUsers from "./logic/useCommonUsers";
import useReceptionAPI from "./logic/useReceptionAPI";
import useFormManagement from "./logic/useFormManagement";

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
  const { filteredList, handleRowClick } = useCommonUsers(
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
    usernameValue
  );

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return renderCustomerList();
      case 1:
        return renderCustomerDetails(true);
     
      default:
        return null;
    }
  };

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
      <PatientwithouttimeModal
        renderStepContent={renderStepContent}
        step={step}
        setStep={setStep}
        resetForm={resetForm}
        isOpen={isOpen}
      />
    </>
  );
};

export default PatientWithoutTime;
