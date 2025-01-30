import { Box, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import InformationBox from "./InformationBox";
import { extractTime } from "@/utils/extractDate";
import PaymentMethodSection from "./PaymentMethodSection";
import ConfirmTransaction from "./ConfitmTransaction";
import { getCustomerName } from "@/utils/getCustomerName";

const paymentDialogContent = (
  step,
  setStep,
  selectedReserve,
  paymentKind,
  selectedValue,
  selectedValue2,
  paymentPriceKepper1,
  paymentPriceKepper2,
  titles,
  oneWayPaymentValu,
  confrimChange,
  handlePaymentMethodChange,
  paymentHandleClick,
  cutomerList
) => {
  const renderHeader = () => (
    <Box display="flex" alignItems="center">
      {step > 0 && (
        <FaArrowRight
          onClick={() => setStep(0)}
          cursor="pointer"
          fontSize="17px"
        />
      )}
      <Text mr={3} fontSize="17px" fontWeight="bold">
        {titles[step]}
      </Text>
    </Box>
  );

  const renderInformation = () => (
    <Box width="100%" p={2} display="flex" flexDirection="column" gap={3}>
      <InformationBox
        title="نام و نام خانوادگی"
        value={getCustomerName(selectedReserve.user,cutomerList) || ""}
      />
      <InformationBox
        title="زمان نوبت"
        value={extractTime(selectedReserve.reserve_time_str) || ""}
      />
      <InformationBox
        title="ناحیه لیزر"
        value={selectedReserve.laser_area_name || ""}
        setStep={setStep}
        step={step}
      />
    </Box>
  );

  const renderpaymentDialogContent = () => {
    return (
      <>
        {renderInformation()}
        <Box mt={3} width="100%" p={2}>
          {!confrimChange ? (
            <PaymentMethodSection
              oneWayPaymentValu={oneWayPaymentValu}
              handlePaymentMethodChange={handlePaymentMethodChange}
              setStep={setStep}
              step={step}
            />
          ) : (
            renderPaymentDetails()
          )}
        </Box>
        <Box mt={4} width="100%">
          <ConfirmTransaction
            paymentHandleClick={paymentHandleClick}
            selectedReserve={selectedReserve}
          />
        </Box>
      </>
    );
  };
  const renderPaymentDetails = () => (
    <Box
      borderRadius="6px"
      border="1px solid #ddd"
      width="98%"
      p="10px"
      display="flex"
      flexDirection="column"
      gap={2}
    >
      {[selectedValue, selectedValue2].map((val, index) => (
        <Box key={index} p={2} display="flex" justifyContent="space-between">
          <Text>{paymentKind[val] || "اطلاعات موجود نیست"}</Text>
          <Text color="blue" fontWeight="bold">
            {index === 0 ? paymentPriceKepper1 : paymentPriceKepper2} تومان
          </Text>
        </Box>
      ))}
    </Box>
  );

  return {
    renderHeader,
    renderInformation,
    renderPaymentDetails,
    renderpaymentDialogContent,
  };
};

export default paymentDialogContent;
