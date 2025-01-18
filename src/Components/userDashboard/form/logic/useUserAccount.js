import { useState, useEffect } from "react";
import {  useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import {
  EditCustomerInformation,
  getCutomerList,
} from "@/features/customerDashboard/customerThunks";
import { useCustomToast } from "@/utils/useCustomToast ";

const useUserAccount = (phoneNumber, setSteperState, dispatch) => {
  const { showToast } = useCustomToast();
  const [{ auth_token }] = useCookies(["auth_token"]);
  const { loading, customerList } = useSelector(
    (store) => store.customerDashboard
  );
  const [inputsData, setInputsData] = useState({
    name: "",
    last_name: "",
    phone_number: "",
    national_code: "",
    address: "",
    house_number: "",
    drug_hist: false,
    decease_hist: false,
    doctor: "-",
    offline_number: 0,
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [drugHistory, setDrugHistory] = useState("false");
  const [diseaseHistory, setDiseaseHistory] = useState("false");
  const [filteredForms, setFilteredForms] = useState([]);

  useEffect(() => {
    dispatch(getCutomerList({ token: auth_token }));
  }, [auth_token]);

  // فیلتر کردن و ادغام داده‌ها بر اساس شماره موبایل کاربر
  useEffect(() => {
    if (customerList) {
      const filteredInfo =
        customerList.customer_information_list?.filter(
          (user) => user.user === phoneNumber
        ) || [];

      const filteredList =
        customerList.customer_list?.filter(
          (user) => user.username === phoneNumber
        ) || [];

      // ادغام اطلاعات بر اساس شماره کاربر
      const mergedData = filteredInfo.map((info) => {
        const matchingUser = filteredList.find(
          (user) => user.username === info.user
        );
        return { ...info, ...matchingUser };
      });

      setFilteredForms(mergedData);
    }
  }, [customerList, phoneNumber]);

  // مقداردهی به فرم بر اساس اولین مورد فیلتر شده
  useEffect(() => {
    if (filteredForms.length > 0) {
      setInputsData((prev) => ({
        ...prev,
        ...filteredForms[0],
      }));
    }
  }, [filteredForms]);

  // بررسی اینکه آیا فرم کامل است یا خیر (برای فعال/غیرفعال کردن دکمه ارسال)
  useEffect(() => {
    const requiredFields = [
      "name",
      "last_name",
      "phone_number",
      "national_code",
      "address",
      "house_number",
    ];
    setIsDisabled(!requiredFields.every((field) => inputsData[field]?.trim()));
  }, [inputsData]);

  // تابع برای تغییر مقادیر ورودی‌های فرم
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputsData((prev) => ({ ...prev, [name]: value }));
  };

  // تابع برای تغییر مقادیر رادیو باتن‌ها (تاریخچه دارو و بیماری)
  const handleRadioChange = (name, value) => {
    setInputsData((prev) => ({ ...prev, [name]: value === "true" }));
    if (name === "drug_hist") setDrugHistory(value);
    if (name === "decease_hist") setDiseaseHistory(value);
  };

  // تابع ارسال اطلاعات فرم به سرور
  const submitHandler = async () => {
    const result = await dispatch(
      EditCustomerInformation({ ...inputsData, auth_token })
    );
    showToast({
      title: result.meta.requestStatus === "fulfilled" ? "موفقیت‌آمیز" : "خطا",
      description:
        result.meta.requestStatus === "fulfilled"
          ? "اطلاعات ویرایش شد"
          : "خطا در ویرایش اطلاعات",
      status: result.meta.requestStatus === "fulfilled" ? "success" : "error",
    });
  };

  // برگشت مقادیر مورد نیاز برای استفاده در کامپوننت
  return {
    inputsData,
    isDisabled,
    drugHistory,
    diseaseHistory,
    filteredForms,
    handleChange,
    handleRadioChange,
    submitHandler,
    loading,
    setSteperState,
  };
};

export default useUserAccount;
