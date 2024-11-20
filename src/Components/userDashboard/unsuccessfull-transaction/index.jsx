import React from "react";
import { Grid, Box, Text, Button } from "@chakra-ui/react";
import RedGreenBox from "@/Common/Red&GreenBox/Red&GreenBox";
import CustomButton from "@/Common/customeButton/CustomeButton";

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
        <RedGreenBox
          bgColor="#d38181"
          bgColor2="#d61515"
          iconColor="#d61515"
          textColor="#d61515"
        />

        <Box mt={2}>
          <Text
            fontSize={{ sm: "13px", md: "15px" }}
            textAlign={"center"}
            color={"#555"}
          >
            نوبت شما تا ۲۰ دقیقه در حالت رزرو باقی میماند.
            <br />
            لطفا برای نهایی کردن سفارش خود به صفحه ی پرداخت بازگردید.
          </Text>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={"95%"}
          mt={4}
        >
          <CustomButton>صفحه ی پرداخت</CustomButton>
          <Button>بازگشت به خانه</Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default Unsucces_Transaction;
