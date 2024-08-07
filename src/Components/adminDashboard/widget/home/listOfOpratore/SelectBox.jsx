import { Button, ButtonGroup, Select } from "@chakra-ui/react";
import React from "react";

const SelectBox = ({ oprators, shiftsName }) => {
  return (
    <ButtonGroup size="sm" isAttached variant="outline" sx={{ w: "100%" }}>
      <Button
        sx={{
          width: "100%",
          borderRadius: "0 3px 3px 0",
          fontSize: { base: "12px", md: "14px" },
          cursor: "default",
          ":hover": {
            bgColor: "transparent",
          },
        }}
        size="md"
      >
        {oprators[0] ? shiftsName : shiftsName}
      </Button>
      <Select
        placeholder="-"
        sx={{
          width: "100%",
          borderRadius: "3px 0px 0px 3px",
          cursor: "pointer",
        }}
      >
        {oprators.map((operator) => (
          <option key={operator.id}>{operator.name}</option>
        ))}
      </Select>
    </ButtonGroup>
  );
};

export default SelectBox;
