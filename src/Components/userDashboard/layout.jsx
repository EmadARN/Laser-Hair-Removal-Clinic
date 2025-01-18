import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSteperState } from "@/features/dashboardSteper/dashboardSlice";
import SessionReports from "./turnsReport";
import DashboardLayout from "./dashboardLayout";
import UserAccount from "./form/UserAccount";

const Dashboard = () => {
  const { steperState } = useSelector((store) => store.dashboardSteper);
  const dispatch = useDispatch();

  if (steperState === 0) {
    return (
      <DashboardLayout
        dispatch={dispatch}
        steperState={steperState}
        setSteperState={setSteperState}
      />
    );
  } else if (steperState === 1) {
    return (
      <SessionReports
        dispatch={dispatch}
        steperState={steperState}
        setSteperState={setSteperState}
      />
    );
  } else if (steperState === 2) {
    return (
      <UserAccount steperState={steperState} setSteperState={setSteperState} />
    );
  }
};

export default Dashboard;
