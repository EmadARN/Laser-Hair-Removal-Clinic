import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";

const SessionDetailsModal = ({ isOpen, onClose, sessionDetails }) => {
  const sessionInfo = [
    { label: "وضعیت", value: sessionDetails?.reserveStatus },
    { label: "تاریخ جلسه", value: sessionDetails?.sessionDate },
    { label: "زمان", value: sessionDetails?.sessionTime },
    { label: "نام ناحیه", value: sessionDetails?.laserArea },
    { label: "قیمت کل", value: `${sessionDetails?.totalPrice} تومان` },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <Box sx={{ height: "50px" }}>
          <ModalHeader
            sx={{
              whiteSpace: "nowrap",
              position: "absolute",
              right: "0px",
              top: "-5px",
              fontSize: "18px",
            }}
          >
            گزارش جلسه
          </ModalHeader>
          <ModalCloseButton
            sx={{
              all: "unset",
              cursor: "pointer",
              pr: 1,
              fontSize: "12px",
              position: "absolute",
              left: "14px",
              top: "12px",
            }}
          />
        </Box>
        <ModalBody>
          {sessionInfo.map((item, index) => (
            <Flex
              justifyContent="space-between"
              p={2}
              key={index}
              mt={index === 0 ? 2 : 0}
            >
              <Text color="gray.500">{item.label}:</Text>
              <Text color="gray.700">{item.value}</Text>
            </Flex>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SessionDetailsModal;
