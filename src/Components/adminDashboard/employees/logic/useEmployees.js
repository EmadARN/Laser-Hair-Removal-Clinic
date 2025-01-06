import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { getAsyncUsersList } from "@/features/adminDashboard/adminThunks";

const useEmployees = () => {
  const dispatch = useDispatch();
  const [{ auth_Admin_token }] = useCookies(["auth_Admin_token"]);
  const token = auth_Admin_token;

  // گرفتن داده‌ها از Redux Store
  const { loading, error, users } = useSelector(
    (state) => state.adminDashboard
  );

  useEffect(() => {
    // بارگذاری لیست کاربران در صورت وجود توکن
    if (token) {
      dispatch(getAsyncUsersList({ token }));
    }
  }, [dispatch, token]);

  const type = (user) => {
    return user.user_type === "o"
      ? "اوپراتور"
      : user.user_type === "r"
      ? "منشی"
      : "نامشخص";
  };

  return { loading, error, users, token, type };
};

export default useEmployees;
