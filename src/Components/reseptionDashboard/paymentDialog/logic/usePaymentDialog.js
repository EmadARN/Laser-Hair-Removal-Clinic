import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setConfirmChange,
  setPaymentPriceKepper1,
  setPaymentPriceKepper2,
  setSelectedValue,
  setSelectedValue2,
} from "@/features/receptionDashboard/paymentSlice";
import { extractTime } from "@/utils/extractDate";

const usePaymentDialog = (onClose) => {
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();
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


  const handleCancel = () => {
    setStep(0);
  
    [
      setPaymentPriceKepper1,
      setPaymentPriceKepper2,
      setSelectedValue,
      setSelectedValue2,
    ].forEach((action) => dispatch(action("")));
    dispatch(setConfirmChange(false));
    onClose();
  };

  const paymentKind = useMemo(() => ({ ca: "نقدی", cr: "کارتخوان" }), []);

  const titles = useMemo(
    () => ["پرداخت", "انتخاب نواحی", "پرداخت به چند روش"],
    []
  );

  return {
    step,
    setStep,
    selectedReserve,
    idKeeper,
    selectedValue,
    selectedValue2,
    paymentPriceKepper1,
    paymentPriceKepper2,
    oneWayPaymentValu,
    confrimChange,
    handleCancel,
    paymentKind,
    titles,
    extractTime,
  };
};

export default usePaymentDialog;
