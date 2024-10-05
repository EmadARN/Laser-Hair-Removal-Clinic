import {
  addAsyncUsers,
  editAsyncUser,
  getAsyncOpratorList,
} from "@/features/adminDashboard/adminDashboardSlice";
import { useCustomToast } from "@/utils/useCustomToast ";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useUserForm = (userToEdit, isEdit, token) => {
  const dispatch = useDispatch();
  const { showToast } = useCustomToast();
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    phone_number: "",
    user_type: "r",
    username: "",
    password: "",
    national_code: "",
    address: "",
    house_number: 0,
    last_date: 0,
    drug_hist: false,
    decease_hist: false,
    doctor: "-",
    offline_number: 0,
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isEdit && userToEdit) {
      setFormData((prev) => ({
        ...prev,
        ...userToEdit,
      }));
    }
  }, [isEdit, userToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const defaultValues = {
      address: "",
      national_code: "",
      house_number: 0,
      last_date: 0,
      drug_hist: false,
      decease_hist: false,
      doctor: "-",
      offline_number: 0,
    };

    const userData = { ...defaultValues, ...formData };

    try {
      if (isEdit) {
        await dispatch(
          editAsyncUser({ id: formData.username, ...userData, token })
        );
        showToast({ title: "کاربر ویرایش شد.", status: "success" });
      } else {
        await dispatch(addAsyncUsers({ ...userData, token }));
        showToast({ title: "کاربر اضافه شد.", status: "success" });
      }
      //بروز رسانی
      dispatch(getAsyncOpratorList(token));
    } catch (error) {
      showToast({
        title: "خطا در ثبت کاربر.",
        description: error.message || "خطای نامشخصی رخ داد.",
        status: "error",
      });
    }
  };

  return {
    formData,
    showPassword,
    handleChange,
    handleSubmit,
    setShowPassword,
  };
};

export default useUserForm;
