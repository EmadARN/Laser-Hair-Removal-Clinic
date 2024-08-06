import React from "react";
import { Input } from "@chakra-ui/react";
const SearchInput = (placeholder, size) => {
  return (
    <Input placeholder={placeholder} size={size} />
    //size:lg,sm,md
  );
};

export default SearchInput;
