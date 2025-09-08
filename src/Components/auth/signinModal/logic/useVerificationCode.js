import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { postAsyncCode, postAsyncNumber } from "@/features/signin/authSlice";
import { useCustomToast } from "@/utils/useCustomToast ";

const useVerificationCode = (page) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inputCode, setInputCode] = useState(["", "", "", "", "", ""]);
  const [time, setTime] = useState(null);
  const [hasResent, setHasResent] = useState(false);

  const { showToast } = useCustomToast();
  const [cookies, setCookie] = useCookies(["auth_token"]);
  const router = useRouter();
  const dispatch = useDispatch();

  // گرفتن شماره از localStorage
  useEffect(() => {
    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    if (storedPhoneNumber) {
      setPhoneNumber(storedPhoneNumber);
    }
  }, []);

  // ✅ هر بار که کاربر وارد استپ دوم میشه تایمر از اول شروع بشه
  useEffect(() => {
    if (page === 1) {
      setTime(90);
      setHasResent(false);
    }
  }, [page]);

  // تایمر
  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => setTime((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }

    if (time === 0 && !hasResent) {
      dispatch(postAsyncNumber({ phone_number: phoneNumber }));
      setHasResent(true);
      setTime(null);
    }
  }, [time, phoneNumber, dispatch, hasResent]);

  // ارسال مجدد کد
  const handleResend = () => {
    dispatch(postAsyncNumber({ phone_number: phoneNumber }));
    setTime(90);
    setHasResent(false);
  };

  // ثبت کد
  const handleCodeSubmit = async () => {
    const newCodeValue = inputCode.join("");
    if (!newCodeValue) return;

    const result = await dispatch(
      postAsyncCode({
        phone_number: phoneNumber,
        code: newCodeValue,
        router: router.pathname,
      })
    );

    if (result.meta.requestStatus === "fulfilled") {
      showToast({
        title: "ورود موفقیت‌آمیز",
        description: "به داشبورد هدایت شدید.",
        status: "success",
      });
      router.push("/userDashboard");
      if (result.payload.token) {
        setCookie("auth_token", result.payload.token, { path: "/" });
      }
    } else {
      showToast({
        title: "خطا ",
        description: "ورود ناموفق",
        status: "error",
      });
    }
    setInputCode(["", "", "", "", "", ""]);
  };

  return {
    phoneNumber,
    inputCode,
    setInputCode,
    time,
    handleResend,
    handleCodeSubmit,
  };
};

export default useVerificationCode;
