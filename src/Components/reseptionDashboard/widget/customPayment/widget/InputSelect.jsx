import React from 'react'


  import { Select } from '@chakra-ui/react';


const InputSelect = () => {
  return (
    <Select placeholder="انتخاب کنید">

      <option value="option1"> نقدی</option>
      <option value="option2"> کارتخوان</option>
      <option value="option3"> کارت به کارت</option>
    </Select>
  )
}

export default InputSelect

