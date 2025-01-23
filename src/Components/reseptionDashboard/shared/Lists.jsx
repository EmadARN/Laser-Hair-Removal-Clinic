import CustomModal from "@/Common/attentionModal/CustomModal";
import { Box, Button, Flex, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";

const Lists = ({
  firstArea,
  secondArea,
  thirdArea,
  fourthArea,
  item,
  handleProcessPaymentCharge,
  cancelHandler,
  bgColor = "graySky.100",
  rounded = "8px",
  color = "black",
  display,
  displayfourthArea = "block",
  isDisabled,
  isPaymentTable,
}) => {
  const responsiveFontSize = useBreakpointValue({
    base: "xs",
    md: "sm",
    lg: "md",
  });

  const [isModalOpen, setModalOpen] = useState(false); // مدیریت وضعیت مودال لغو
  const [isChargeModalOpen, setChargeModalOpen] = useState(false); // مدیریت وضعیت مودال شارژ
  const [selectedItem, setSelectedItem] = useState(null); // آیتم انتخاب‌شده

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  const handleOpenChargeModal = () => {
    setChargeModalOpen(true); // باز کردن مودال شارژ
  };

  const handleCloseChargeModal = () => {
    setChargeModalOpen(false); // بستن مودال شارژ
  };

  const handleConfirmCancel = () => {
    cancelHandler(selectedItem); // فراخوانی هندلر لغو
    handleCloseModal(); // بستن مودال لغو
  };

  const isCancelled = item.reserve_type === "sc";
  const isCompelte = item.reserve_type === "co";

  return (
    <>
      <Flex
        sx={{
          flexDirection: { base: "row", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          bgColor: bgColor || "graySky.100",
          width: { base: "110%", md: "100%" },
          rounded: rounded || "8px",
          color,
          p: 5,
          my: 2,
        }}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <AreaBox fontSize={responsiveFontSize}>{firstArea}</AreaBox>
        <AreaBox fontSize={responsiveFontSize}>{secondArea}</AreaBox>
        <AreaBox fontSize={responsiveFontSize}>{thirdArea}</AreaBox>
        <AreaBox fontSize={responsiveFontSize} display={displayfourthArea}>
          {fourthArea}
        </AreaBox>

        <Flex
          gap={2}
          justifyContent={{ base: "flex-end", md: "center" }}
          alignItems="center"
          flexWrap="wrap"
        >
          <Button
            onClick={() => handleProcessPaymentCharge(item)} // فراخوانی هندلر شارژ
            size={{ base: "xs", md: "sm" }}
            bg="transparent"
            color="blue"
            px={2}
            isDisabled={isCancelled ? true : isDisabled}
          >
            {isCompelte ? "پرداخت شده" : "پرداخت"}
          </Button>
          <Button
            onClick={() => handleOpenModal(item)} // باز کردن مودال لغو
            display={display}
            isDisabled={isCancelled ? true : isDisabled}
            size={{ base: "xs", md: "sm" }}
            bg="transparent"
            color={!isPaymentTable ? "red" : "gray"}
            px={2}
          >
            {isCancelled ? "لغو شده" : "لغو نوبت"}
          </Button>
        </Flex>
      </Flex>

      {/* مودال لغو نوبت */}
      <CustomModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="لغو نوبت"
        description="آیا از لغو این نوبت مطمئن هستید؟"
        confirmText="لغو"
        cancelText="بازگشت"
        onConfirm={handleConfirmCancel}
        onCancel={handleCloseModal}
      />

      {/* مودال شارژ */}
      <CustomModal
        isOpen={isChargeModalOpen}
        onClose={handleCloseChargeModal}
        title="ورود به شارژ"
        description="آیا می‌خواهید به حساب خود شارژ وارد کنید؟"
        confirmText="ورود به شارژ"
        cancelText="لغو"
        onConfirm={handleOpenChargeModal} // فراخوانی هندلر ورود به شارژ
        onCancel={handleCloseChargeModal}
      />
    </>
  );
};

export default Lists;

const AreaBox = ({ children, display = "block", fontSize }) => (
  <Box
    flex="1"
    minWidth={{ base: "80px", md: "120px" }}
    textAlign="right"
    fontSize={fontSize}
    display={display}
    overflow="hidden"
    whiteSpace="nowrap"
    textOverflow="ellipsis"
  >
    {children}
  </Box>
);
