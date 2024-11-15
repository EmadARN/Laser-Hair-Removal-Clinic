import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import StepperPrototype from "../stepper/Stepper";
import TitleUserDashboard from "@/Common/titleUserDashboard/TitleUserDashboard";
import { nextStep } from "@/features/steper/stepSlice";
import { AcceptBtn } from "../acceptBtn/AcceptBtn";
import {
  getreserveInformation,
  getTimeList,
  postAddTime,
} from "@/features/customerDashboard/customerDashboardSlice";
import Date from "./widget/Date";
import { useCustomToast } from "@/utils/useCustomToast ";

const Date_Time = ({ slug }) => {
  const { showToast } = useCustomToast();
  const [cookies] = useCookies(["auth_token"]);
  const [selectedDateId, setSelectedDateId] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [storedTimeList, setStoredTimeList] = useState(null);

  const dispatch = useDispatch();
  const { userReserveId, timeList, loading, error, reserveInformation } =
    useSelector((store) => store.customerDashboard);

  const tokenAuth = cookies.auth_token;
  const reserveId = localStorage.getItem("reserveId");

  // ذخیره‌سازی اطلاعات در localStorage هنگام تغییر زمان‌بندی یا reserveId
  useEffect(() => {
    if (timeList) {
      localStorage.setItem("timeList", JSON.stringify(timeList));
    }
    if (userReserveId) {
      localStorage.setItem("reserveId", userReserveId);
    }
  }, [timeList, userReserveId]);

  // بازیابی اطلاعات هنگام بارگذاری کامپوننت
  useEffect(() => {
    if (reserveId && tokenAuth) {
      dispatch(getTimeList({ tokenAuth, reserveId }));
      dispatch(getreserveInformation({ tokenAuth, reserveId }));
    }
  }, [reserveId, tokenAuth, dispatch]);

  const submitHandler = async () => {
    const result = await dispatch(
      postAddTime({ tokenAuth, selectedDateId, selectedSlot })
    );

    if (result.meta.requestStatus === "fulfilled") {
      showToast({
        title: "موفقیت‌آمیز",
        description: "اطلاعات با موفقیت ثبت شد",
        status: "success",
      });
    } else {
      showToast({
        title: "خطا",
        description: "خطا در ثبت اطلاعات",
        status: "error",
      });
    }
  };

  const handleCompleteStep = () => {
    dispatch(nextStep());
    console.log("مرحله کامل شد!");
  };

  return (
    <>
      <StepperPrototype onCompleteStep={handleCompleteStep} />
      <TitleUserDashboard />
      <Date
        error={error}
        loading={loading}
        reserveInformation={reserveInformation}
        timeList={timeList || storedTimeList}
        selectedDateId={selectedDateId}
        setSelectedDateId={setSelectedDateId}
        selectedSlot={selectedSlot}
        setSelectedSlot={setSelectedSlot}
      />
      <AcceptBtn
        slug={slug}
        text="ادامه"
        bgColor={"white"}
        submitHandler={submitHandler}
        onNextStep={handleCompleteStep}
      />
    </>
  );
};

export default Date_Time;
