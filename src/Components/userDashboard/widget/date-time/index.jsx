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

const Date_Time = ({ page, setPage, slug }) => {
  const [cookies, setCookie] = useCookies([
    "reserveId",
    "auth_token",
    "timeList",
  ]);
  const [selectedDateId, setSelectedDateId] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  // console.log("selectedDateId:",  selectedDateId);
  // console.log("selectedSlot:",  JSON.stringify(selectedSlot));

  const dispatch = useDispatch();
  const { userReserveId, timeList, loading, error } = useSelector(
    (store) => store.customerDashboard
  );

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

  const submitHandler = () => {
    dispatch(postAddTime({ tokenAuth, selectedDateId, selectedSlot }));
  };
  return (
    <>
      <StepperPrototype />
      <TitleUserDashboard page={page} setPage={setPage} />
      <Date
        timeList={timeList}
        selectedDateId={selectedDateId}
        setSelectedDateId={setSelectedDateId}
        selectedSlot={selectedSlot}
        setSelectedSlot={setSelectedSlot}
      />
      <AcceptBtn
        page={page}
        setPage={setPage}
        slug={slug}
        text="ادامه"
        bgColor={"white"}
        submitHandler={submitHandler}
      />
    </>
  );
};

export default Date_Time;
