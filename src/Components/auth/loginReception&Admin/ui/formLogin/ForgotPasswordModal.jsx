import React from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
} from "@chakra-ui/react";
import CustomButton from "@/Common/customeButton/CustomeButton";
import { useForgotPassword } from "../../logic/useForgotPassword";

const ForgotPasswordModal = ({ isOpen, onClose, dispatch }) => {
  const { step, formData, handleInputChange, handleNextStep } =
    useForgotPassword(dispatch, onClose);

  return (
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
            {step === 0 ? "ورود نام کاربری" : "تغییر رمز عبور"}
          </ModalHeader>
          <ModalCloseButton
            sx={{
              all: "unset",
              cursor: "pointer",
              pr: 1,
              fontSize: "12px",
              position: "absolute",
              left: "18px",
              top: "16px",
            }}
          />
        </Box>

        <ModalBody>
          {step === 0 ? (
            <Input
              placeholder="نام کاربری"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              mb={3}
            />
          ) : (
            <>
              <Input
                placeholder="نام کاربری"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                mb={3}
                isDisabled
              />
              <Input
                placeholder="کد"
                name="code"
                value={formData.code}
                onChange={handleInputChange}
                mb={3}
              />
              <Input
                placeholder="رمز عبور جدید"
                type="text"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                mb={3}
              />
            </>
          )}
        </ModalBody>

        <ModalFooter>
          {step === 0 ? (
            <CustomButton
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                w: "100%",
              }}
              colorScheme="blue"
              onClick={handleNextStep}
            >
              ادامه
            </CustomButton>
          ) : (
            <>
              <CustomButton colorScheme="blue" mr={3} onClick={handleNextStep}>
                ثبت
              </CustomButton>
              <Button variant="ghost" onClick={() => setStep(0)}>
                بازگشت
              </Button>
            </>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ForgotPasswordModal;
