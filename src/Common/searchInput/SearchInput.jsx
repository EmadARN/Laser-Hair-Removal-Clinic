import React from 'react'
import { Input } from '@chakra-ui/react'
const SearchInput = ({props}) => {
  return (
    <Input placeholder='large size' size={props.size} />
    //size:lg,sm,md
  )
}

export default SearchInput