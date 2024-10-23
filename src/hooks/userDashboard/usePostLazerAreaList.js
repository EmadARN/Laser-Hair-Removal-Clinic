import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { postLazerAreaList } from "@/features/customerDashboard/customerDashboardSlice";

export const usePostLazerAreas = (reserveId, token) => {
  const dispatch = useDispatch();

  const submitHandler = useCallback(() => {
    dispatch(postLazerAreaList({ reserveId, token }));
  }, [reserveId, token, dispatch]);

  return { submitHandler };
};
