import React, { useEffect, useState } from "react";
import DashboardLayout from "./DashboardLayout";
import { useDashboardContext } from "@/context/DashboardContext";
import { useDispatch } from "react-redux";
import { getSessionRecords } from "@/features/customerDashboard/customerDashboardSlice";
import { useCookies } from "react-cookie";
import Session_Records from "./widgetForRecords/Session-Records";
import SessionRecordDetails from "./widgetForRecords/SessionRecordDetails";
import NavBar from "@/Layout/navbar/NavBar";

const Dashboard = () => {
  const { steperState, setSteperState } = useDashboardContext();

  const [phoneNumber, setPhoneNumber] = useState();

  const [{ auth_token }] = useCookies(["auth_token"]);

  useEffect(() => setPhoneNumber(localStorage.getItem("phoneNumber")), []);

  const dispatch = useDispatch();

  const sessionRecordClick = () => {
    setSteperState(steperState + 1);
    dispatch(getSessionRecords({ phoneNumber, auth_token }));
  };

  if (steperState === 0) {
    return (
      <DashboardLayout
        sessionRecordClick={sessionRecordClick}
        steperState={steperState}
        setSteperState={setSteperState}
      />
    );
  } else if (steperState === 1) {
    return (
      <Session_Records
        steperState={steperState}
        setSteperState={setSteperState}
      />
    );
  } else if (steperState === 2) {
    return (
      <>
        <NavBar bgColor="#ffffff" />
        <SessionRecordDetails
          steperState={steperState}
          setSteperState={setSteperState}
        />
      </>
    );
  }
};

export default Dashboard;
