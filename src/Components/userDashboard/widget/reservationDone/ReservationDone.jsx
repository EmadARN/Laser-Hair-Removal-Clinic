import React from "react";
import { Grid, Box, Text, Button } from "@chakra-ui/react";
import { IoMdCheckmark } from "react-icons/io";
import RedGreenBox from "@/Common/Red&GreenBox/Red&GreenBox";

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
     <RedGreenBox bgColor="lightgreen" bgColor2="green" iconColor="green" textColor="#15a523"/>

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

          <Button onClick={()=>location.href="/"} fontSize={{ base: "13px", md: "14px" }} color={"purple"}>
            بازگشت به خانه
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default ReservationDone;


