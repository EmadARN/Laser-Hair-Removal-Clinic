import {
  setSelectedReserve,
  setIdKeeper,
  setSelectedValue,
  setSelectedValue2,
  setPaymentPriceKepper1,
  setPaymentPriceKepper2,
  setOneWayPaymentValue,
} from "@/features/receptionDashboard/paymentSlice";
import {
  cancelReserve,
  multiplePayment,
  todayDate,
} from "@/features/receptionDashboard/receptionThunks";
import { useCustomToast } from "@/utils/useCustomToast ";

import { useDispatch, useSelector } from "react-redux";

const usePaymentcontrol = (
  paymentModal,
  auth_Employee_token,
  cancelModal
) => {
  const dispatch = useDispatch();

  const { showToast } = useCustomToast();
  // انتخاب استیت‌ها از ریداکس
  const {
    selectedReserve,
    idKeeper,
    selectedValue,
    selectedValue2,
    paymentPriceKepper1,
    paymentPriceKepper2,
    oneWayPaymentValu,
    confrimChange,
  } = useSelector((state) => state.payment);

  // هندل تغییر مقادیر
  const handlePaymentChange = (event, type) => {
    if (type === "value1") {
      dispatch(setSelectedValue(event.target.value));
    } else if (type === "value2") {
      dispatch(setSelectedValue2(event.target.value));
    }
  };

  const handlePrice = (event, type) => {
    const value = parseFloat(event.target.value) || 0; // تبدیل ورودی به عدد

    if (type === "value1") {
      dispatch(setPaymentPriceKepper1(value));
      dispatch(
        setPaymentPriceKepper2(selectedReserve.total_price_amount - value)
      ); // محاسبه باقی‌مانده
    } else if (type === "value2") {
      dispatch(setPaymentPriceKepper2(value));
      dispatch(
        setPaymentPriceKepper1(selectedReserve.total_price_amount - value)
      ); // محاسبه باقی‌مانده
    }
  };

  const handleProcessPaymentCharge = (item) => {
    paymentModal.onOpen();
    dispatch(setSelectedReserve(item));
    dispatch(setIdKeeper(item.id));
  };

  const paymentHandleClick = async () => {
    const reservId = idKeeper;

    const payment_list = confrimChange
      ? [
          { price: Number(paymentPriceKepper1), payment_type: selectedValue },
          { price: Number(paymentPriceKepper2), payment_type: selectedValue2 },
        ]
      : selectedReserve?.total_price_amount
      ? [
          {
            price: selectedReserve.total_price_amount,
            payment_type: oneWayPaymentValu,
          },
        ]
      : [];

    const result = await dispatch(
      multiplePayment({
        reservId,
        payment_list,
        auth_Employee_token,
      })
    );

    if (result.meta.requestStatus === "fulfilled") {
      showToast({ title: "پرداخت با موفقیت انجام شد", status: "success" });
      await dispatch(todayDate({ auth_Employee_token }));
      paymentModal.onClose();
    } else {
      showToast({ title: " خطای ناشناخته ای رخ داده است   ", status: "error" });
    }
  };

  const cancelHandler = async (item) => {
    dispatch(setSelectedReserve(item));
    cancelModal.onOpen();

    const result = await dispatch(
      cancelReserve({
        reserve: item.id,
        cancel_type: "sc",
        sms_status: "جلسه لیزر شما لغو شد",
        auth_Employee_token,
      })
    );

    if (result.meta.requestStatus === "fulfilled") {
      showToast({ title: "لغو با موفقیت انجام شد", status: "success" });
      cancelModal.onClose();
    } else {
      showToast({
        title: " خطای ناشناخته ای رخ داده است   ",
        status: "error",
      });
    }
  };

  const handlePaymentMethodChange = (value) => {
    dispatch(setOneWayPaymentValue(value));
  };
  return {
    selectedReserve,
    idKeeper,
    selectedValue,
    selectedValue2,
    paymentPriceKepper1,
    paymentPriceKepper2,
    oneWayPaymentValu,
    confrimChange,
    handlePaymentChange,
    handlePrice,
    handleProcessPaymentCharge,
    paymentHandleClick,
    cancelHandler,
    handlePaymentMethodChange,
  };
};

export default usePaymentcontrol;
