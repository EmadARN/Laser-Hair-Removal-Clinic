import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import StepperPrototype from "../stepper/Stepper";
import TitleUserDashboard from "@/Common/titleUserDashboard/TitleUserDashboard";
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
  const [cookies, setCookie] = useCookies([
    "reserveId",
    "auth_token",
    "timeList",
  ]);
  const [selectedDateId, setSelectedDateId] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const dispatch = useDispatch();
  const { userReserveId, timeList, loading, error, reserveInformation } =
    useSelector((store) => store.customerDashboard);

  const { page } = useSelector((store) => store.steper);

  const tokenAuth = cookies.auth_token;

  // بازیابی reserveId از کوکی
  const reserveId = cookies.reserveId || null;

  useEffect(() => {
    if (userReserveId) {
      setCookie("reserveId", JSON.stringify(userReserveId), {
        path: "/",
        maxAge: 3600,
      });
    }
  }, [userReserveId, setCookie]);

  useEffect(() => {
    if (timeList) {
      setCookie("timeList", timeList, {
        path: "/",
        maxAge: 3600,
      });
    }
  }, [timeList, setCookie]);

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
        title: " موفقیت‌آمیز",
        description: " اطلاعات با موفقیت ثبت شد",
        status: "success",
      });
    } else {
      showToast({
        title: "خطا ",
        description: "خطا در ثبت اطلاعات ",
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
      <StepperPrototype page={page} onCompleteStep={handleCompleteStep} />
      <TitleUserDashboard />

      <Date
        error={error}
        loading={loading}
        reserveInformation={reserveInformation}
        timeList={timeList}
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
