import React from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelReserve,
  multiplePayment,
  todayDate,
} from "@/features/receptionDashboard/receptionThunks";
import { extractTime } from "@/utils/extractDate";
import { getCustomerName } from "@/utils/getCustomerName";
import { useCustomToast } from "@/utils/useCustomToast ";
import Lists from "../shared/Lists";
import {
  setSelectedReserve,
  setIdKeeper,
  setSelectedValue,
  setSelectedValue2,
  setPaymentPriceKepper1,
  setPaymentPriceKepper2,
  setOneWayPaymentValue,
} from "@/features/receptionDashboard/paymentSlice";
import PaymentDialog from "../paymentDialog";
import { lazerAreas } from "@/constants";

export const ReservationList = ({
  isDisabled,
  ButtonValue,
  display,
  todayReserve,
  auth_Employee_token,
  isPaymentTable,
  cutomerList,
}) => {
  const { showToast } = useCustomToast();
  const cancelModal = useDisclosure();
  const paymentModal = useDisclosure();

  const dispatch = useDispatch();
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

  // const handlePrice = (event, type) => {
  //   if (type === "value1") {
  //     dispatch(setPaymentPriceKepper1(event.target.value));
  //   } else if (type === "value2") {
  //     dispatch(setPaymentPriceKepper2(event.target.value));
  //   }
  // };
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

  return (
    <Box w={{ base: "100vw", md: "100%" }} px={4}>
      <Box>
        {todayReserve?.all_list
          ?.filter(
            (item) =>
              !isPaymentTable || item.payed || item.reserve_type === "sc"
          )
          .map((item) => {
            const matchedAreas = item.laser_area_list
              .map(
                (area) =>
                  lazerAreas.find((lazerArea) => lazerArea.value === area)
                    ?.label
              )
              .filter(Boolean) // حذف مقادیر null یا undefined
              .join(", "); // تبدیل آرایه به یک رشته با جداکننده‌ی ", "

            return (
              <Box key={item.id} width={{ base: "110vw", md: "100%" }}>
                <Lists
                  key={item.id}
                  firstArea={getCustomerName(item.user)}
                  secondArea={getCustomerName(item.user, cutomerList)}
                  thirdArea={extractTime(item.reserve_time_str)}
                  fourthArea={matchedAreas || item.laser_area_name} // استفاده از مقدار پیش‌فرض اگر مقایسه‌ای انجام نشد
                  item={item}
                  ButtonValue={ButtonValue}
                  isPaymentTable={isPaymentTable}
                  isDisabled={isDisabled}
                  handleProcessPaymentCharge={handleProcessPaymentCharge}
                  cancelHandler={cancelHandler}
                />
              </Box>
            );
          })}
      </Box>

      {paymentModal.isOpen && (
        <PaymentDialog
          handlePaymentMethodChange={handlePaymentMethodChange}
          handlePaymentChange={handlePaymentChange}
          paymentHandleClick={paymentHandleClick}
          isOpen={paymentModal.isOpen}
          onClose={paymentModal.onClose}
          handlePrice={handlePrice}
        />
      )}
    </Box>
  );
};
