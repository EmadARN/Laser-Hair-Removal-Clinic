import React, { useState, useEffect } from "react";
import AreaChoice from "./AreaChoice";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import StepperPrototype from "../stepper";

import { useFetchLazerAreas } from "./useFetchLazerAreaList";
import { usePostLazerAreas } from "./usePostLazerAreaList";
import CustomButton from "@/Common/customeButton/CustomeButton";
import Loading from "@/Common/loading";
import TitleUserDashboard from "../shared/TitleUserDashboard";

const ChoosingArea = ({ slug }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [reserveId, setReserveId] = useState([]);
  const [{ auth_token } = cookies] = useCookies(["auth_token"]);

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

  const isDisabled = reserveId.length === 0;

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Text color="red.500">خطا در بارگذاری داده‌ها: {error}</Text>;
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
