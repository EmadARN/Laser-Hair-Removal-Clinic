import React, { useState } from "react";
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Button,
  Box,
  useDisclosure,
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { cancelReserve, multiplePayment } from "@/features/receptionDashboard/receptionThunks";
import PaymentDialog from "../paymentDialog/PaymentDialog";
import { extractTime } from "@/utils/extractDate";


export const ReservationTable = ({
  isDisabled,
  ButtonValue,
  display,
  todayReserve,
  auth_Employee_token,
  isPaymentTable, // Prop to determine which table is being rendered
}) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
  const handlePaymentClick = (item) => {
    setSelectedReserve(item);

    setIdKeeper(item.id);

    onOpen();
  };

  //final function to dispatch payment api
  const paymentHandleClick = () => {
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
    dispatch(
      multiplePayment({
        reservId,
        payment_list,
        auth_Employee_token,
      })
    );
  };

  const cancelHandler = (item) => {
    if (isPaymentTable) {
      setSelectedReserve(item);
      dispatch(
        cancelReserve({
          reserve: item.id,
          cancel_type: "sc",
          sms_status: true,
          auth_Employee_token,
        })
      );
    }
  };

  //this function update radio button values for one payemnt method
  const handlePaymentMethodChange = (value) => {
    setOneWayPaymentValue(value);
  };

  return (
    <Box w={{ base: "100vw", md: "100%" }} px={4}>
      <TableContainer>
        <Table
          overflowY="auto"
          width="100%"
          size="sm"
          dir="rtl"
          variant="striped"
        >
          <Tbody>
            {todayReserve?.all_list
              ?.filter((item) => !isPaymentTable || item.payed) // Show only paid users if isPaymentTable is true
              .map((item) => (
                <Tr key={item.id}>
                  {/* ستون نام کاربر */}
                  <Td
                    display={{ base: "none", sm: "table-cell" }}
                    fontSize={{ base: "12px", md: "16px" }}
                  >
                    {item.user}
                  </Td>

                  {/* ستون زمان رزرو */}
                  <Td
                    display={{ base: "none", sm: "table-cell" }}
                    fontSize={{ base: "12px", md: "16px" }}
                  >
                    {extractTime(item.reserve_time_str)}
                  </Td>

                  {/* ستون ناحیه لیزر */}
                  <Td
                    display={{ base: "none", md: "table-cell" }}
                    fontSize={{ base: "12px", md: "16px" }}
                  >
                    {item.laser_area_name}
                  </Td>

                  {/* دکمه‌ها */}
                  <Td textAlign="center">
                    <Button
                      onClick={() => handlePaymentClick(item)}
                      size={{ base: "xs", md: "sm" }}
                      bg="transparent"
                      color="blue"
                      px={2}
                    >
                      {ButtonValue}
                    </Button>
                  </Td>

                  <Td textAlign="center">
                    <Button
                      onClick={() => cancelHandler(item)}
                      display={display}
                      isDisabled={isDisabled}
                      size={{ base: "xs", md: "sm" }}
                      bg="transparent"
                      color={!isPaymentTable ? "red" : "gray"}
                      px={2}
                    >
                      لغو نوبت
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      {isOpen && (
        <PaymentDialog
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
          isOpen={isOpen}
          onClose={onClose}
          reserve={selectedReserve}
        />
      )}
    </Box>
  );
};
