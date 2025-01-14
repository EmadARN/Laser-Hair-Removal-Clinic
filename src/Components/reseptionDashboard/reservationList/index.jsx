import React, { useState } from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  cancelReserve,
  multiplePayment,
} from "@/features/receptionDashboard/receptionThunks";
import PaymentDialog from "../paymentDialog/PaymentDialog";
import { extractTime } from "@/utils/extractDate";
import { getCustomerName } from "@/utils/getCustomerName";
import { useCustomToast } from "@/utils/useCustomToast ";
import Lists from "../shared/Lists";

export const ReservationList = ({
  isDisabled,
  ButtonValue,
  display,
  todayReserve,
  auth_Employee_token,
  isPaymentTable,
  cutomerList,
}) => {
  const dispatch = useDispatch();
  const { showToast } = useCustomToast();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelModal = useDisclosure();
  const paymentModal = useDisclosure();

  const [selectedReserve, setSelectedReserve] = useState(null);
  const [idKeeper, setIdKeeper] = useState("");

  //this state store inputselect 1 component value
  const [selectedValue, setSelectedValue] = useState("");
  //this state store inputselect 2 component value
  const [selectedValue2, setSelectedValue2] = useState("");

  //this state store the first input value price that customer entered for custome payment

  const [paymentPriceKepper1, setPaymentPriceKepper1] = useState();

  //this state store the seccond input value price that customer entered for custome payment

  const [paymentPriceKepper2, setPaymentPriceKepper2] = useState();

  //this state store the radio button value for one payment method
  const [oneWayPaymentValu, setOneWayPaymentValue] = useState("");

  const [confrimChange, setConfirmChange] = useState(false);

  //this function handle inputSelect components for payment method
  const handlePaymentChange = (event, type) => {
    if (type === "value1") {
      setSelectedValue(event.target.value);
    } else if (type === "value2") {
      setSelectedValue2(event.target.value);
    }
  };
  //this function handle inputSelect component for price tp pay
  const handlePrice = (event, type) => {
    if (type === "value1") {
      setPaymentPriceKepper1(event.target.value);
    } else if (type === "value2") {
      setPaymentPriceKepper2(event.target.value);
    }
  };

  //this function store each customer payment detail
  const handleProcessPaymentCharge = (item) => {
      paymentModal.onOpen();
      setSelectedReserve(item);

      setIdKeeper(item.id);

  };

  //final function to dispatch payment api
  const paymentHandleClick = async () => {
    const reservId = idKeeper;

    // ایجاد ساختار درست برای payment_list
    const payment_list = confrimChange
      ? [
          { price: Number(paymentPriceKepper1), payment_type: selectedValue }, // شیء اول
          { price: Number(paymentPriceKepper2), payment_type: selectedValue2 }, // شیء دوم
        ]
      : selectedReserve && selectedReserve.total_price_amount
      ? [
          {
            price: selectedReserve.total_price_amount,
            payment_type: oneWayPaymentValu,
          }, // شیء تنها در صورت عدم تغییر
        ]
      : [];

    // دیسپچ کردن اطلاعات
    const result = await dispatch(
      multiplePayment({
        reservId,
        payment_list,
        auth_Employee_token,
      })
    );
    if (result.meta.requestStatus === "fulfilled") {
      showToast({ title: "پرداخت با موفقیت انجام شد", status: "success" });
      paymentModal.onClose();
    } else {
      showToast({ title: " خطای ناشناخته ای رخ داده است   ", status: "error" });
    }
  };

  const cancelHandler = async (item) => {
    setSelectedReserve(item);
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

  //this function update radio button values for one payemnt method
  const handlePaymentMethodChange = (value) => {
    setOneWayPaymentValue(value);
  };

  return (
    <Box w={{ base: "100vw", md: "100%" }} px={4}>
      <Box>
        {todayReserve?.all_list
          ?.filter(
            (item) =>
              !isPaymentTable || item.payed || item.reserve_type === "sc"
          )
          .map((item) => (
            <Lists
              key={item.id}
              firstArea={getCustomerName(item.user)}
              secondArea={getCustomerName(item.user, cutomerList)}
              thirdArea={extractTime(item.reserve_time_str)}
              fourthArea={item.laser_area_name}
              item={item}
              ButtonValue={ButtonValue}
              isPaymentTable={isPaymentTable}
              isDisabled={isDisabled}
              handleProcessPaymentCharge={handleProcessPaymentCharge}
              cancelHandler={cancelHandler}
            />
          ))}
      </Box>

      {paymentModal.isOpen && (
        <PaymentDialog
          idKeeper={idKeeper}
          confrimChange={confrimChange}
          setConfirmChange={setConfirmChange}
          oneWayPaymentValu={oneWayPaymentValu}
          handlePaymentMethodChange={handlePaymentMethodChange}
          setPaymentPriceKepper1={setPaymentPriceKepper1}
          setPaymentPriceKepper2={setPaymentPriceKepper2}
          setSelectedValue={setSelectedValue}
          setSelectedValue2={setSelectedValue2}
          paymentPriceKepper1={paymentPriceKepper1}
          paymentPriceKepper2={paymentPriceKepper2}
          handlePrice={handlePrice}
          selectedValue2={selectedValue2}
          selectedValue={selectedValue}
          handlePaymentChange={handlePaymentChange}
          paymentHandleClick={paymentHandleClick}
          isOpen={paymentModal.isOpen}
          onClose={paymentModal.onClose}
          reserve={selectedReserve}
        />
      )}
    </Box>
  );
};
