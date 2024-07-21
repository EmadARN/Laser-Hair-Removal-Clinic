import React, { useState } from "react";
import { Box, Grid, Text, Button } from "@chakra-ui/react";
import Section_title from "@/Common/section-title";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import NavBar from "@/Container/navbar/NavBar";
import No_Records from "./widget/widgetForRecords/no-record/No_Records";
import Session_Records from "./widget/widgetForRecords/session-records/Session-Records";
import SessionRecordDetails from "./widget/widgetForRecords/sessionRecordDetails/SessionRecordDetails";
import { useDashboardContext } from "@/context/DashboardContext";
import MainDashboard from "./MainDashboard";

const Dashboard = ({ page, setPage }) => {
  const { steperState, setSteperState } = useDashboardContext();

  if (steperState === 0) {
    return <MainDashboard />;
  } else if (steperState === 1) {
    return (
      <>
        <NavBar bgColor="#ffffff" />
        <Session_Records
          steperState={steperState}
          setSteperState={setSteperState}
        />
      </>
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
