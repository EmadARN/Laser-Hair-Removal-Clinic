import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLazerAreaList } from "@/features/customerDashboard/customerDashboardSlice";

export const useFetchLazerAreas = (token) => {
  const dispatch = useDispatch();
  const { areas, loading, error } = useSelector(
    (store) => store.customerDashboard
  );

  useEffect(() => {
    if (token) {
      dispatch(getLazerAreaList({ token }));
    }
  }, [dispatch, token]);

  return { areas, loading, error };
};
