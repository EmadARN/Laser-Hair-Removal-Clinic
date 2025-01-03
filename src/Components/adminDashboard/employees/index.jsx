import React, { useEffect, useState } from "react";
import { Box, Spinner, Text, Skeleton } from "@chakra-ui/react";
import { RiShieldUserFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import AdminHeader from "../shared/AdminHeader";
import UserForm from "./modal/UserForm";
import Lists from "../shared/Lists";
import HeaderContent from "./modal/HeaderContent";
import BodyContent from "./modal/BodyContent";
import FooterContent from "./modal/FooterContent";
import ReusableSession from "../shared/ReussableSession";
import { getAsyncUsersList } from "@/features/adminDashboard/adminThunks";
import Loading from "@/Common/loading";

const Empolyees = () => {
  const dispatch = useDispatch();

  // Selector برای دریافت وضعیت بارگذاری، داده‌ها و توکن
  const { loading, error, users, token } = useSelector(
    (state) => state.adminDashboard
  );

  useEffect(() => {
    // اگر توکن وجود دارد، اکشن برای بارگذاری لیست کاربران را فراخوانی کنید
    if (token) {
      dispatch(getAsyncUsersList(token));
    }
  }, [dispatch, token]);

  if (loading) {
    return <Loading />;
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

  return (
    <>
      <Box sx={{ py: 6 }}>
        <AdminHeader
          headerTitle="کارمندان"
          btnValue="افزودن کارمند جدید"
          isEdit={false}
          icon={<RiShieldUserFill />}
          ModalBodyContent={{
            body: (
              <UserForm
                userToEdit={null}
                isEdit={false}
                users={users}
                token={token}
              />
            ),
          }}
          iconBtnDisply="none"
        />
      </Box>
      <Box sx={{ mt: 8 }}>
        {loading ? (
          Array(5)
            .fill(0)
            .map((_, index) => <Skeleton key={index} height="60px" my={2} />)
        ) : users.user_list && users.user_list.length > 0 ? (
          users.user_list.map((user, index) => {
            const userType = type(user);
            return (
              <Box  width={{base:"110vw",md:"100%"}} key={index}>
                <Lists
                  firstArea={user.username}
                  secondArea={user.name + " " + user.last_name}
                  thirdArea={userType}
                  leftArrowDisplay="none"
                  ModalBodyContent={{
                    body: (
                      <UserForm
                        userToEdit={user}
                        isEdit={true}
                        users={users}
                        token={token}
                      />
                    ),
                  }}
                  headerContentValue="ویرایش کارمند"
                  HeaderContent={<HeaderContent />}
                  BodyContent={<BodyContent />}
                  FooterContent={<FooterContent user={user} token={token} />}
                  iconBtnDisply="none"
                />
              </Box>
            );
          })
        ) : (
          <ReusableSession
            text="کاربری وجود ندارد"
            icon={<RiShieldUserFill />}
          />
        )}
      </Box>
    </>
  );
};

export default Empolyees;
