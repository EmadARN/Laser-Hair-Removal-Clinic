import { getCutomerList, getDate } from "@/features/adminDashboard/adminThunks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useReportsData = (authToken, dateRange) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (dateRange.from && dateRange.to) {
      dispatch(getDate({ ...dateRange, auth_Admin_token: authToken }));
    }
  }, [dispatch, dateRange, authToken]);

  useEffect(() => {
    dispatch(getCutomerList({ auth_Admin_token: authToken }));
  }, [dispatch, authToken]);
};

export default useReportsData;
