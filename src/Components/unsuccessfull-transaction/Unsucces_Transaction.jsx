import React from "react";
import { Grid, Box, Text,Button } from "@chakra-ui/react";
import { IoMdCheckmark } from "react-icons/io";
import BtnReservation from "@/Common/btnReservation/BtnReservation";
const Unsucces_Transaction = () => {
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
          bgColor="#d38181"
          display="flex"
          flexDirection="column"
          alignItems={"center"}
        >
          <Box
            top={-5}
            position={"absolute"}
            borderRadius={"50%"}
            p={2}
            bgColor={"#d61515"}
          >
            <Box borderRadius={"50%"} bgColor={"#fff"} p={1}>
              <IoMdCheckmark color="#d61515" size={"17px"} />
            </Box>
          </Box>

          <Box mt={2}>
            <Text
              sx={{
                color: "#d61515",
                fontWeight: "bold",
                fontSize: { sm: "14px", md: "25px" },
              }}
            >
              7:40 - 8.30
            </Text>
          </Box>

          <Box>
            <Text fontSize={{ sm: "13px", md: "15px"}} color={'#555'}> درصورتی که از حساب شما مبلغی کم شده باشد،<br/>طی ۷۲ ساعت به حساب شما بازگردانده میشود </Text>
          </Box>

          {/* <Box>
            <Text whiteSpace={"nowrap"} fontSize={{ base: "13px", md: "14px" }}>
              {" "}
              لطفا ۱۵ دقیقه قبل از زمان تعیین شده در مطب حضور داشته باشید
            </Text>
          </Box> */}
        </Box>


        <Box mt={2}>
            <Text fontSize={{ sm: "13px", md: "15px"}} textAlign={'center'} color={'#555'}>نوبت شما تا ۲۰ دقیقه در حالت رزرو باقی میماند.<br/>لطفا برای نهایی کردن سفارش خود به  صفحه ی پرداخت بازگردید.</Text>
        </Box>



        <Box display={'flex'} justifyContent={'space-between'} width={'95%'} mt={4}>
            <BtnReservation text='صفحه ی پرداخت'></BtnReservation>
            <Button>بازگشت به خانه</Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default Unsucces_Transaction;
