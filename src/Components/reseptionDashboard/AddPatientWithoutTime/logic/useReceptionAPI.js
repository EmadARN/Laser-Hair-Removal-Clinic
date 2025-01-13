import { useDispatch } from "react-redux";
import {
  addCustomerWithOutTime,
  ReserveReceptionWithOutTime,
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

  const handleSubmit = () => {
    dispatch(addCustomerWithOutTime(inputsData));
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
