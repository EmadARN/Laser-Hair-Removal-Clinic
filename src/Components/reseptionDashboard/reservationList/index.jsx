import React, { useEffect } from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import { extractTime } from "@/utils/extractDate";
import { getCustomerName } from "@/utils/getCustomerName";
import Lists from "../shared/Lists";
import PaymentDialog from "../paymentDialog";
import usePaymentcontrol from "./logic/usePaymentcontrol";
import { getLazerAreas } from "@/features/receptionDashboard/receptionThunks";
import { useDispatch } from "react-redux";

export const ReservationList = ({
  isDisabled,
  ButtonValue,
  display,
  todayReserve,
  auth_Employee_token,
  isPaymentTable,
  cutomerList,
  LazerAreas,
  filteredData,
}) => {
  const dispatch = useDispatch();

  const cancelModal = useDisclosure();
  const paymentModal = useDisclosure();

  const {
    handlePaymentChange,
    handlePrice,
    handleProcessPaymentCharge,
    paymentHandleClick,
    cancelHandler,
    handlePaymentMethodChange,
  } = usePaymentcontrol(paymentModal, auth_Employee_token, cancelModal);

  useEffect(() => {
    dispatch(getLazerAreas({ auth_Employee_token }));
  }, [dispatch, auth_Employee_token, isPaymentTable]);

  return (
    <Box w={{ base: "100vw", md: "100%" }} px={4}>
      <Box>
        {filteredData && filteredData.length > 0
          ? filteredData.map((item) => {
              const matchedAreas = item.laser_area_list
                ?.map(
                  (area) =>
                    LazerAreas?.all_laser_area_object &&
                    LazerAreas?.all_laser_area_object?.first_type.find(
                      (lazerArea) => lazerArea.value === area
                    )?.label
                )
                .filter(Boolean)
                .join(", ");

              return (
                <Box key={item.id} width={{ base: "110vw", md: "100%" }}>
                  <Lists
                    firstArea={getCustomerName(item.user)}
                    secondArea={getCustomerName(item.user, cutomerList)}
                    thirdArea={extractTime(item.reserve_time_str)}
                    fourthArea={matchedAreas || "ناحیه لیزر"} // مقدار پیش‌فرض برای matchedAreas
                    item={item}
                    ButtonValue={ButtonValue}
                    isPaymentTable={isPaymentTable}
                    isDisabled={isDisabled}
                    handleProcessPaymentCharge={handleProcessPaymentCharge}
                    cancelHandler={cancelHandler}
                  />
                </Box>
              );
            })
          : todayReserve?.all_list
              ?.filter(
                (item) =>
                  !isPaymentTable || item.payed || item.reserve_type === "sc"
              )
              .map((item) => {
                const matchedAreas = item.laser_area_list
                  ?.map(
                    (area) =>
                      LazerAreas?.all_laser_area_object &&
                      LazerAreas?.all_laser_area_object?.first_type.find(
                        (lazerArea) => lazerArea.value === area
                      )?.label
                  )
                  .filter(Boolean)
                  .join(", ");

                return (
                  <Box key={item.id} width={{ base: "110vw", md: "100%" }}>
                    <Lists
                      firstArea={getCustomerName(item.user)}
                      secondArea={getCustomerName(item.user, cutomerList)}
                      thirdArea={extractTime(item.reserve_time_str)}
                      fourthArea={matchedAreas || "ناحیه لیزر"} // مقدار پیش‌فرض برای matchedAreas
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
