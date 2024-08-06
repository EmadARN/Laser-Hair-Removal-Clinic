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
import { MdOutlineAddBox } from "react-icons/md";

const ModalAdmin = ({ isOpen, onClose, setOperatorInfo }) => {
  const buttonHandler = (operator) => {
    setOperatorInfo(operator.id);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"xs"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody mt={4} display={"flex"} justifyContent={"center"} >
            <Box
            
              display={"flex"}
              flexDirection={"column"}
            
              alignItems={'center'}
              justifyContent={'center'}
              height={"auto"}
            >
              {AdminTableData.map((operator) => {
                return (
                  <>
                    <Box
                      m={3}
                      width={"100%"}
                      maxWidth={'70%'}
                      key={operator.id}
                      
                    >
                      <Button variant='ghost' onClick={() => buttonHandler(operator)}>
                        {operator.morning_shift}
                      </Button>
                    </Box>
                  </>
                );
              })}

              <Button
              mt={2}
                leftIcon={<MdOutlineAddBox size="25px" />}
                colorScheme="blue"
                variant="ghost"
                mr={3}
              >
                افزودن اپراتور
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalAdmin;
