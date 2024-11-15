import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const InputControl = ({ name, value, handleChange, placeholder }) => {
  return (
    <FormControl mb={4}>
      <FormLabel>{placeholder}</FormLabel>
      <Input
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </FormControl>
  );
};

export default InputControl;
