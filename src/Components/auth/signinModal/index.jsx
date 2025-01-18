import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Box,
} from "@chakra-ui/react";
import VerificationNumber from "./ui/verificationNumber/VerificationNumber";
import VerificationCode from "./ui/verificationCode/VerificationCode";
import useVerificationNumber from "./logic/useVerificationNumber";
import useVerificationCode from "./logic/useVerificationCode";



const MainModal = ({ onClose, onOpen, isOpen }) => {
  const { page, setPage, handlePhoneNumberSubmit, loading } =
    useVerificationNumber();

  const { inputCode, setInputCode, time, handleCodeSubmit, phoneNumber } =
    useVerificationCode(page);

  const handleBackClick = () => {
    setPage(page - 1);
    localStorage.removeItem("phoneNumber");
  };

  return (
    <Modal isOpen={isOpen} isCentered>
      <ModalOverlay /> {/* این قسمت بکدراپ را ایجاد می‌کند */}
      <ModalContent>
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          {page === 0 ? (
            <VerificationNumber
              page={page}
              setPage={setPage}
              onOpen={onOpen}
              onClose={onClose}
              isOpen={isOpen}
              onSubmit={handlePhoneNumberSubmit}
              loading={loading}
            />
          ) : page === 1 ? (
            <VerificationCode
              page={page}
              setPage={setPage}
              onOpen={onOpen}
              onClose={onClose}
              isOpen={isOpen}
              phoneNumber={phoneNumber}
              inputCode={inputCode}
              setInputCode={setInputCode}
              time={time}
              handleBackClick={handleBackClick}
              onSubmit={handleCodeSubmit}
              loading={loading}
            />
          ) : null}
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default MainModal;
