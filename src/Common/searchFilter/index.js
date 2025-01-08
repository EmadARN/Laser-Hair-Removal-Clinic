import React, { useState } from "react";

const SearchFilter = ({ data, searchQuery, setSearchQuery, filterKeys }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterData = () => {
    if (!searchQuery) return data; 
    return data.filter((item) =>
      filterKeys.some((key) =>
        String(item[key]).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  const filteredData = filterData();

  return { filteredData, handleChange };
};

export default SearchFilter;
