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
  Box,
} from "@chakra-ui/react";
import { AdminTableData } from "./TablwData";
const ModalAdmin = ({ isOpen, onClose, setOperatorInfo }) => {
  const buttonHandler = (operator) => {
  setOperatorInfo(operator.id)
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"xs"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody mt={4} display={"flex"} justifyContent={"center"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={2}
              height={"auto"}
            >
              {AdminTableData.map((operator) => {
                return (
                  <>
                    <Box
                      m={3}
                      width={"100%"}
                      key={operator.id}
                      display={"block"}
                    >
                      <Button onClick={() => buttonHandler(operator)}>
                        {operator.morning_shift}
                      </Button>
                    </Box>
                  </>
                );
              })}
            </Box>
          </ModalBody>

          <ModalFooter display={"flex"} justifyContent={"center"} mt={4}>
            <Button colorScheme="blue" mr={3}>
              افزودن اپراتور
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalAdmin;
