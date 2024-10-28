import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import StepperPrototype from "../stepper/Stepper";
import TitleUserDashboard from "@/Common/titleUserDashboard/TitleUserDashboard";
import { AcceptBtn } from "../acceptBtn/AcceptBtn";
import {
  getreserveInformation,
  getTimeList,
} from "@/features/customerDashboard/customerDashboardSlice";
import Date from "./widget/Date";

const Date_Time = ({ page, setPage, slug }) => {
  const [cookies, setCookie] = useCookies([
    "reserveId",
    "auth_token",
    "timeList",
  ]);

  const dispatch = useDispatch();
  const { userReserveId, timeList, loading, error ,reserveInformation} = useSelector(
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

  return (
    <>
      <StepperPrototype />
      <TitleUserDashboard page={page} setPage={setPage} />
      <Date error={error} loading={loading} reserveInformation={reserveInformation} timeList={timeList} />
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
