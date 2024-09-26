import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Button,
  InputLeftElement,
} from "@chakra-ui/react";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";

const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  showPassword,
}) => (
  <FormControl mt={4}>
    <FormLabel>{label}</FormLabel>
    <InputGroup size="lg">
      <Input
        onChange={onChange}
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
      />
      {showPassword && (
        <InputLeftElement>
          <Button
            h="1.75rem"
            size="sm"
            onClick={showPassword.onClick}
            variant="text"
          >
            {showPassword.show ? (
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
export default InputField;
