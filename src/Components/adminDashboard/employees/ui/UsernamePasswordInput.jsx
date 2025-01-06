import React from "react";
import {
  Button,
  InputGroup,
  InputLeftElement,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

import TextInput from "../../shared/Inputs";
const UsernamePasswordInput = ({
  label,
  name,
  value,
  placeholder,
  isPassword,
  showPassword,
  setShowPassword,
  handleChange,
}) => (
  <FormControl mt={4}>
    <FormLabel>{label}</FormLabel>
    <InputGroup size="lg">
      <TextInput
        padding={4}
        name={name}
        type={isPassword && !showPassword ? "password" : "text"}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {isPassword && (
        <InputLeftElement>
          <Button
            h="1.75rem"
            size="sm"
            onClick={() => setShowPassword((prev) => !prev)}
            variant="text"
          >
            {showPassword ? (
              <IoEyeOutline size={18} />
            ) : (
              <FaRegEyeSlash size={18} />
            )}
          </Button>
        </InputLeftElement>
      )}
    </InputGroup>
  </FormControl>
);
export default UsernamePasswordInput;
