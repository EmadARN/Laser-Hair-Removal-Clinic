import { Box,  Grid, Text } from "@chakra-ui/react";
import { get_turn_data } from "./data";
import { useState } from "react";
import Main_Layout from "./widgets/main-layout/Main_Layout";
import Section_title from "@/common/section-title";
import BtnReservation from "@/Common/btnReservation/BtnReservation";
const Main_get_turn = () => {
  return (
    <Grid display="flex" flexDirection="column" w="100" p={3}>
     <Section_title section_title="نحوه ی دریافت نوبت"></Section_title>

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
