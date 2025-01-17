import React, { useEffect, useState } from "react";
import DashboardLayout from "./DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { getSessionRecords } from "@/features/customerDashboard/customerThunks";
import { setSteperState } from "@/features/dashboardSteper/dashboardSlice";
import SessionReports from "./turnsReport";

const Dashboard = () => {
  const { steperState } = useSelector((store) => store.dashboardSteper);
  const [phoneNumber, setPhoneNumber] = useState();
  const [{ auth_token }] = useCookies(["auth_token"]);
  const dispatch = useDispatch();

  useEffect(() => setPhoneNumber(localStorage.getItem("phoneNumber")), []);

  const sessionRecordClick = () => {
    dispatch(setSteperState(steperState + 1));
    dispatch(getSessionRecords({ phoneNumber, auth_token }));
  };

  if (steperState === 0) {
    return <DashboardLayout sessionRecordClick={sessionRecordClick} />;
  } else if (steperState === 1) {
    return (
      <SessionReports
        dispatch={dispatch}
        steperState={steperState}
        setSteperState={setSteperState}
      />
    );
  }
};

export default Dashboard;
