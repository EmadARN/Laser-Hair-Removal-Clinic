import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Input,
  InputGroup,
  Box,
  Text,
  InputLeftElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const EditUserModal = ({
  isOpen,
  onClose,
  username,
  passwordChange,
  setPasswordChange,
  editUserName,
  handleInputChange,
}) => {
  const [password, setPassword] = useState("");
  const [previousPassword, setPreviousPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEditUserName = () => {
    editUserName(username, password, previousPassword);
  };

  const toggleShowPassword = () => {
    setPasswordChange((prev) => ({
      ...prev,
      showPassword: !prev.showPassword,
    }));
  };

  const renderPasswordInput = (label, name, value) => (
    <Box mb={4}>
      <Text>{label}</Text>
      <InputGroup>
        <Input
          p={4}
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          onChange={handleInputChange} // از پراپس استفاده می‌شود
          placeholder={label}
        />
        <InputLeftElement>
          <Button variant="ghost" onClick={toggleShowPassword}>
            {showPassword ? <ViewOffIcon /> : <ViewIcon />}
          </Button>
        </InputLeftElement>
      </InputGroup>
    </Box>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>ویرایش اطلاعات کاربری</ModalHeader>
        <ModalBody>
          <Box mb={4}>
            <Text>نام کاربری</Text>
            <Input
              value={username}
              readOnly // نام کاربری را فقط بخوانید
              placeholder="نام کاربری خود را وارد کنید"
            />
          </Box>
          {renderPasswordInput("رمز عبور جدید", "password", password)}
          {renderPasswordInput(
            "رمز عبور قبلی",
            "previousPassword",
            previousPassword
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleEditUserName}>
            ثبت
          </Button>
          <Button variant="ghost" onClick={onClose}>
            بستن
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditUserModal;
