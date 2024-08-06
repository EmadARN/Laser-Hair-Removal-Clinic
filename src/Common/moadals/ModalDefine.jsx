import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
const ModalDefine = ({ renderContent, displayHeader, headerContent }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const renderContents = renderContent();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <Box sx={{ height: "50px", display: displayHeader }}>
            <ModalHeader
              sx={{
                whiteSpace: "nowrap",
                position: "absolute",
                right: "0px",
                top: "-5px",
                fontSize: "18px",
              }}
            >
              {headerContent}
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
          <ModalBody py={6}>{renderContents.body}</ModalBody>

          <ModalFooter pt={10}>{renderContents.footer}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalDefine;
