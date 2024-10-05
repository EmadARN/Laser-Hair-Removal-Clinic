import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const TextInput = ({ label, name, value, onChange, placeholder }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </FormControl>
  );
};

export default TextInput;
