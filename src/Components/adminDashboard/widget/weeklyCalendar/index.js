import { Box } from "@chakra-ui/react";
import React from "react";
import AdminTable from "./AdminTable";
import AdminHeader from "../AdminHeader/AdminHeader";
import { FaCalendarAlt } from "react-icons/fa";
import DataSlider from "@/Common/dataSlider/DataSlider";

const WeeklyCalendar = () => {
  return (
    <>
      <Box sx={{ py: 6 }}>
        <AdminHeader
          headerTitle="برنامه هفتگی"
          btnValue="فرستادن برنامه"
          icon={<FaCalendarAlt />}
          dataSlider={<DataSlider />}
        />
      </Box>
      <Box sx={{ w: "100%" }}>
        <AdminTable />
      </Box>
    </>
  );
};

export default WeeklyCalendar;
