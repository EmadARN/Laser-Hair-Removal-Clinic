import { Flex, Grid } from "@chakra-ui/react";
import { get_turn_data } from "./data";
import Main_Layout from "./widgets/main-layout/Main_Layout";
import Section_title from "@/common/section-title";
import BtnReservation from "@/Common/btnReservation/BtnReservation";
const Main_get_turn = () => {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      px={{ base: 10, md: 28 }}
      py={10}
      mx={2}
      bgColor={"#ffffff"}
      rounded={"25px"}
    >
      <Section_title section_title="نحوه ی دریافت نوبت"></Section_title>

      {get_turn_data.map((item) => {
        return (
          <>
            <Main_Layout item={item}></Main_Layout>
          </>
        );
      })}

      <Flex justifyContent={"center"} mt={3}>
        <BtnReservation text="دریافت نوبت" px="22px" py="18px" />
      </Flex>
    </Grid>
  );
};

export default Main_get_turn;
