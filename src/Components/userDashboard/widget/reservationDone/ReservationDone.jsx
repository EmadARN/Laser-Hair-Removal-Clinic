import React from "react";
import { Grid, Box, Text, Button } from "@chakra-ui/react";
import { IoMdCheckmark } from "react-icons/io";

const ReservationDone = () => {
  return (
    <Grid
      w={"100%"}
      h={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        w="450px"
        sx={{ boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        h={"auto"}
        p={4}
        flexDirection={"column"}
        display="flex"
        gap={3}
      >
        <Box
          position={"relative"}
          borderRadius={"10px"}
          mb={3}
          width={"100%"}
          h={"auto"}
          p={"4"}
          bgColor="lightgreen"
          display="flex"
          flexDirection="column"
          alignItems={"center"}
        >
          <Box
            top={-5}
            position={"absolute"}
            borderRadius={"50%"}
            p={2}
            bgColor={"green"}
          >
            <Box borderRadius={"50%"} bgColor={"#fff"} p={1}>
              <IoMdCheckmark color="green" size={"17px"} />
            </Box>
          </Box>

          <Box mt={2}>
            <Text
              sx={{
                color: "#15a523",
                fontWeight: "bold",
                fontSize: { sm: "14px", md: "25px" },
              }}
            >
              7:40 - 8.30
            </Text>
          </Box>

          <Box>
            <Text fontSize={{ sm: "13px", md: "15px" }}>برای شما رزرو شد</Text>
          </Box>

          <Box>
            <Text whiteSpace={"nowrap"} fontSize={{ base: "13px", md: "14px" }}>
              لطفا ۱۵ دقیقه قبل از زمان تعیین شده در مطب حضور داشته باشید
            </Text>
          </Box>
        </Box>

        <Box display={"flex"} flexDirection={"column"} gap={3} w={"100%"}>
          <Box
            display={"flex"}
            w={"100%"}
            justifyContent={"space-between"}
            mb={4}
          >
            <Box>
              <Text color={"#999"}>تاریخ</Text>
            </Box>
            <Box>
              <Text fontSize={{ base: "13px", md: "14px" }} fontWeight={"500"}>
                دوشنبه ۱۰/۱/۱۴۰۲
              </Text>
            </Box>
          </Box>

          <Box
            display={"flex"}
            w={"100%"}
            justifyContent={"space-between"}
            mb={4}
          >
            <Box>
              <Text color={"#999"}>اپراتور</Text>
            </Box>
            <Box>
              <Text fontSize={{ base: "13px", md: "14px" }} fontWeight={"500"}>
                نام اپراتور
              </Text>{" "}
            </Box>
          </Box>

          <Box
            display={"flex"}
            w={"100%"}
            justifyContent={"space-between"}
            mb={4}
          >
            <Box>
              <Text color={"#999"}>نواحی انتخاب شده</Text>
            </Box>
            <Box>
              <Text fontSize={{ base: "13px", md: "14px" }} fontWeight={"500"}>
                نام ناحیه
              </Text>{" "}
            </Box>
          </Box>

          <Box
            display={"flex"}
            w={"100%"}
            justifyContent={"space-between"}
            mb={4}
          >
            <Box>
              <Text color={"#999"}>مبلغ پرداخت شده</Text>
            </Box>
            <Box>
              <Text fontSize={{ base: "13px", md: "14px" }} fontWeight={"500"}>
                50.000تومان
              </Text>
            </Box>
          </Box>

          <Box
            display={"flex"}
            w={"100%"}
            justifyContent={"space-between"}
            mb={4}
          >
            <Box>
              <Text color={"#999"}>مبلغ کل</Text>
            </Box>
            <Box>
              <Text fontSize={{ base: "13px", md: "14px" }} fontWeight={"500"}>
                230.000تومان
              </Text>
            </Box>
          </Box>

          <Box display={"flex"} w={"100%"} justifyContent={"space-between"}>
            <Box>
              <Text color={"#999"}>باقی مانده جهت پرداخت</Text>
            </Box>
            <Box>
              <Text fontSize={{ base: "13px", md: "14px" }} fontWeight={"500"}>
                200.000تومان
              </Text>{" "}
            </Box>
          </Box>
        </Box>

        <Box
          mt={2}
          display={"flex"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button
            onClick={() => (location.href = "/UserDashboard")}
            fontSize={{ base: "13px", md: "14px" }}
            color={"purple"}
          >
            صفحه ی پروفایل
          </Button>

          <Button fontSize={{ base: "13px", md: "14px" }} color={"purple"}>
            بازگشت به خانه
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default ReservationDone;
