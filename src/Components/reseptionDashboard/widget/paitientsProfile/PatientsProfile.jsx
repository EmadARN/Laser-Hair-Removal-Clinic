import React from "react";
import { Grid, Box, Text, Input, Button } from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import { FirstGrid, FirstBox } from "./style";
const PatientsProfile = () => {
  return (
    <Grid sx={FirstGrid}>
      <Box>
        <Box>
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
          <Button width={"100%"} bgColor={"lightblue"}>
            {" "}
            ورود به شارژ{" "}
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default PatientsProfile;
