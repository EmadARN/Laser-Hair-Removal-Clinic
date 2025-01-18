import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import {
  addcharge,
  getCutomerList,
  reservesListPerson,
} from "@/features/receptionDashboard/receptionThunks";
import { useCustomToast } from "@/utils/useCustomToast ";

const usePatientList = () => {
  const [{ auth_Employee_token }] = useCookies(["auth_Employee_token"]);
  const [selectedId, setSelectedId] = useState();
  const [selectedReserve, setSelectedReserve] = useState(null);
  const [profileInfo, setProfileInfo] = useState(null);
  const { showToast } = useCustomToast();
  const dispatch = useDispatch();
  const { reservesLists, cutomerList } = useSelector(
    (store) => store.receptionDashboardSlice
  );

  const handleProfileClick = (item) => {
    const sessionLength = reservesLists.reserve_list
      ? reservesLists.reserve_list.length
      : 0;
    setProfileInfo({ ...item, sessionLength });
    dispatch(reservesListPerson({ username: item.user, auth_Employee_token }));
  };

  const handleChargeClick = async () => {
    const result = await dispatch(
      addcharge({
        username: selectedId && selectedId.user,
        auth_Employee_token,
      })
    );
    if (result.meta.requestStatus === "fulfilled") {
      showToast({
        title: "با موفقیت ثبت شد",
        status: "success",
      });
    } else {
      showToast({
        title: "خطای ناشناخته رخ داده است",
        status: "error",
      });
    }
  };

  useEffect(() => {
    dispatch(getCutomerList({ auth_Employee_token }));
  }, [auth_Employee_token, dispatch]);

  return {
    reservesLists,
    cutomerList,
    profileInfo,
    setSelectedId,
    setSelectedReserve,
    handleProfileClick,
    handleChargeClick,
  };
};

export default usePatientList;
