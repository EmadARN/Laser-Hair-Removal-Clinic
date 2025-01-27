import {
  ReserveReceptionWithOutTime,
  addSignupCustomer,
  getCutomerList,
  todayDate,
} from "@/features/receptionDashboard/receptionThunks";
import { useCustomToast } from "@/utils/useCustomToast ";

const useReceptionAPI = ({
  inputsData,
  usernameValue,
  resetForm,
  setUsernameValue,
  auth_Employee_token,
  dispatch,
}) => {
  const { showToast } = useCustomToast();

  const handleSubmit = async () => {
    const updateUser = {
      ...inputsData,
      username: inputsData.phone_number,
      password: "",
      last_date: "",
    };
    const result = await dispatch(
      addSignupCustomer({ ...updateUser, auth_Employee_token })
    );
    showToast({
      title: result.meta.requestStatus === "fulfilled" ? "موفقیت‌آمیز" : "خطا",
      description:
        result.meta.requestStatus === "fulfilled"
          ? "اطلاعات ویرایش شد"
          : "خطا در ویرایش اطلاعات",
      status: result.meta.requestStatus === "fulfilled" ? "success" : "error",
    });

    resetForm();
  };

  const acceptPhoneNumber = async () => {
    const result = await dispatch(
      ReserveReceptionWithOutTime({ usernameValue, auth_Employee_token })
    );

    if (result.meta.requestStatus === "fulfilled") {
      showToast({
        title: " کاربر با موفقیت اضافه شد ",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      dispatch(getCutomerList({ auth_Employee_token }));
      dispatch(todayDate({ auth_Employee_token }));
      setUsernameValue("");
    }
  };

  return { handleSubmit, acceptPhoneNumber };
};

export default useReceptionAPI;
