import React, { useState } from 'react';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { Search2Icon, SmallCloseIcon } from '@chakra-ui/icons';

const SearchComponent = ({
  data = [],
  filterKeys = [],
  placeholder = 'Search...',
  size = 'md',
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (onSearch) {
      const filteredData = filterData(value);
      onSearch(filteredData);
    }
  };

  const filterData = (query) => {
    if (!query) return data;
    return data.filter((item) =>
      filterKeys.some((key) =>
        String(item[key]).toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <InputGroup sx={{ display: 'flex', alignItems: 'center' }}>
      <InputRightElement
        pointerEvents="none"
        color="gray.500"
        fontSize="1.8em"
        pt={2}
        pr={2}
      >
        <Search2Icon />
      </InputRightElement>
      <Input
        _focus={{
          borderColor: 'brand.400',
          outline: 'none',
          boxShadow: 'none',
          zIndex: 'unset',
        }}
        value={searchQuery}
        onChange={handleChange}
        placeholder={placeholder}
        size={size}
      />
      <InputLeftElement pt={2}>
        <SmallCloseIcon />
      </InputLeftElement>
    </InputGroup>
  );
};

export default SearchComponent;
