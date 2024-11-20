import React, { useEffect } from "react";
import { Box, Grid } from "@chakra-ui/react";
import TurnInfo from "./TurnInfo";
import OutputInformation from "./OutputInformation";
import { useDispatch, useSelector } from "react-redux";
import useStepper from "@/hooks/userDashboard/useSteper";
import { nextStep } from "@/features/steper/stepSlice";
import { useCookies } from "react-cookie";
import StepperPrototype from "../stepper";
import { confirmInfo } from "@/features/customerDashboard/customerThunks";
import TitleUserDashboard from "../shared/titleUserDashboard/TitleUserDashboard";
import { AcceptBtn } from "../shared/acceptBtn/AcceptBtn";

const ConfirmInfo = ({ slug }) => {
  const { handleNextStep } = useStepper();
  const [cookies, setCookie] = useCookies(["auth_token"]);

  const { confrimInfoDetail, loading, error } = useSelector(
    (store) => store.customerDashboard
  );
  console.log("confrimInfoDetail", confrimInfoDetail);

  // گرفتن مقادیر از localStorage
  const username = localStorage.getItem("phoneNumber");
  const token = cookies.auth_token;
  const date = localStorage.getItem("date");
  const slots = localStorage.getItem("slots");
  const operatorName = localStorage.getItem("name");

  const dispatch = useDispatch();

  useEffect(() => {
    if (username && token) {
      dispatch(confirmInfo({ username, token }));
    }
  }, [username, token, dispatch]);

  const handleCompleteStep = () => {
    dispatch(nextStep());
    console.log("مرحله کامل شد!");
  };

  return (
    <Grid
      bgColor={"#F7F7F7"}
      W="100%"
      display="flex"
      flexDirection="column"
      gap={3}
    >
      <StepperPrototype onCompleteStep={handleCompleteStep} />
      <TitleUserDashboard />
      <OutputInformation
        loading={loading}
        error={error}
        confrimInfoDetail={confrimInfoDetail}
      />
      <Box mt={2}>
        <TurnInfo date={date} slots={slots} operatorName={operatorName} />
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
