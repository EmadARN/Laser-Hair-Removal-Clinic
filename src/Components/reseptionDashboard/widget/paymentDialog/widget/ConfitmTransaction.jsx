import React from 'react'
import {Button,Box,Text} from '@chakra-ui/react'
const ConfitmTransaction = () => {
  return (
  <Box width={'100%'} display={'flex'} justifyContent={'space-between'} p={2}>
    <Button bgColor={'#364cc4'} color={'white'} py={6}>پرداخت</Button>
    <Box display={'flex'} flexDirection={'column'} gap={'2'} justifyContent={'center'} alignItems={'center'}>
        <Text color={'#555'}>مبلغ قابل پرداخت</Text>
        <Text color={'blue'}>450000تومان</Text>
    </Box>
  </Box>
  )
}

export default ConfitmTransaction