import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const InputControl = ({
  name,
  value,
  handleChange,
  label,
  placeholder,
  type = "text",
}) => {
  return (
    <FormControl mb={4}>
      <FormLabel>{label}</FormLabel>
      <Input
        name={name}
        value={value}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </FormControl>
  );
};

export default InputControl;
