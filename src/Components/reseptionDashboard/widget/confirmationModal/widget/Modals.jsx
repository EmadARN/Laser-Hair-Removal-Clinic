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
export default function Modals() {
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
            <ModalHeader
              sx={{
                whiteSpace: "nowrap",
                position: "absolute",
                right: "0px",
                top: "-5px",
                fontSize: "18px",
              }}
            >
              لغو نوبت
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

          <ModalBody textAlign={"end"}>
            <Text>آِیا از لغو رضا فرضی پور مطئن هستید</Text>

            <Checkbox
              defaultChecked
              sx={{
                display: "flex",
                flexDir: "row-reverse",
                pr: 2,
                pt: 3,
              }}
            >
              <Text sx={{ pr: 2, fontSize: "12px", fontWeight: "bold" }}>
                بازگرداندن ودیعه به مشتری
              </Text>
            </Checkbox>
          </ModalBody>
          <ModalFooter>
            <Box sx={{ height: "50px" }}>
              <Button
                sx={{
                  position: "absolute",
                  right: "25px",
                  bottom: "8px",
                  fontSize: "14px",
                }}
                onClick={onClose}
              >
                لغو نوبت
              </Button>
              <Button
                sx={{
                  position: "absolute",
                  left: "14px",
                  bottom: "8px",
                  fontSize: "14px",
                }}
                onClick={onClose}
              >
                بازگشت
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
