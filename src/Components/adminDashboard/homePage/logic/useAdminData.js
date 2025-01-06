import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchWeekData,
  getAsyncListDateOperator,
  getCutomerList,
  getDate,
} from "@/features/adminDashboard/adminThunks";
import { getDateParts } from "../../utils/getDateParts";

const useAdminData = (authToken, dateRanges, dataRangeStatus) => {
  const dispatch = useDispatch();
  const {
    year: date_year,
    month: date_month,
    day: date_day,
  } = getDateParts(dateRanges?.date);

  useEffect(() => {
    dispatch(fetchWeekData(0));
    if (authToken && dataRangeStatus) {
      dispatch(
        getAsyncListDateOperator({
          token: authToken,
          date_year,
          date_month,
          date_day,
        })
      );
    }
  }, [authToken, date_year, date_month, date_day, dataRangeStatus, dispatch]);

  useEffect(() => {
    dispatch(getDate({ from: "", to: "", authToken }));
    dispatch(getCutomerList({ authToken }));
  }, [authToken, dispatch]);
};

export default useAdminData;
