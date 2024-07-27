import React from "react";
import { Grid, Box, Text, Input, Button } from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
const PatientsProfile = () => {
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
          borderBottom={"2px solid #ddd"}
          mb={4}
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          p={3}
        >
          <Text fontWeight={"bold"}> پروفایل مراجع</Text>
          <MdCancel />
        </Box>

        <Box display={"flex"} flexDirection={"column"} gap={5} width={"100%"}>
          <label htmlFor="">نام و نام خانوادگی</label>
          <Input size="md" defaultValue={"ملیکا عبدالرزاقی"} />
          <label htmlFor=""> کدملی </label>
          <Input placeholder=" کد ملی" size="md" defaultValue={"0312028156 "} />
          <label htmlFor=""> شماره همراه </label>
          <Input
            placeholder=" شماره همراه"
            size="md"
            defaultValue={"09190978042 "}
          />
          <label htmlFor=""> شماره ثابت </label>
          <Input
            placeholder=" شماره ثابت"
            size="md"
            defaultValue={" 02433435660"}
          />
        </Box>

        <Box width={"100%"} mt={"4"}>
          <Button width={"100%"} bgColor={'lightblue'}>  ورود به شارژ </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default PatientsProfile;
