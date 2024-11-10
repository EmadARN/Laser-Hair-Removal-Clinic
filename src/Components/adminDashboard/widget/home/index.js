import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import {
  getCutomerList,
  getDate,
} from "@/features/adminDashboard/adminDashboardSlice";
import CustomerTable from "./widget/CustomerTable";
import HeaderDetails from "./widget/HeaderDetails";
import FinancialReports from "./widget/financialReports/FinancialReports";
import useFinancialData from "@/hooks/adminDashboard/home/useFinancialData";

const Home = () => {
  const [{ auth_Admin_token }] = useCookies(["auth_Admin_token"]);
  const { dateReserve, customerListAdmin } = useSelector(
    (store) => store.adminDashboard
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDate({ from: "", to: "", auth_Admin_token }));
  }, [dispatch, auth_Admin_token]);

  useEffect(() => {
    dispatch(getCutomerList({ auth_Admin_token }));
  }, [dispatch, auth_Admin_token]);

  const { totalPaidAmount, totalAmount } = useFinancialData(dateReserve);

  return (
    <>
      <Box sx={{ py: 6 }}>
        <HeaderDetails />
      </Box>
      <Box sx={{ bgColor: "#F7FAFC", p: 4, rounded: "8px" }}>
        <FinancialReports
          morningShiftLabel="شیفت صبح"
          afternoonShiftLabel="شیفت بعد از ظهر"
          totalPaidAmountThisMonth={totalPaidAmount}
          totalAmountThisMonth={totalAmount}
        />
      </Box>
      <Box sx={{ mt: 8, bgColor: "#F7FAFC", p: 4, rounded: "8px" }}>
        <FinancialReports
          morningShiftLabel="تخمین در آمد روز"
          afternoonShiftLabel="در آمد روز تا این لحظه"
          totalPaidAmountThisMonth={totalPaidAmount}
          totalAmountThisMonth={totalAmount}
        />
      </Box>
      <CustomerTable
        dateReserve={dateReserve}
        customerListAdmin={customerListAdmin}
      />
    </>
  );
};

export default Home;
