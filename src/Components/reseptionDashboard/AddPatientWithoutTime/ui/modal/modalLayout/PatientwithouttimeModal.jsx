import {
  Box,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const PatientwithouttimeModal = ({
  isOpen,
  resetForm,
  setStep,
  step,
  renderStepContent,
  setInputsData,
  initialInputState,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={resetForm} size="lg">
      <ModalOverlay />
      <ModalContent p={6} height="530px" overflowY="scroll">
        <Box
          mb={5}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex alignItems="center" gap={2}>
            <Box display={step === 0 ? "none" : "flex"}>
              <FaArrowRight
                onClick={() => {
                  setInputsData(initialInputState);
                  setStep(0);
                }}
                cursor="pointer"
                fontSize="17px"
              />
            </Box>

            <Text fontWeight="bold">
              {step === 0 ? "مراجع بین نوبت" : "مراجع جدید"}
            </Text>
          </Flex>
          <MdCancel size={"18px"} cursor="pointer" onClick={resetForm} />
        </Box>
        {renderStepContent()}
      </ModalContent>
    </Modal>
  );
};

export default PatientwithouttimeModal;
