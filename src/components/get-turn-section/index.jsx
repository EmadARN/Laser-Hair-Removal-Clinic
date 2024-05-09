import { Box,  Grid, Text } from "@chakra-ui/react";
import { get_turn_data } from "./data";
import { useState } from "react";
import Main_Layout from "./widgets/main-layout/Main_Layout";
import BtnReservation from "@/Common/btnReservation/BtnReservation";
const Main_get_turn = () => {
  return (
    <Grid display="flex" flexDirection="column" w="100" p={3}>
      <Box sx={{ display: "flex",  mb: 6 }}>
        <Box
          sx={{ border: "5px solid #9584e0", borderRadius: "10px", py: 2 }}
        ></Box>

        <Text sx={{fontsize:{base:"md",lg:"lg"}}} fontWeight={"bold"} mr={2}>
          نحوه ی دریافت نوبت
        </Text>
      </Box>

      {get_turn_data.map((item) => {
        return (
          <>
            <Main_Layout item={item}></Main_Layout>
          </>
        );
      })}


      <Box>
<BtnReservation text="رزرو نوبت"></BtnReservation>
      </Box>
    </Grid>
  );
};

export default Main_get_turn;
