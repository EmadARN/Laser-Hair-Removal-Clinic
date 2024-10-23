import TitleUserDashboard from "@/Common/titleUserDashboard/TitleUserDashboard";
import React, { useState, useEffect } from "react";
import AreaChoice from "./AreaChoice";
import StepperPrototype from "../stepper/Stepper";
import { AcceptBtn } from "../acceptBtn/AcceptBtn";
import { Spinner, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useFetchLazerAreas } from "@/hooks/userDashboard/useFetchLazerAreaList";
import { usePostLazerAreas } from "@/hooks/userDashboard/usePostLazerAreaList";

const ChoosingArea = ({ page, setPage, slug }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [reserveId, setReserveId] = useState([]);

  const { token } = useSelector((store) => store.signin);
  const { areas, loading, error } = useFetchLazerAreas(token);
  const { submitHandler } = usePostLazerAreas(reserveId, token);

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
      <StepperPrototype />
      <TitleUserDashboard page={page} setPage={setPage} />
      <AreaChoice
        areas={areas}
        checkedItems={checkedItems}
        allChecked={allChecked}
        handleSelectAll={handleSelectAll}
        handleCheckboxChange={handleCheckboxChange}
      />
      <AcceptBtn
        page={page}
        setPage={setPage}
        slug={slug}
        text="ادامه"
        bgColor={"white"}
        submitHandler={submitHandler}
        letPush={reserveId}
      />
    </>
  );
};

export default ChoosingArea;
