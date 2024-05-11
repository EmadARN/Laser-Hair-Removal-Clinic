import React from "react";
import { Grid, Box, Text } from "@chakra-ui/react";
import BtnReservation from "@/Common/btnReservation/BtnReservation";
const Experienced_years = () => {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box mb={3} pt={10}>
        <Text fontWeight="bold" sx={{ fontSize: { base: "md", sm: "xl" } }}>
          5سال است در کنار شماهستیم
        </Text>
      </Box>

      <Box mb={7}>
        <Text lineHeight={2} textAlign="center" color="#999" fontSize="14px">
          برای رزرو نوبت و استفاده از خدمات لیزر درمانی کلینیک لیانا میتوانید
          نوبت خود را بصورت آنلاین رزرو کرده و در زمان انتخاب شده در کلینیک حضور
          پیدا کنید
        </Text>
      </Box>
      <Box mb={10}>
        <BtnReservation text="دریافت نوبت" px="25px" py="28px" />
      </Box>
    </Grid>
  );
};

export default Experienced_years;
