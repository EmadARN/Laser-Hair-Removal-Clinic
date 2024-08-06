import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { Search2Icon, SmallCloseIcon } from "@chakra-ui/icons";
const SearchInput = ({ placeholder, size }) => {
  return (
    <InputGroup sx={{ display: "flex", alignItems: "center" }}>
      <InputRightElement
        pointerEvents="none"
        color="gray.500"
        fontSize="1.8em"
        pt={2}
        pr={2}
      >
        <Search2Icon />
      </InputRightElement>
      <Input placeholder={placeholder} size={size} />
      <InputLeftElement pt={2}>
        <SmallCloseIcon />
      </InputLeftElement>
    </InputGroup>
  );
};

export default SearchInput;
