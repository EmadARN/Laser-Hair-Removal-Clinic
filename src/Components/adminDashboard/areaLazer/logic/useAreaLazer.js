import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { getLazerAreas } from "@/features/adminDashboard/adminThunks";

const useAreaLazer = () => {
  const dispatch = useDispatch();
  const [{ auth_Admin_token }] = useCookies(["auth_Admin_token"]);
  const token = auth_Admin_token;

  // گرفتن داده‌ها از Redux Store
  const { AreaLaser, loading, error } = useSelector(
    (store) => store.adminDashboard
  );

  useEffect(() => {
    if (token) {
      dispatch(getLazerAreas({ token }));
    }
  }, [dispatch, token]);

  return { loading, error, AreaLaser, token };
};

export default useAreaLazer;
