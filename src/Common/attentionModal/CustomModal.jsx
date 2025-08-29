import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
} from "@chakra-ui/react";
import Loading from "../loading";

const CustomModal = ({
  isOpen,
  onClose,
  title,
  description,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  loading,
  isCancelled,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          <Text mb={4}>{description}</Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onCancel} variant="outline" ml={3}>
            {cancelText || "بازگشت"}
          </Button>
          <Button
            onClick={() => {
              if (isCancelled) {
                onCancel?.();
                window.location.reload();
              } else {
                onConfirm?.();
              }
            }}
            colorScheme="red"
          >
            {loading ? <Loading /> : confirmText || "تایید"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
