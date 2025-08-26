import React, { useState, useEffect } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { Search2Icon, SmallCloseIcon } from "@chakra-ui/icons";
import { getCustomerName } from "@/utils/getCustomerName";

const SearchComponent = ({
  placeholder = "جستجو...",
  size = "md",
  datas = [],
  onSearch,
  utilityDatas,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(datas);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    const result = datas.filter((item) => {
      const name = utilityDatas
        ? getCustomerName(item.user, utilityDatas)
        : `${item.name || ""} ${item.last_name || ""}`;

      return name.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredData(result);
    if (onSearch) {
      onSearch(result);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredData(datas);
    if (onSearch) {
      onSearch(datas);
    }
  };

  return (
    <InputGroup width="100%" height="100%">
      <InputLeftElement color="gray.500">
        <Search2Icon width={{ base: "10px", md: "20px" }} />
      </InputLeftElement>

      <Input
        value={searchQuery}
        onChange={handleChange}
        placeholder={placeholder}
        size={size}
        _focus={{
          borderColor: "brand.400",
          outline: "none",
          boxShadow: "none",
        }}
      />

      {searchQuery && (
        <InputRightElement>
          <IconButton
            aria-label="Clear search"
            icon={<SmallCloseIcon />}
            size="xs"
            onClick={clearSearch}
            variant="ghost"
          />
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default SearchComponent;
