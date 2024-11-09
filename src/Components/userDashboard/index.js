import React from "react";
import NavBar from "@/Container/navbar/NavBar";
import Session_Records from "./widget/widgetForRecords/session-records/Session-Records";
import SessionRecordDetails from "./widget/widgetForRecords/sessionRecordDetails/SessionRecordDetails";
import DashboardLayout from "./DashboardLayout";
import { useDashboardContext } from "@/context/DashboardContext";

const Dashboard = () => {
  const { steperState, setSteperState } = useDashboardContext();

  if (steperState === 0) {
    return (
      <DashboardLayout
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
