import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import TurnInfo from "./TurnInfo";
import OutputInformation from "./OutputInformation";
import StepperPrototype from "@/Common/stepper/Stepper";
import TitleUserDashboard from "@/Common/titleUserDashboard/TitleUserDashboard";
import { AcceptBtn } from "@/Common/acceptBtn/AcceptBtn";

const ConfirmInfo = ({ page, setPage }) => {
  return (
    <Grid
      bgColor={"#F7F7F7"}
      W="100%"
      display="flex"
      flexDirection="column"
      gap={3}
    >
      <StepperPrototype />
      <TitleUserDashboard />
      <OutputInformation />
      <Box mt={2}>
        <TurnInfo />
      </Box>
      <AcceptBtn
        text="تایید اطلاعات"
        page={page}
        setPage={setPage}
        bgColor={"white"}
      />
    </Grid>
  );
};

export default ConfirmInfo;
