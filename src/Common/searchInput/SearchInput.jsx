// import React, { useState } from 'react';
// import {
//   Input,
//   InputGroup,
//   InputLeftElement,
//   InputRightElement,
// } from '@chakra-ui/react';
// import { Search2Icon, SmallCloseIcon } from '@chakra-ui/icons';

// const SearchComponent = ({
//   data = [],
//   filterKeys = [],
//   placeholder = 'Search...',
//   size = 'md',
//   onSearch,
// }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setSearchQuery(value);
//     if (onSearch) {
//       const filteredData = filterData(value);
//       onSearch(filteredData);
//     }
//   };

//   const filterData = (query) => {
//     if (!query) return data;
//     return data.filter((item) =>
//       filterKeys.some((key) =>
//         String(item[key]).toLowerCase().includes(query.toLowerCase())
//       )
//     );
//   };

//   return (
//     <InputGroup sx={{ display: 'flex', alignItems: 'center' }} width={"100%"}>
//       <InputRightElement
//         pointerEvents="none"
//         color="gray.500"
//         fontSize="1.8em"
//         pt={2}
//         pr={2}
//       >
//         <Search2Icon width={{base:"10px",md:"20px"}} />
//       </InputRightElement>
//       <Input
//         _focus={{
//           borderColor: 'brand.400',
//           outline: 'none',
//           boxShadow: 'none',
//           zIndex: 'unset',
//         }}
//         value={searchQuery}
//         onChange={handleChange}
//         placeholder={placeholder}
//         size={size}
//       />
//       <InputLeftElement pt={2}>
//         <SmallCloseIcon />
//       </InputLeftElement>
//     </InputGroup>
//   );
// };

// export default SearchComponent;

import React, { useState } from "react";
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

  console.log("datas", datas);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    console.log("searchQuery", searchQuery);

    if (datas.length > 0) {
      const result = datas.filter((item) => {
        const name = utilityDatas
          ? getCustomerName(item.user, utilityDatas)
          : item.name + " " + item.last_name || "";
        console.log("nmae", name);

        return name && name.toLowerCase().includes(value.toLowerCase());
      });

      setFilteredData(result);
      if (onSearch) {
        onSearch(result);
      }
      console.log("filteredData", filteredData);
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
    <InputGroup width="100%">
      <InputRightElement color="gray.500">
        <Search2Icon width={{ base: "10px", md: "20px" }} />
      </InputRightElement>
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
        <InputLeftElement>
          <IconButton
            aria-label="Clear search"
            icon={<SmallCloseIcon />}
            size="xs"
            onClick={clearSearch}
            variant="ghost"
          />
        </InputLeftElement>
      )}
    </InputGroup>
  );
};

export default SearchComponent;
