import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getClientInformation,
  getCutomerList,
} from "@/features/adminDashboard/adminThunks";
import { useCookies } from "react-cookie";

const useCutomerInformation = (setStep) => {
  const [clientData, setClientData] = useState({});

  const [{ auth_Admin_token }] = useCookies(["auth_Admin_token"]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCutomerList({ auth_Admin_token }));
  }, [dispatch, auth_Admin_token]);

  const { loading, error, customerListAdmin, clientInformation } = useSelector(
    (store) => store.adminDashboard
  );

  const handleRowClick = async (item) => {
    const customer = item;
    const customerInfo = customerListAdmin.customer_information_list.find(
      (info) => info.user === customer.username
    );
    await dispatch(
      getClientInformation({ auth_Admin_token, username: item.username })
    );

    setClientData({
      username: customer.username,
      name: customer.name,
      last_name: customer.last_name,
      phone_number: customer.phone_number,
      national_code: customerInfo ? customerInfo.national_code : "",
      address: customerInfo ? customerInfo.address : "",
      house_number: customerInfo ? customerInfo.house_number : "",
      drug_hist: customerInfo ? customerInfo.drug_hist : false,
      decease_hist: customerInfo ? customerInfo.decease_hist : false,
      doctor: customerInfo ? customerInfo.doctor : "-",
      offline_number: customerInfo ? customerInfo.offline_num : 0,
      last_date: customerInfo ? customerInfo.last_date : "-",
    });

    setStep(1);
  };

  const mdCancelHandler = () => {
    setStep(0);
    setClientData({
      name: "",
      last_name: "",
      phone_number: "",
      national_code: "",
      address: "",
      house_number: "",
      drug_hist: false,
      decease_hist: false,
      doctor: "-",
      offline_number: 0,
    });
  };
  return {
    mdCancelHandler,
    loading,
    error,
    customerListAdmin,
    clientInformation,
    handleRowClick,
    clientData,
  };
};

export default useCutomerInformation;
