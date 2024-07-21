import React from "react";
import { Grid, Box, Text, Input,Button } from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
const PatientWithoutTime = () => {
  return (
    <Grid
    width={"100%"}
    height="100vh"
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
  >
    <Box
   
      width={"70%"}
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      p={3}
      h={"auto"}
      display={"flex"}
      flexDirection={"column"}
     
    >
      <Box
       borderBottom={'2px solid #ddd'}
        mb={4}
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        p={3}
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