import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useCustomToast } from "@/utils/useCustomToast ";
import { postLazerAreaList } from "@/features/customerDashboard/customerThunks";
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
