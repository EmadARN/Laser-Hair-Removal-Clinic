import React from "react";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import { getCustomerName } from "@/utils/getCustomerName";
import { ProfileField } from "./ProfileField";

const PatientsProfile = ({ isOpen, onClose, profileInfo, cutomerList }) => {
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
          <Flex mb={4} justifyContent="space-between" alignItems="center">
            <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }}>
              پروفایل مراجع
            </Text>
            <MdCancel onClick={onClose} style={{ cursor: "pointer" }} />
          </Flex>
          <Box
            display="flex"
            flexDirection="column"
            gap={4}
            width="100%"
            py={4}
          >
            <ProfileField
              label="نام و نام خانوادگی"
              value={
                profileInfo
                  ? getCustomerName(profileInfo.user, cutomerList)
                  : ""
              }
            />
            <ProfileField
              label="شماره همراه"
              value={profileInfo ? profileInfo.user : ""}
            />
            <ProfileField
              label="تعداد جلسات"
              value={profileInfo ? profileInfo.sessionLength : ""}
            />
            <ProfileField
              label="آخرین جلسه"
              value={profileInfo ? profileInfo.reserve_time_str : ""}
            />
          </Box>
          <Box width="100%" mt={4}>
            <Button
              width="100%"
              bgColor="brand.400"
              color="white"
              _hover={{ bgColor: "purple.400" }}
            >
              ورود به شارژ
            </Button>
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default PatientsProfile;
