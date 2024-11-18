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
  passwordChange,
  changePasswordAsync,
  handleInputChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const renderPasswordInput = (label, name) => (
    <Box mb={4}>
      <Text>{label}</Text>
      <InputGroup>
        <Input
          p={4}
          type={showPassword ? "text" : "password"}
          name={name}
          value={passwordChange[name]}
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
          {renderPasswordInput("رمز عبور جدید", "password")}
          {renderPasswordInput("رمز عبور قبلی", "old_password")}
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => changePasswordAsync(passwordChange)}
          >
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
