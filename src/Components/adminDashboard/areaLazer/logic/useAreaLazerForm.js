import {
  addLazerArea,
  editLazerArea,
  getLazerAreas,
} from "@/features/adminDashboard/adminThunks";
import { useCustomToast } from "@/utils/useCustomToast ";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAreaLazerForm = (isEdit, areaToEdit) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.adminDashboard.token);
  const { showToast } = useCustomToast();
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
      showToast({ title: "ناحیه ویرایش شد", status: "success" });
    } else {
      await dispatch(addLazerArea(payload));
      showToast({ title: "ناحیه  اضافه شد", status: "success" });
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
