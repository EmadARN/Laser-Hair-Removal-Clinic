import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAsyncNumber } from "@/features/signin/authSlice";

const useVerificationNumber = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.signin);

  const handlePhoneNumberSubmit = async (values) => {
    const { phone_number } = values;
    localStorage.setItem("phoneNumber", phone_number);
    const result = await dispatch(postAsyncNumber({ phone_number }));

    if (result.meta.requestStatus === "fulfilled") {
      setPage(page + 1);
    }
  };

  return {
    page,
    setPage,
    handlePhoneNumberSubmit,
    loading,
  };
};

export default useVerificationNumber;
