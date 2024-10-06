import {
  addLazerArea,
  editLazerArea,
  getLazerAreas,
} from "@/features/adminDashboard/adminDashboardSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useAreaLazerForm = (isEdit, areaToEdit, token) => {
  const dispatch = useDispatch();

  const [selectedItem, setSelectedItem] = useState(null);
  const [lazerArea, setLazerArea] = useState({
    deadline_reset: 0,
  });

  // بارگذاری داده‌ها در صورت ویرایش
  useEffect(() => {
    if (isEdit && areaToEdit) {
      setLazerArea(areaToEdit);
      setSelectedItem(areaToEdit.operate_time || 0); // مقدار پیش‌فرض
    }
  }, [isEdit, areaToEdit]);

  const areaChangeHandler = (e) => {
    const { value, name } = e.target;
    setLazerArea((prevForm) => ({
      ...prevForm,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleButtonClick = (value) => {
    setSelectedItem(value);
    setLazerArea((prevForm) => ({
      ...prevForm,
      operate_time: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEdit) {
      await dispatch(editLazerArea({ ...lazerArea, token }));
    } else {
      await dispatch(addLazerArea({ ...lazerArea, token }));
    }
    dispatch(getLazerAreas({ token }));
  };

  return {
    lazerArea,
    selectedItem,
    areaChangeHandler,
    handleButtonClick,
    handleSubmit,
  };
};

export default useAreaLazerForm;
