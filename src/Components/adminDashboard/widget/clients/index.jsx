import React from "react";
import AccordionLists from "../../common/AccordionLists";
import SearchInput from "@/Common/searchInput/SearchInput";
import { Box } from "@chakra-ui/react";

const Clients = () => {
  return (
    <>
      <Box sx={{ py: 6 }}>
        <SearchInput placeholder="جستجو در بین مراجعین" size="lg" />
      </Box>
      <Box>
        <AccordionLists />
      </Box>
    </>
  );
};

export default Clients;
