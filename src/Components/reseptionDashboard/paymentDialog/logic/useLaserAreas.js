import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import {
  editLazerArea,
  getLazerAreas,
  todayDate,
} from "@/features/receptionDashboard/receptionThunks";

export const useLaserAreas = (idKeeper,onClose,setStep) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [laserAreaList, setLaserAreaList] = useState([]);
  const [{ auth_Employee_token }] = useCookies(["auth_Employee_token"]);
  const dispatch = useDispatch();
  const { LazerAreas } = useSelector((store) => store.receptionDashboardSlice);

  useEffect(() => {
    dispatch(getLazerAreas({ auth_Employee_token }));
  }, [dispatch, auth_Employee_token]);

  const removeHandle = (id) => {
    const updatedOptions = selectedOptions.filter((item) => item.id !== id);
    setSelectedOptions(updatedOptions);
    setLaserAreaList(updatedOptions.map((option) => option.value));
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    const selectedId = e.target.selectedOptions[0].getAttribute("data-id");

    if (selectedOptions.some((option) => option.id === selectedId)) return;

    const updatedOptions = [
      { id: selectedId, value: selectedValue },
      ...selectedOptions,
    ];
    setSelectedOptions(updatedOptions);
    setLaserAreaList(updatedOptions.map((option) => option.value));
  };

  const submitEditLazerArea = async() => {
    if (idKeeper) {
     const result = await dispatch(
        editLazerArea({ keepId: idKeeper, laserAreaList, auth_Employee_token })
      );
      if (result.meta.requestStatus === "fulfilled"){
        await  dispatch(todayDate({ auth_Employee_token }));
        setStep(0)
      }
     
    }

  
  };

  return {
    LazerAreas,
    selectedOptions,
    handleSelectChange,
    removeHandle,
    submitEditLazerArea,
  };
};
