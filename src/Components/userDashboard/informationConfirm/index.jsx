import React, { useEffect } from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import useStepper from "@/hooks/userDashboard/useSteper";
import { useCookies } from "react-cookie";
import StepperPrototype from "../stepper";
import { confirmInfo } from "@/features/customerDashboard/customerThunks";
import TitleUserDashboard from "../shared/titleUserDashboard/TitleUserDashboard";
import { AcceptBtn } from "../shared/acceptBtn/AcceptBtn";
import CustomButton from "@/Common/customeButton/CustomeButton";
import Loading from "@/Common/loading";
import OutputInformation from "./ui/OutputInformation";
import TurnInfo from "./ui/TurnInfo";

const ConfirmInfo = ({ slug }) => {
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
    // localStorage.removeItem("reserveId");
    // localStorage.removeItem("slots");
    // localStorage.removeItem("date");
    // localStorage.removeItem("timeList");
    // localStorage.removeItem("date");
  };

  return (
    <Grid
      bgColor={"#F7F7F7"}
      W="100%"
      display="flex"
      flexDirection="column"
      gap={3}
    >
      <StepperPrototype currentStep={4} />
      <TitleUserDashboard />
      <OutputInformation
        loading={loading}
        error={error}
        confrimInfoDetail={confrimInfoDetail}
      />
      <Box mt={2}>
        <TurnInfo date={date} slots={slots} operatorName={operatorName} />
      </Box>
      <Flex
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          p: 3,
        }}
      >
        <CustomButton oncClick={handleCompleteStep} slug={slug} w="30%">
          {loading ? (
            <Loading noneHeight="0vh" bg="#fff" h="4px" w="4px" />
          ) : (
            "تایید اطلاعات"
          )}{" "}
        </CustomButton>
      </Flex>
      {/* <AcceptBtn text="تایید اطلاعات" bgColor={"white"} slug={slug} /> */}
    </Grid>
  );
};

export default ConfirmInfo;
