import React from "react";
import { Flex } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import StepperPrototype from "../stepper";
import CustomButton from "@/Common/customeButton/CustomeButton";
import Loading from "@/Common/loading";
import TitleUserDashboard from "../shared/TitleUserDashboard";
import { useFetchLazerAreas } from "./logic/useFetchLazerAreaList";
import { usePostLazerAreas } from "./logic/usePostLazerAreaList";
import AreaChoice from "./ui/AreaChoice";
import { useCustomToast } from "@/utils/useCustomToast ";
import { useChoosingArea } from "./logic/useChoosingArea";

const ChoosingArea = ({ slug }) => {
  const [{ auth_token } = cookies] = useCookies(["auth_token"]);
  const { showToast } = useCustomToast();

  const { areas, loading, error } = useFetchLazerAreas(auth_token);

  const {
    checkedItems,
    reserveId,
    allChecked,
    handleSelectAll,
    handleCheckboxChange,
  } = useChoosingArea(areas);

  const { submitHandler } = usePostLazerAreas(reserveId, auth_token);

  const isDisabled = reserveId.length === 0;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return showToast({
      title: "خطا.",
      description: "اوپراتور وجود ندارد یا خطایی پیش آمده",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <>
      <StepperPrototype currentStep={2} />
      <TitleUserDashboard />
      <AreaChoice
        areas={areas}
        checkedItems={checkedItems}
        allChecked={allChecked}
        handleSelectAll={handleSelectAll}
        handleCheckboxChange={handleCheckboxChange}
      />
      <Flex
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          p: 3,
        }}
      >
        <CustomButton
          slug={slug}
          onClick={submitHandler}
          isDisabled={isDisabled}
          w="30%"
        >
          {loading ? (
            <Loading noneHeight="0vh" bg="#fff" h="4px" w="4px" />
          ) : (
            "ادامه"
          )}{" "}
        </CustomButton>
      </Flex>
    </>
  );
};

export default ChoosingArea;
