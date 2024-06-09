import React from "react";
import { Box, Grid, Text, Button } from "@chakra-ui/react";
import { CiHome } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import UserInformation from "./UserInformation";
import TurnInfo from "./TurnInfo";

const ConfirmInfo = () => {
  return (
    <Grid
      bgColor={"#F7F7F7"}
      W="100%"
      display="flex"
      flexDirection="column"
      gap={3}
    >
      <Box
        mt={4}
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box mr={4}>
          <Button leftIcon={<CiHome />}>بازگشت به خانه</Button>
        </Box>

        <Box ml={4}>
          <Button rightIcon={<FaArrowLeftLong />}>مرحله ی قبل</Button>
        </Box>
      </Box>

      <UserInformation />

      <Box mt={2}>
        <TurnInfo />
      </Box>

      <Box width='100%' display='flex' justifyContent='center' p={3}>
        <Button sx={{'&:hover':{bgColor:"#347391"}}} bgColor={'#2aafed'} color="#fff" w={'27%'}>تایید اطلاعات </Button>
      </Box>
    </Grid>
  );
};

export default ConfirmInfo;
