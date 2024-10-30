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

const ConfirmInfo = ({ page, setPage, slug }) => {
  const [cookies, setCookie] = useCookies([
    "phoneNumber",
    "auth_token",
    "date",
    "slots",
    "name"
  ]);


const {confrimInfoDetail,loading,error} = useSelector((store)=>store.customerDashboard)





  const username = cookies.phoneNumber
  const token = cookies.auth_token
  const date = cookies.date
  const slots = cookies.slots
  const operatorName = cookies.name

  const dispatch = useDispatch()
  


  useEffect(()=>{
    dispatch(confirmInfo({username,token}))
  },[username])
  return (
    <Grid
      bgColor={"#F7F7F7"}
      W="100%"
      display="flex"
      flexDirection="column"
      gap={3}
    >
      <StepperPrototype />
      <TitleUserDashboard page={page} setPage={setPage} />
      <OutputInformation loading={loading} error={error} confrimInfoDetail={confrimInfoDetail}/>
      <Box mt={2}>
        <TurnInfo date={date} slots={slots} operatorname={operatorName}/>
      </Box>
      <AcceptBtn
        text="تایید اطلاعات"
        page={page}
        setPage={setPage}
        bgColor={"white"}
        slug={slug}
      />
    </Grid>
  );
};

export default ConfirmInfo;
