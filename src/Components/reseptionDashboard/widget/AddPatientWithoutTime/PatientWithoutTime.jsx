import React from "react";
import { Grid, Box, Text, Input,Button } from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import { firstGrid,firstBox,seccondBox } from "./style";
const PatientWithoutTime = () => {
  return (
    <Grid
    sx={firstGrid}
  >
    <Box
   sx={firstBox}
     
     
    >
      <Box
       sx={seccondBox}
      >
        <Text fontWeight={"bold"}>مراجع جدید</Text>
        <MdCancel />
      </Box>
      

      <Box display={"flex"} flexDirection={"column"} gap={8} width={"100%"}>
        <Input placeholder=" نام و نام خانوادگی" size="md" />
        <Input placeholder=" کد ملی" size="md" />
        <Input placeholder=" شماره همراه" size="md" />
        <Input placeholder=" شماره ثابت" size="md" />
      </Box>

      <Box width={"100%"} mt={'4'}>
        <Button width={'100%'}>تایید اطلاعات و ادامه</Button>
      </Box>
    </Box>
  </Grid>
  )
}

export default PatientWithoutTime