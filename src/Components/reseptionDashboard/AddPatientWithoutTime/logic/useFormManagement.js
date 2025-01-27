import { useState } from "react";

const useFormManagement = (onClose, initialInputState) => {
  const [inputsData, setInputsData] = useState(initialInputState);
  const [usernameValue, setUsernameValue] = useState("");
  const [step, setStep] = useState(0);
  const resetForm = () => {
    setInputsData(initialInputState);
    setStep(0);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputsData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name, value) => {
    setInputsData((prev) => ({ ...prev, [name]: value === "true" }));
  };
  const patientWithoutTimeHandleChange = (e) => {
    setUsernameValue(e.target.value);
  };

  return {
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

  };
};

export default useFormManagement;
