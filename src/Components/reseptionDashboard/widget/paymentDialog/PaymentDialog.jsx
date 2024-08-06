import React from "react";
import { Grid, Box, Text } from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import InformationBox from "./widget/InformationBox";
import PaymentMethodSection from "./widget/PaymentMethodSection";
import ConfitmTransaction from "./widget/ConfitmTransaction";

const PaymentDialog = () => {
  return (
    <Grid
      display={"flex"}
      height={"100vh"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        rounded={"lg"}
        width={"100%"}
        p={3}
      >
        <Box
          mb={4}
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          p={3}
        >
          <Text fontWeight={"bold"}>پرداخت</Text>
          <MdCancel />
        </Box>

        <Box
          width={"100%"}
          p={2}
          display={"flex"}
          flexDirection={"column"}
          gap={2}
        >
          <InformationBox title="نام و نام خانوادگی" value="ملیکا رمضانی" />
          <InformationBox title="زمان نوبت" value="8.30" />
          <InformationBox title="ناحیه لیزر" value={"فول بادی"} />
        </Box>

        <Box mt={3} width={"99%"}>
          <PaymentMethodSection />
        </Box>

        <Box mt={3} width={"100%"}>
          <ConfitmTransaction />
        </Box>
      </Box>
    </Grid>
  );
};

export default PaymentDialog;
