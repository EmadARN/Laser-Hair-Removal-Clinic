import React, { useEffect } from "react";
import ModalBodyContent from "./widget/modalDefineDetails/ModalBodyContent";
import ModalFooterContent from "./widget/modalDefineDetails/ModalFooterContent";
import BodyContent from "./widget/modalAttentionDetails/BodyContent";
import FooterContent from "./widget/modalAttentionDetails/FooterContent";
import HeaderContent from "./widget/modalAttentionDetails/HeaderContent";
import Lists from "../../common/Lists";
import { Box, Spinner, Text } from "@chakra-ui/react";
import AdminHeader from "../AdminHeader/AdminHeader";
import { RiShieldUserFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncOpratorList } from "@/features/adminDashboard/adminDashboardSlice";

const Empolyees = () => {
  const dispatch = useDispatch();

  // Selector برای دریافت وضعیت بارگذاری، داده‌ها و توکن
  const { loading, error, users, token } = useSelector(
    (state) => state.adminDashboard
  );

  useEffect(() => {
    // اگر توکن وجود دارد، اکشن برای بارگذاری لیست کاربران را فراخوانی کنید
    if (token) {
      dispatch(getAsyncOpratorList(token));
    }
  }, [dispatch, token]);

  // مدیریت وضعیت بارگذاری و خطا
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Text color="red.500">خطا در بارگذاری داده‌ها: {error}</Text>;
  }
  const type = (user) => {
    return user.user_type === "o"
      ? "اوپراتور"
      : user.user_type === "r"
      ? "منشی"
      : "نامشخص";
  };
  console.log(users);

  return (
    <>
      <Box sx={{ py: 6 }}>
        <AdminHeader
          headerTitle="کارمندان"
          btnValue="افزودن کارمند جدید"
          icon={<RiShieldUserFill />}
          ModalBodyContent={ModalBodyContent}
          addDisplay="none"
          ModalFooterContent={ModalFooterContent}
          iconBtnDisply="none"
        />
      </Box>
      <Box sx={{ mt: 8 }}>
        {users.operator_list && users.operator_list.length > 0 ? (
          users.operator_list.map((user) => {
            const userType = type(user);
            return (
              <Lists
                key={user.id}
                firstArea={user.username}
                secondArea={user.name + " " + user.last_name}
                thirdArea={userType}
                ModalBodyContent={ModalBodyContent}
                ModalFooterContent={ModalFooterContent}
                HeaderContent={HeaderContent}
                headerContentValue="ویرایش کارمند"
                BodyContent={BodyContent}
                FooterContent={FooterContent}
                iconBtnDisply="none"
                addDisplay="none"

              />
            );
          })
        ) : (
          <Text>هیچ کارمندی وجود ندارد.</Text>
        )}
      </Box>
    </>
  );
};

export default Empolyees;
