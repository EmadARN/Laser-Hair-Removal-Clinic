import React from "react";
import { Grid, Box, Text, Button } from "@chakra-ui/react";
import RedGreenBox from "@/Common/RedGreenBox/RedGreenBox";

const ReservationDone = ({ slug }) => {
  const reservationDetails = [
    { label: "تاریخ", value: "دوشنبه ۱۰/۱/۱۴۰۲" },
    { label: "اپراتور", value: "نام اپراتور" },
    { label: "نواحی انتخاب شده", value: "نام ناحیه" },
    { label: "مبلغ پرداخت شده", value: "50.000تومان" },
    { label: "مبلغ کل", value: "230.000تومان" },
    { label: "باقی مانده جهت پرداخت", value: "200.000تومان" },
  ];

  return (
    <Grid
      w="100%"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w="450px"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        p={4}
        display="flex"
        flexDirection="column"
        gap={3}
      >
        <Box
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          gap={3}
          w="100%"
        >
          <Text variant="h2" textAlign={"center"}>
            به علت نبود درگاه پرداخت، عملیاتی جهت انتقال به مرحله ی پرداخت تعریف
            نشده است
          </Text>
        </Box>

        <Box
          mt={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            onClick={() => (location.href = "/userDashboard")}
            fontSize={{ base: "13px", md: "14px" }}
            color="brand.400"
          >
            صفحه ی پروفایل
          </Button>
          <Button
            onClick={() => (location.href = "/")}
            fontSize={{ base: "13px", md: "14px" }}
            color="brand.400"
          >
            بازگشت به خانه
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default ReservationDone;
