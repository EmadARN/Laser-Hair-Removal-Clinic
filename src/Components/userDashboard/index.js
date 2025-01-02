import React, { useEffect, useState } from "react";
import DashboardLayout from "./DashboardLayout";

import { useDispatch, useSelector } from "react-redux";

import { useCookies } from "react-cookie";
import Session_Records from "./widgetForRecords/Session-Records";
import SessionRecordDetails from "./widgetForRecords/SessionRecordDetails";
import NavBar from "@/Layout/navbar/NavBar";
import { getSessionRecords } from "@/features/customerDashboard/customerThunks";
import { setSteperState } from "@/features/dashboardSteper/dashboardSlice";

const Dashboard = () => {

  const { steperState } = useSelector((store) => store.dashboardSteper);

  const [phoneNumber, setPhoneNumber] = useState();

  const [{ auth_token }] = useCookies(["auth_token"]);

  useEffect(() => setPhoneNumber(localStorage.getItem("phoneNumber")), []);

  const dispatch = useDispatch();

  const sessionRecordClick = () => {
    dispatch(setSteperState(steperState + 1));
    dispatch(getSessionRecords({ phoneNumber, auth_token }));
  };

  if (steperState === 0) {
    return <DashboardLayout sessionRecordClick={sessionRecordClick} />;
  } else if (steperState === 1) {
    return (
      <Session_Records
        dispatch={dispatch}
        steperState={steperState}
        setSteperState={setSteperState}
      />
    );
  } else if (steperState === 2) {
    return (
      <>
        <NavBar bgColor="#ffffff" />
        <SessionRecordDetails
          dispatch={dispatch}
          setSteperState={setSteperState}
        />
      </>
    );
  }
};

export default Dashboard;
