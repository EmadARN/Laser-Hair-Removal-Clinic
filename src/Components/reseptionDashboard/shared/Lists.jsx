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
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  const handleConfirmCancel = () => {
    cancelHandler(selectedItem);
    handleCloseModal();
  };

  const isCancelled = item.reserve_type === "sc";
  const isCompelte = item.reserve_type === "co";

  return (
    <>
      <Flex
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          bgColor: bgColor || "graySky.100",
          width: "100%",
          rounded: rounded || "8px",
          color,
          p: { base: 2, md: 5 },
          my: { base: 1, md: 2 },
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <Flex gap={{ base: 1, md: 2 }} alignItems="center">
          <AreaBox fontSize={responsiveFontSize}>{firstArea}</AreaBox>
          <AreaBox fontSize={responsiveFontSize}>{secondArea}</AreaBox>
          <AreaBox fontSize={responsiveFontSize}>{thirdArea}</AreaBox>
          <AreaBox fontSize={responsiveFontSize} display={displayfourthArea}>
            {fourthArea}
          </AreaBox>
        </Flex>

        <Flex gap={2} justifyContent="center" alignItems="center" ml={2}>
          <Button
            width={{ base: "100%", md: "40%" }}
            onClick={() => handleProcessPaymentCharge(item)}
            size={{ base: "xs", md: "sm" }}
            bg="transparent"
            color="blue"
            px={2}
            isDisabled={isCancelled || isCompelte ? true : isDisabled}
          >
            {isCompelte ? "پرداخت شده" : "پرداخت"}
          </Button>
          <Button
            width={{ base: "100%", md: "40%" }}
            onClick={() => handleOpenModal(item)}
            display={display}
            isDisabled={isCancelled ? true : isDisabled}
            size={{ base: "xs", md: "sm" }}
            bg="transparent"
            color={isPaymentTable || isCancelled ? "gray" : "red"}
            px={2}
          >
            {isCancelled ? "لغو شده" : "لغو نوبت"}
          </Button>
        </Flex>
      </Flex>

      <CustomModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        isCancelled
        title="لغو نوبت"
        description="آیا از لغو این نوبت مطمئن هستید؟"
        confirmText="لغو"
        cancelText="بازگشت"
        onConfirm={handleConfirmCancel}
        onCancel={handleCloseModal}
      />
    </>
  );
};

export default Lists;

const AreaBox = ({ children, display = "block", fontSize }) => (
  <Box
    flex="0 0 auto"
    minWidth={{ base: "100px", md: "120px" }}
    textAlign="right"
    fontSize={fontSize}
    display={display}
    overflow="hidden"
    whiteSpace="nowrap"
    textOverflow="ellipsis"
    py={1}
    mr={2}
  >
    {children}
  </Box>
);
