import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { useCustomToast } from "@/utils/useCustomToast ";
import { postAsyncCode, postAsyncNumber } from "@/features/signin/authSlice";

const useVerificationCode = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inputCode, setInputCode] = useState(["", "", "", "", "", ""]);
  const [time, setTime] = useState(90);

  const { showToast } = useCustomToast();
  const [cookies, setCookie] = useCookies(["auth_token"]);
  const router = useRouter();
  const dispatch = useDispatch();

  //Timer
  useEffect(() => {
    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    if (storedPhoneNumber) {
      setPhoneNumber(storedPhoneNumber);
    }

    if (time > 0) {
      const timer = setInterval(
        () => setTime((prevTime) => prevTime - 1),
        1000
      );
      return () => clearInterval(timer);
    }

    // زمانی که تایمر به صفر می‌رسد، کد جدید را ارسال کن
    if (time === 0) {
      dispatch(postAsyncNumber({ phone_number: phoneNumber }));
      setTime(90); // بازنشانی تایمر به ۹۰ ثانیه
    }
  }, [time, phoneNumber, dispatch]);

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
    setTime,
    handleCodeSubmit,
  };
};

export default useVerificationCode;
