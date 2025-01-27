import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCommonUsers = (setInputsData, setStep, initialInputState) => {
  const [commonUsers, setCommonUsers] = useState([]);
  const { todayReserve, cutomerList, loading } = useSelector(
    (store) => store.receptionDashboardSlice
  );
  useEffect(() => {
    if (!todayReserve?.all_list || !cutomerList?.customer_list) return;

    const usersTodayReserve = todayReserve.all_list
      .filter((item) => item?.user)
      .map((item) => item.user);

    const usersCustomerList = cutomerList.customer_list
      .filter((item) => item?.username)
      .map((item) => item.username);

    const common = usersTodayReserve.filter((user) =>
      usersCustomerList.includes(user)
    );
    setCommonUsers(common);
  }, [todayReserve, cutomerList]);

  const filteredList =
    cutomerList?.customer_list?.filter((item) =>
      commonUsers.includes(item.username)
    ) || [];

  const handleRowClick = (item) => {
    const customerInfo = cutomerList.customer_information_list.find(
      (info) => info.user === item.username
    );
    setInputsData({
      ...initialInputState,
      ...item,
      ...customerInfo,
      drug_hist: customerInfo?.drug_hist || false,
      decease_hist: customerInfo?.decease_hist || false,
    });
    setStep(1);
  };
  return { filteredList, handleRowClick, loading, cutomerList };
};

export default useCommonUsers;
