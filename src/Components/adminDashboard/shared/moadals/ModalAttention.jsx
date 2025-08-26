import {
  Box,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const ModalAttention = ({
  btn,
  HeaderContent,
  BodyContent,
  FooterContent,
  isDelete,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box sx={{ display: !isDelete ? "none" : "block" }}>
      <IconButton onClick={onOpen} icon={btn} />

      <Modal isOpen={isOpen} onClose={onClose}>
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
              {HeaderContent}
            </ModalHeader>
            <ModalCloseButton
              sx={{
                all: "unset",
                cursor: "pointer",
                pr: 1,
                fontSize: "12px",
                position: "absolute",
                left: "14px",
                top: "9px",
              }}
            />
          </Box>
          <ModalBody py={6}>{BodyContent}</ModalBody>

          <ModalFooter pt={10}>{FooterContent}</ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ModalAttention;
