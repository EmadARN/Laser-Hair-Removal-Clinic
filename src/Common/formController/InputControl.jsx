import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

const InputControl = ({
  name,
  value,
  onChange,
  onBlur,
  label,
  placeholder,
  type = "text",
  error,
}) => {
  return (
    <FormControl mb={4} isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      <Input
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default InputControl;
