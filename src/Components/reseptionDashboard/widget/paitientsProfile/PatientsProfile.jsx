import React from "react";
import { Grid, Box, Text, Input, Button, Flex } from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import { FirstGrid } from "./style";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
const PatientsProfile = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent
        p={{ base: 3, md: 5 }}
        maxW={{ base: "90%", md: "500px" }}
        maxH="100vh"
        overflowY="auto"
      >
        <Box>
          <Flex mb={4} justifyContent={"space-between"}>
            <Text fontWeight={"bold"}> پروفایل مراجع</Text>
            <MdCancel onClick={onClose} />
          </Flex>

          <Box display={"flex"} flexDirection={"column"} gap={5} width={"100%"}>
            <label htmlFor="">نام و نام خانوادگی</label>
            <Input size="md" defaultValue={"ملیکا عبدالرزاقی"} />

            <label htmlFor=""> شماره همراه </label>
            <Input
              placeholder=" شماره همراه"
              size="md"
              defaultValue={"09190978042 "}
            />
            <label htmlFor=""> تعداد جلسات </label>
            <Input placeholder=" تعداد جلسات" size="md" />
            <label htmlFor=""> آخرین جلسه</label>
            <Input placeholder=" اخرین جلسه" size="md" />

            <label htmlFor=""> اپراتور </label>
            <Input placeholder="  نام اپراتور" size="md" />
          </Box>

          <Box width={"100%"} mt={"4"}>
            <Button width={"100%"} bgColor={"lightblue"}>
              {" "}
              ورود به شارژ{" "}
            </Button>
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default PatientsProfile;
