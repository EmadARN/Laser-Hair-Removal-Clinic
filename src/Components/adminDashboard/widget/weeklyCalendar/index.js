import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AdminHeader from "../AdminHeader/AdminHeader";
import { FaCalendarAlt } from "react-icons/fa";
import DataSlider from "@/Common/dataSlider/DataSlider";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncOperatorList } from "@/features/adminDashboard/adminDashboardSlice";
import AdminTable from "./widget/modalDefineDetails/AdminTable";

const WeeklyCalendar = () => {
  const dispatch = useDispatch();
  const { operators, token } = useSelector((state) => state.adminDashboard);

  useEffect(() => {
    if (token) {
      dispatch(getAsyncOperatorList(token));
    }
  }, [dispatch, token]);

  console.log("operators::", operators);

  return (
    <>
      <Box sx={{ py: 2 }}>
        <AdminHeader
          headerTitle="برنامه هفتگی"
          btnValue="فرستادن برنامه"
          icon={<FaCalendarAlt />}
          dataSlider={<DataSlider />}
          iconBtnDisply="none"
        />
      </Box>
      <Box sx={{ w: "100%" }}>
        <AdminTable operator_list={operators.operator_list} token={token} />
      </Box>
    </>
  );
};

export default WeeklyCalendar;
