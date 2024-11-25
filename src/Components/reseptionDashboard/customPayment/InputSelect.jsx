import React, { useState } from "react";
import { Select } from "@chakra-ui/react";

const InputSelect = ({ selectedValue, handlePaymentChange }) => {
  return (
    <div>
      <Select
        placeholder="انتخاب کنید"
        value={selectedValue}
        onChange={(event) => handlePaymentChange(event)}
      >
        <option value="ca">نقدی</option>
        <option value="cr">کارتخوان</option>
      </Select>
    </div>
  );
};

export default InputSelect;
