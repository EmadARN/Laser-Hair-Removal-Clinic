import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const InputControl = ({
  name,
  value,
  onChange,
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
        onChange={onChange}
        placeholder={placeholder}
      />
    </FormControl>
  );
};

export default InputControl;
