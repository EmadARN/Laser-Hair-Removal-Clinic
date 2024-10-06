import React from "react";
import AccordionLists from "../../common/AccordionLists";
import SearchInput from "@/Common/searchInput/SearchInput";
import { Box } from "@chakra-ui/react";

const Clients = () => {
  return (
    <>
      <Box sx={{ py: { base: 4, md: 6 }, px: { base: 2, md: 4 } }}>
        <SearchInput placeholder="جستجو در بین مراجعین" size="lg" />
      </Box>
      <Box px={{ base: 2, md: 4 }}>
        
        <AccordionLists />
      </Box>
    </>
  );
};

export default Clients;
