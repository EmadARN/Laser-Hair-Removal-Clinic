import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import {
  getOperatorSchedule,
  enterExitedOprators,
} from "@/features/receptionDashboard/receptionThunks";
import { useCustomToast } from "@/utils/useCustomToast ";

const useEnterExit = () => {
  const [{ auth_Employee_token }] = useCookies();
  const { showToast } = useCustomToast();
  const dispatch = useDispatch();
  const { operatorSchedule } = useSelector(
    (store) => store.receptionDashboardSlice
  );

  const [isEntered, setIsEntered] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null); // برای ذخیره انتخاب کاربر (ورود یا خروج)
  console.log("operatorSchedule", operatorSchedule);

  // useEffect(() => {
  //   if (!operatorSchedule.operator_name) {
  //     showToast({
  //       title: "خطا.",
  //       description: "اوپراتور وجود ندارد یا خطایی پیش آمده",
  //       status: "error",
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //   }
  // }, [operatorSchedule, showToast]);

  useEffect(() => {
    dispatch(getOperatorSchedule({ auth_Employee_token }));
  }, [dispatch, auth_Employee_token]);

  const openModal = (action) => {
    setSelectedAction(action); // انتخاب عملیات (ورود یا خروج)
    setModalOpen(true); // باز کردن مودال
  };

  const closeModal = () => {
    setModalOpen(false); // بستن مودال
    setSelectedAction(null); // پاک کردن انتخاب
  };

  const handleConfirm = () => {
    const username = operatorSchedule?.operator_username;
    if (selectedAction === "enter") {
      dispatch(enterExitedOprators({ username, auth_Employee_token }));
      setIsEntered(true);
      showToast({
        title: "ورود موفق",
        description: "اوپراتور با موفقیت وارد شد.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else if (selectedAction === "exit") {
      dispatch(enterExitedOprators({ username, auth_Employee_token }));
      setIsEntered(false);
      showToast({
        title: "خروج موفق",
        description: "اوپراتور با موفقیت خارج شد.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    dispatch(getOperatorSchedule({ auth_Employee_token }));
    closeModal(); // بستن مودال بعد از تایید
  };

  return {
    operatorSchedule,
    isEntered,
    isModalOpen,
    openModal,
    closeModal,
    handleConfirm,
    modalProps: {
      title: isEntered ? "ثبت خروج" : "ثبت ورود",
      description: `آیا از ${isEntered ? "خروج" : "ورود"} اوپراتور (${
        operatorSchedule?.operator_name
      }) مطمئن هستید؟`,
      confirmText: isEntered ? "ثبت خروج" : "ثبت ورود",
    },
  };
};

export default useEnterExit;
