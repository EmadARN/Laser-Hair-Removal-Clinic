import React from 'react'
import {Grid,Box,Text} from '@chakra-ui/react'
const Experienced_years = () => {
  return (
   <Grid display="flex" flexDirection="column" alignItems="center" justifyContent="center">

<Box mb={3}>
    <Text fontWeight="bold" sx={{fontSize:{base:"md",sm:"xl"}}}>
5سال است در کنار شماهستیم
    </Text>
</Box>

<Box w="23%">
    <Text lineHeight={2} textAlign="center" color="#999"  sx={{fontSize:{base:"md",sm:"lg"}}}>
        برای رزرو نوبت و استفاده از خدمات لیزر درمانی کلینیک لیانا میتوانید نوبت خود را بصورت آنلاین رزرو کرده و در زمان انتخاب شده در کلینیک حضور پیدا کنید
    </Text>
</Box>

   </Grid>
  )
}

export default Experienced_years