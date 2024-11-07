import React, { useEffect } from "react";
import { Box, Grid } from "@chakra-ui/react";
import TurnInfo from "./TurnInfo";
import OutputInformation from "./OutputInformation";
import TitleUserDashboard from "@/Common/titleUserDashboard/TitleUserDashboard";
import StepperPrototype from "../stepper/Stepper";
import { AcceptBtn } from "../acceptBtn/AcceptBtn";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { confirmInfo } from "@/features/customerDashboard/customerDashboardSlice";
import useStepper from "@/hooks/userDashboard/useSteper";

const ConfirmInfo = ({ slug }) => {
  const [cookies, setCookie] = useCookies([
    "phoneNumber",
    "auth_token",
    "date",
    "slots",
    "name",
  ]);
  const { handleNextStep } = useStepper();
  const { confrimInfoDetail, loading, error } = useSelector(
    (store) => store.customerDashboard
  );

  const username = cookies.phoneNumber;
  const token = cookies.auth_token;
  const date = cookies.date;
  const slots = cookies.slots;
  const operatorName = cookies.name;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(confirmInfo({ username, token }));
  }, [username]);


  return (
    <Grid
      bgColor={"#F7F7F7"}
      W="100%"
      display="flex"
      flexDirection="column"
      gap={3}
    >
      <StepperPrototype page={page} onCompleteStep={handleCompleteStep} />
      <TitleUserDashboard />
      <OutputInformation
        loading={loading}
        error={error}
        confrimInfoDetail={confrimInfoDetail}
      />
      <Box mt={2}>
        <TurnInfo date={date} slots={slots} operatorname={operatorName} />
      </Box>
      <AcceptBtn
        text="تایید اطلاعات"
        bgColor={"white"}
        slug={slug}
        onNextStep={handleCompleteStep}
      />
    </Grid>
  );
};

export default ConfirmInfo;
