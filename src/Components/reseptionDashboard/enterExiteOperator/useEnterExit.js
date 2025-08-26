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

  // خواندن isEntered از localStorage در لود اولیه
  const [isEntered, setIsEntered] = useState(
    JSON.parse(localStorage.getItem("isEntered")) || false
  );
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);

  // ذخیره یا پاک کردن isEntered در localStorage هر وقت تغییر کند
  useEffect(() => {
    if (isEntered) {
      localStorage.setItem("isEntered", JSON.stringify(isEntered));
    } else {
      localStorage.removeItem("isEntered"); // پاک کردن در زمان خروج
    }
  }, [isEntered]);

  // گرفتن داده‌ها از سرور
  useEffect(() => {
    if (auth_Employee_token) {
      dispatch(getOperatorSchedule({ auth_Employee_token }));
    }
  }, [dispatch, auth_Employee_token]);

  // اگر سرور فیلد is_entered دارد، می‌توانید اینجا همگام‌سازی کنید
  // useEffect(() => {
  //   if (operatorSchedule && operatorSchedule.is_entered !== undefined) {
  //     setIsEntered(operatorSchedule.is_entered);
  //   }
  // }, [operatorSchedule]);

  const openModal = (action) => {
    setSelectedAction(action);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedAction(null);
  };

  const handleConfirm = () => {
    const username = operatorSchedule?.operator_username;
    if (!username) {
      showToast({
        title: "خطا",
        description: "نام کاربری اوپراتور یافت نشد.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    dispatch(
      enterExitedOprators({
        username,
        auth_Employee_token,
        action: selectedAction,
      })
    )
      .then(() => {
        // تنظیم isEntered بر اساس عملیات
        setIsEntered(selectedAction === "enter");
        dispatch(getOperatorSchedule({ auth_Employee_token }));
        showToast({
          title: selectedAction === "enter" ? "ورود موفق" : "خروج موفق",
          description: `اوپراتور با موفقیت ${
            selectedAction === "enter" ? "وارد" : "خارج"
          } شد.`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch(() => {
        showToast({
          title: "خطا",
          description: "عملیات ناموفق بود.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });

    closeModal();
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
