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
import { toPersianDigits } from "@/utils/toPersianDigits";
import { extractDate, extractTime } from "@/utils/extractDate";
import { formatNumber } from "@/utils/formatNumber";

const SessionDetailsModal = ({ isOpen, onClose, sessionDetails }) => {
  const toPersian = (extract, value) => {
    return toPersianDigits(extract(value));
  };

  const isCancelled = sessionDetails?.reserveStatus === "کنسل شده";
  const isPaid = sessionDetails?.paid;
  const sessionInfo = [
    {
      label: "وضعیت",
      value: sessionDetails?.reserveStatus,
      color: isCancelled ? "red.500" : isPaid ? "gray.400" : "green.500",
    },
    {
      label: "تاریخ جلسه",
      value: toPersian(extractDate, sessionDetails?.sessionDate),
    },
    {
      label: "زمان",
      value: toPersian(extractTime, sessionDetails?.sessionTime),
    },
    { label: "نام ناحیه", value: sessionDetails?.laserArea },
    {
      label: "قیمت کل",
      value: `${
        sessionDetails?.totalPrice && formatNumber(sessionDetails?.totalPrice)
      } تومان`,
    },
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
              <Text color={item.color || "gray.700"}>{item.value}</Text>
            </Flex>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SessionDetailsModal;
