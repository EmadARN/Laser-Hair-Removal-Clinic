import TitleUserDashboard from "@/Common/titleUserDashboard/TitleUserDashboard";
import React, { useState, useEffect } from "react";
import AreaChoice from "./AreaChoice";
import StepperPrototype from "../stepper/Stepper";
import { AcceptBtn } from "../acceptBtn/AcceptBtn";
import { Spinner, Text } from "@chakra-ui/react";
import { useFetchLazerAreas } from "@/hooks/userDashboard/useFetchLazerAreaList";
import { usePostLazerAreas } from "@/hooks/userDashboard/usePostLazerAreaList";
import { useCookies } from "react-cookie";
import useStepper from "@/hooks/userDashboard/useSteper";

const ChoosingArea = ({ slug }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [reserveId, setReserveId] = useState([]);
  const [{ auth_token } = cookies] = useCookies(["auth_token"]);

  const { handleNextStep } = useStepper();
  const { areas, loading, error } = useFetchLazerAreas(auth_token);
  const { submitHandler } = usePostLazerAreas(reserveId, auth_token);

  useEffect(() => {
    if (areas?.all_laser_area_object?.first_type) {
      setCheckedItems(
        new Array(areas.all_laser_area_object.first_type.length).fill(false)
      );
    }
  }, [areas]);

  const allChecked = checkedItems.length > 0 && checkedItems.every(Boolean);

  const handleSelectAll = (isChecked) => {
    setCheckedItems(new Array(checkedItems.length).fill(isChecked));
    const allIds = isChecked
      ? areas.all_laser_area_object.first_type.map((userId) => userId.value)
      : [];
    setReserveId(allIds);
  };

  const handleCheckboxChange = (index, isChecked) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = isChecked;
    setCheckedItems(newCheckedItems);

    const userIdValue = areas.all_laser_area_object.first_type[index].value;
    setReserveId((prevReserveId) =>
      isChecked
        ? [...prevReserveId, userIdValue]
        : prevReserveId.filter((id) => id !== userIdValue)
    );
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Text color="red.500">خطا در بارگذاری داده‌ها: {error}</Text>;
  }

  return (
    <>
      <StepperPrototype onCompleteStep={handleNextStep} />
      <TitleUserDashboard />
      <AreaChoice
        areas={areas}
        checkedItems={checkedItems}
        allChecked={allChecked}
        handleSelectAll={handleSelectAll}
        handleCheckboxChange={handleCheckboxChange}
      />
      <AcceptBtn
        slug={slug}
        text="ادامه"
        bgColor={"white"}
        submitHandler={submitHandler}
        letPush={reserveId}
        onNextStep={handleNextStep}
      />
    </>
  );
};

export default ChoosingArea;
