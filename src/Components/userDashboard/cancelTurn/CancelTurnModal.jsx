import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
const CancelTurnModal = ({ onOpen, onClose, isOpen }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent w={80}>
        <Box p={5} display="flex" justifyContent="flex-start" width="100%">
          <Text fontWeight={"bold"}>لغو نوبت</Text>
        </Box>

        <ModalBody pb={6}>
          <Text
            mb={3}
            fontSize={{ base: "sm", sm: "md", md: "md" }}
            color="#666"
            fontWeight="300"
          >
            آیا از لغو نوبت خود اطمینان دارید؟
          </Text>
        </ModalBody>

        <ModalFooter display="flex" justifyContent="flex-end" width="100%">
          <Button ml={3} onClick={onClose} width="30%" color="#111">
            بازگشت
          </Button>

          <Button width="30%" color={"red"}>
            لغو نوبت
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CancelTurnModal;
