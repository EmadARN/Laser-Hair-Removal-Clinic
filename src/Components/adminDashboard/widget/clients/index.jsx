import React from "react";
import AccordionLists from "../../common/AccordionLists";
import SearchInput from "@/Common/searchInput/SearchInput";

const Clients = () => {
  return (
    <>
      <SearchInput placeholder="جستجو در بین مراجعین" size="lg" />
      <AccordionLists />
    </>
  );
};

export default Clients;
