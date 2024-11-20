import React, { useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { CiEdit } from "react-icons/ci";
import EditUserModal from "./EditUserModal";
import CustomButton from "@/Common/customeButton/CustomeButton";

const UserInfoBox = ({
  onClose,
  isOpen,
  onOpen,
  handleInputChange,
  passwordChange,
  userNames,
  changePasswordAsync,
  setPasswordChange,
}) => {
  const [username, setUsername] = useState(userNames.username);

  return (
    <Box
      width={{ base: "170%", md: "100%" }}
      display={"flex"}
      flexDirection={"column"}
      gap={3}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box width={"100%"}>
        <Text fontWeight={"bold"} textAlign={"right"} color={"#111"}>
          اطلاعات کاربری
        </Text>
      </Box>
      <Box
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        bgColor={"graySky.100"}
        width={"100%"}
        height={"auto"}
        p={6}
        display={"flex"}
        justifyContent={"space-between"}
        borderRadius={"8px"}
      >
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <Box mb={3}>
            <Text fontSize={{ base: "15px", md: "17px" }} mb={2} color={"#555"}>
              نام کاربری
            </Text>
            <Text fontSize={{ base: "15px", md: "17px" }} fontWeight={"bold"}>
              {username}
            </Text>
          </Box>

          <Box>
            <Text mb={2} color={"#555"}>
              رمز عبور
            </Text>
            <Text fontSize={"20px"} fontWeight={"bold"}>
              **********
            </Text>
          </Box>
        </Box>

        <Box>
          <CustomButton
            value={"ghost"}
            fontWeight={"bold"}
            leftIcon={<CiEdit size={"25px"} />}
            onClick={onOpen}
          >
            <Text fontSize={{ base: "15px", md: "17px" }}>ویرایش</Text>
          </CustomButton>
        </Box>
      </Box>

      {/* استفاده از مودال جدید */}
      <EditUserModal
        handleInputChange={handleInputChange}
        passwordChange={passwordChange}
        setPasswordChange={setPasswordChange}
        changePasswordAsync={changePasswordAsync}
        isOpen={isOpen}
        onClose={onClose}
        username={username}
        setUsername={setUsername}
      />
    </Box>
  );
};

export default UserInfoBox;
