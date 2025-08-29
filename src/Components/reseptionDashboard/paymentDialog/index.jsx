import React from "react";
import { Flex, Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import LaserAreas from "./ui/LaserAreas";
import CustomPayment from "./ui/customPayment";
import usePaymentDialog from "./logic/usePaymentDialog";
import paymentDialogContent from "./ui/paymentDialogContent";
import { useSelector } from "react-redux";

const PaymentDialog = ({
  handlePaymentMethodChange,
  handlePrice,
  isOpen,
  onClose,
  paymentHandleClick,
  handlePaymentChange,
}) => {
  const { cutomerList } = useSelector((state) => state.receptionDashboardSlice);
  const {
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
  } = usePaymentDialog(onClose);

  const { renderHeader, renderpaymentDialogContent } = paymentDialogContent(
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
  );

  const renderContent = () => {
    if (step === 1)
      return (
        <LaserAreas idKeeper={idKeeper} onClose={onClose} setStep={setStep} />
      );
    if (step === 2)
      return (
        <CustomPayment
          setStep={setStep}
          handlePrice={handlePrice}
          handlePaymentChange={handlePaymentChange}
        />
      );

    return renderpaymentDialogContent();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCancel} isCentered>
      <ModalOverlay />
      <ModalContent
        p={{ base: 3, md: 5 }}
        maxW={{ base: "90%", md: "500px" }}
        maxH="100vh"
        overflowY="auto"
      >
        <Flex
          mb={4}
          p={2}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          {renderHeader()}
          <MdCancel
            cursor="pointer"
            onClick={handleCancel}
            fontSize={{ base: "20px", md: "24px" }}
          />
        </Flex>
        {renderContent()}
      </ModalContent>
    </Modal>
  );
};

export default PaymentDialog;
