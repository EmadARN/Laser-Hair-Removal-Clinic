import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const TextInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) => {
  return (
    <FormControl>
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

export default TextInput;
