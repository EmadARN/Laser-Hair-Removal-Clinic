import { getreserveInformation } from "@/features/customerDashboard/customerDashboardSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useFetchReserveInformation = (token) => {
  const dispatch = useDispatch();
  const { reserveInformation, loading, error } = useSelector(
    (store) => store.customerDashboard
  );

  useEffect(() => {
    if (token) {
      dispatch(getreserveInformation({ token }));
    }
  }, [dispatch, token]);

  return { reserveInformation, loading, error };
};
