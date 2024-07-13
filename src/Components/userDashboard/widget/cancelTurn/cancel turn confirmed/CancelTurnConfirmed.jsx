import React from "react";
import { Grid, Box, Text, Button } from "@chakra-ui/react";
const CancelTurnConfirmed = () => {
  return (
    <Grid
      display={"flex"}
      width={"100%"}
      justifyContent={"center"}
      height={"100vh"}
      alignItems={"center"}
    >
      <Box
        width={{ base: "100%", md: "45%" }}
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        borderRadius="10px"
        p={4}
        display="flex"
        flexDirection={"column"}
      >
        <Box width={"100%"} textAlign={"center"} my={3}>
          <Text fontSize={{ base: "17px", md: "20px" }} fontWeight={"bold"}>
            نوبت شما لغو شد
          </Text>
        </Box>

        <Box width={"95%"} my={3}>
          <Text textAlign={"center"}>
            در صورتی که بیشتر از ۴۸ ساعت به نوبت شما باقی مانده است،میتوانید با
            منشی تماس گرفته و نسبت به دریافت وجه خود اقدام نمایید{" "}
          </Text>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          textAlign={"right"}
          my={4}
        >
          <Text mb={4} color={"#777"}>
            منشی اصلی:
          </Text>

          <Box
            my={5}
            width={"40%"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Text fontWeight={"bold"}>09191111111</Text>

            <Text fontWeight={"bold"}>09191111111</Text>
          </Box>

          <Box display={"flex"} justifyContent={"space-between"}>
            <Box display={"flex"} flexDirection={"column"} gap={3}>
              <Text color={"#777"}>منشی شیفت صبح:</Text>
              <Text fontWeight={"bold"}>0919111111</Text>
            </Box>

            <Box display={"flex"} flexDirection={"column"} gap={3}>
              <Text color={"#777"}> منشی شیفت عصر:</Text>
              <Text fontWeight={"bold"}>0919111111</Text>
            </Box>
          </Box>
        </Box>

        <Box
          my={6}
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Button color={"#7563DC"}>صفحه ی پروفایل</Button>

          <Button color={"#7563DC"}> بازگشت به خانه</Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default CancelTurnConfirmed;
