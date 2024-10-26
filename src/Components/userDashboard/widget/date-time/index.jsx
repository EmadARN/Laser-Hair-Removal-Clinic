import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import StepperPrototype from "../stepper/Stepper";
import TitleUserDashboard from "@/Common/titleUserDashboard/TitleUserDashboard";
import Date from "./Date";
import { AcceptBtn } from "../acceptBtn/AcceptBtn";
import { useFetchReserveInformation } from "@/hooks/userDashboard/useFetchReserveInformation";
import {
  getreserveInformation,
  getTimeList,
} from "@/features/customerDashboard/customerDashboardSlice";

const Date_Time = ({ page, setPage, slug }) => {
  const { token } = useSelector((store) => store.signin);
  const [cookies, setCookie] = useCookies(["reserveId"]);
  const dispatch = useDispatch();
  const { userReserveId, timeList, loading, error } = useSelector(
    (store) => store.customerDashboard
  );
  console.log("userReserveId:", userReserveId);
  console.log("timeList:", timeList);

  useEffect(() => {
    if (userReserveId) {
      setCookie("reserveId", JSON.stringify(userReserveId), {
        path: "/",
        maxAge: 3600, // زمان انقضا به ثانیه (اینجا یک ساعت)
        // secure: true,
        // sameSite: "strict",
      });
    }
  }, [userReserveId, setCookie]);

  // بازیابی reserveId از کوکی
  const reserveId = cookies.reserveId || null;
  useEffect(() => {
    if (reserveId) {
      dispatch(getTimeList({ token, reserveId }));
    }
  }, [reserveId, token, dispatch]);

  useEffect(() => {
    if (reserveId) {
      dispatch(getreserveInformation({ token, reserveId }));
    }
  }, [reserveId, token, dispatch]);

  return (
    <>
      <StepperPrototype />
      <TitleUserDashboard page={page} setPage={setPage} />
      <Date />
      <AcceptBtn
        page={page}
        setPage={setPage}
        slug={slug}
        text="ادامه"
        bgColor={"white"}
      />
    </>
  );
};

export default Date_Time;
