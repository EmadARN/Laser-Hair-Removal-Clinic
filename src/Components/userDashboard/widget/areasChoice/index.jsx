import TitleUserDashboard from "@/Common/titleUserDashboard/TitleUserDashboard";
import React, { useEffect } from "react";
import AreaChoice from "./AreaChoice";
import StepperPrototype from "../stepper/Stepper";
import { AcceptBtn } from "../acceptBtn/AcceptBtn";
import { Spinner, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getLazerAreaList } from "@/features/customerDashboard/customerDashboardSlice";


const ChoosingArea = ({ page, setPage, slug }) => {


  const {  areas, loading, error } = useSelector(
    (store) => store.customerDashboard
  );

  const {token} = useSelector((store)=>store.signin)

 
  

  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(getLazerAreaList( {token} ));
    }
  }, [dispatch, token]);

  // مدیریت وضعیت بارگذاری و خطا
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Text color="red.500">خطا در بارگذاری داده‌ها: {error}</Text>;
  }






  return (
    <>
      <StepperPrototype />
      <TitleUserDashboard page={page} setPage={setPage} />
      <AreaChoice areas={areas} />
      <AcceptBtn
        page={page}
        setPage={setPage}
        slug={slug}
        text="ادامه"
        bgColor={"white"}
      />
    </>
  );
};

export default ChoosingArea;
