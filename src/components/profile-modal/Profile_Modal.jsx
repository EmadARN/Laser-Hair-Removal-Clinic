import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Box,
  Text,
} from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
export default function Profile_Modal({onClose,onOpen,isOpen}) {
  
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w={80}>
          <Box p={5} display="flex" justifyContent="space-between" width="100%">
            <Text>ورود/ثبت نام</Text>
            <MdCancel size={"24px"} cursor={"pointer"} onClick={onClose} />
          </Box>

          <ModalBody pb={6}>
            <Text
              mb={5}
              fontSize={{ base: "sm", sm: "md", md: "md" }}
              color="#888"
              fontWeight="300"
            >
              جهت رزور نوبت لطفا ابتدا وارد حساب خود شوید و یا ثبت نام کنید.
            </Text>

            <FormControl mt={4}>
              <FormLabel color="#888">شماره موبایل </FormLabel>
              <Input />
            </FormControl>
          </ModalBody>

          <ModalFooter display="flex" justifyContent="center" width="100%">
            <Button
              bgColor="#9c91e0"
              width="100%"
              color="white"
              sx={{ "&:hover": { bgColor: "#9c91e0" } }}
            >
              ادامه
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
