import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { postLazerAreaList } from "@/features/customerDashboard/customerDashboardSlice";
import { useCustomToast } from "@/utils/useCustomToast ";
export const usePostLazerAreas = (reserveId, token) => {
  const {showToast}= useCustomToast()
  const dispatch = useDispatch();

  const submitHandler =  useCallback( async() => {
  const result =  await dispatch(postLazerAreaList({ reserveId, token }));

  if (result.meta.requestStatus === "fulfilled") {
    showToast({
      title: " موفقیت‌آمیز",
      description: "  نواحی با موفقیت انتخاب شد   ",
      status: "success",
    });
  }else{
    showToast({
      title: "خطا ",
      description: "خطا در ثبت اطلاعات ",
      status: "error",
    });
  }
  }, [reserveId, token, dispatch]);

  return { submitHandler };
};
