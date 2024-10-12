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
  IconButton,
} from "@chakra-ui/react";
const ModalDefine = ({
  renderContent,
  displayHeader,
  headerContent,
  btn,
  iconBtnDisply,
  BtnDisply,
  bodyContent,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const modalBodyStyle = {
    maxHeight: "420px",
    overflowY: "auto",
    py: 6,
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "gray.500",
      borderRadius: "3px",
    },
  };


  return (
    <>
      <IconButton onClick={onOpen} icon={btn} display={iconBtnDisply} />
      
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
          <ModalBody sx={modalBodyStyle}>
            {bodyContent && bodyContent.body}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalDefine;
