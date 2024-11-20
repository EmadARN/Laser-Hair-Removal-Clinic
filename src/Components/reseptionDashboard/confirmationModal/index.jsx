import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { Checkbox } from "@chakra-ui/react";
import {
  modalHeader,
  modalCloseButton,
  checkBox,
  ButtonStyle,
  returnButton,
} from "./style";

export default function ConfirmationModal() {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent sx={{ direction: "ltr ", position: "relative" }}>
          <Box sx={{ height: "50px" }}>
            <ModalHeader sx={modalHeader}>لغو نوبت</ModalHeader>
            <ModalCloseButton sx={modalCloseButton} />
          </Box>

          <ModalBody textAlign={"end"}>
            <Text>آِیا از لغو رضا فرضی پور مطئن هستید</Text>

            <Checkbox defaultChecked sx={checkBox}>
              <Text sx={{ pr: 2, fontSize: "12px", fontWeight: "bold" }}>
                بازگرداندن ودیعه به مشتری
              </Text>
            </Checkbox>
          </ModalBody>
          <ModalFooter>
            <Box sx={{ height: "50px" }}>
              <Button sx={ButtonStyle} onClick={onClose}>
                لغو نوبت
              </Button>
              <Button sx={returnButton} onClick={onClose}>
                بازگشت
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
