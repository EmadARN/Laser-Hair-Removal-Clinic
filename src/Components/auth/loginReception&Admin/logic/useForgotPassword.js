import { useState } from "react";
import { changeUserInfo, forgotPassword } from "@/features/signin/authSlice";
import { useCustomToast } from "@/utils/useCustomToast ";

export const useForgotPassword = (dispatch, onClose) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    code: "",
    newPassword: "",
  });

  const { showToast } = useCustomToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (step === 0 && formData.username) {
      dispatch(forgotPassword({ username: formData.username }));
      setStep(1);
      showToast({
        title: "نام کاربری ثبت شد",
        status: "success",
      });
    } else if (step === 1 && formData.code && formData.newPassword) {
      dispatch(
        changeUserInfo({
          username: formData.username,
          code: formData.code,
          password: formData.newPassword,
        })
      );
      showToast({
        title: "رمز عبور با موفقیت تغییر یافت",
        status: "success",
      });
      onClose();
    }
  };

  return {
    step,
    formData,
    handleInputChange,
    handleNextStep,
  };
};
