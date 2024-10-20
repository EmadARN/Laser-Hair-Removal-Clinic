import React from "react";
import {
  Grid,
  Box,
  Text,
  Input,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import { firstGrid, firstBox, seccondBox } from "./style";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
const PatientWithoutTime = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<FaPlus />}
        sx={{
          color: "blue",
          w: "100%",
          h: "100%",
          py: 3,
          px: 8,
        }}
        variant="outline"
        colorScheme={"blue"}
      >
        مراجع بین نوبت
      </Button>

      <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={6}>
          
            <Box sx={firstBox}>
              
                <Text fontWeight={"bold"}>مراجع جدید</Text>
                <MdCancel cursor={'pointer'} onClick={onClose}/>
              </Box>

              <Box
              mb={4}
                display={"flex"}
                flexDirection={"column"}
                gap={8}
                width={"100%"}
              >
                <Input placeholder=" نام و نام خانوادگی" size="md" />
                <Input placeholder=" کد ملی" size="md" />
                <Input placeholder=" شماره همراه" size="md" />
                <Input placeholder=" شماره ثابت" size="md" />
              </Box>

              <Box width={"100%"} mt={"4"}>
                <Button width={"100%"}>تایید اطلاعات و ادامه</Button>
              </Box>
      
     
        </ModalContent>
      </Modal>
    </>
  );
};

export default PatientWithoutTime;
