import {
  addLazerArea,
  editLazerArea,
  getLazerAreas,
} from "@/features/adminDashboard/adminThunks";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAreaLazerForm = (isEdit, areaToEdit) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.adminDashboard.token);

  const [selectedItem, setSelectedItem] = useState(null);

  const [editArea, setEditArea] = useState({
    name: "",
    price: 0,
  });

  const [lazerArea, setLazerArea] = useState({
    price: 0,
    operate_time: 0,
    deadline_reset: 0,
    name: "",
  });

  // بارگذاری داده‌ها در صورت ویرایش
  useEffect(() => {
    if (isEdit && areaToEdit) {
      setLazerArea({
        name: areaToEdit.label,
        price: areaToEdit.price,
        operate_time: areaToEdit.operate_time,
      });
      setSelectedItem(areaToEdit.operate_time || 0); // مقدار پیش‌فرض
    }
  }, [isEdit, areaToEdit]);

  const areaChangeHandler = (e) => {
    const { value, name } = e.target;
    setEditArea((prevForm) => ({
      ...prevForm,
      [name]: name === "price" ? Number(value) : value,
    }));
    setLazerArea((prevForm) => ({
      ...prevForm,
      [name]: value,
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

    const payload = isEdit
      ? { name: lazerArea.name, price: lazerArea.price.toString(), token }
      : { name: lazerArea.name, ...lazerArea, token };

    if (isEdit) {
      await dispatch(editLazerArea(payload));
    } else {
      await dispatch(addLazerArea(payload));
    }

    dispatch(getLazerAreas({ token }));
  };

  return {
    lazerArea,
    editArea,
    selectedItem,
    areaChangeHandler,
    handleButtonClick,
    handleSubmit,
  };
};

export default useAreaLazerForm;
