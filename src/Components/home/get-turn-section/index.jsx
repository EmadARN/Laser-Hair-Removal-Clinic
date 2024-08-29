import { Box, Flex, Grid } from "@chakra-ui/react";
import Main_Layout from "./widgets/main-layout/Main_Layout";
import Section_title from "@/common/section-title";
import BtnReservation from "@/Common/btnReservation/BtnReservation";
import { GridMain } from "./style";
import { get_turn_data } from "@/constants";
const Main_get_turn = () => {
  return (
    <Grid sx={GridMain}>
      <Section_title section_title="نحوه ی دریافت نوبت"></Section_title>

      {get_turn_data.map((item) => {
        return (
          <Box key={item.id}>
            <Main_Layout item={item}></Main_Layout>
          </Box>
        );
      })}

      <Flex justifyContent={"center"} mt={3}>
        <BtnReservation text="دریافت نوبت" px="22px" py="18px" />
      </Flex>
    </Grid>
  );
};

export default Main_get_turn;
