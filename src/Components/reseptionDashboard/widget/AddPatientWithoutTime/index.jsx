import React from "react";
import { Grid, Box, Text, Input } from "@chakra-ui/react";
export default function MainPatientWithOutTime() {
  return (
    <Grid
      width={"100%"}
      height="100vh"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        width={"100%"}
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        p={3}
        h={"auto"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box
          mb={4}
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          p={3}
        >
          <Text fontWeight={"bold"}>مراجع جدید</Text>
          <MdCancel />
        </Box>

        <Box display={"flex"} flexDirection={"column"} gap={2} width={"100%"}>
          <Input placeholder=" نام و نام خانوادگی" size="md" />
          <Input placeholder=" کد ملی" size="md" />
          <Input placeholder=" شماره همراه" size="md" />
          <Input placeholder=" شماره ثابت" size="md" />
        </Box>

        <Box width={"100%"}>
          <Button>تایید اطلاعات و ادامه</Button>
        </Box>
      </Box>
    </Grid>
  );
}
