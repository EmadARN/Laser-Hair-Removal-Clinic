import React, { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import NavBar from "@/Layout/navbar/NavBar";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import FirstBox from "./FirstBox";
import SecondBox from "./SecondBox";
import { useCookies } from "react-cookie";
import { getCustomerName } from "@/utils/getCustomerName";
import {
  getAsyncUserName,
  getCutomerList,
  getSessionRecords,
} from "@/features/customerDashboard/customerThunks";
import { getDayPart } from "@/utils/getTodayDate";

const DashboardLayout = ({ dispatch, steperState, setSteperState }) => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [{ auth_token }] = useCookies(["auth_token"]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { userNames, customerList } = useSelector(
    (store) => store.customerDashboard
  );

  // Effect برای تنظیم شماره تلفن کاربر از localStorage
  useEffect(() => {
    const phone = localStorage.getItem("phoneNumber");
    setPhoneNumber(phone);
  }, []);

  // Effect برای ارسال درخواست به API فقط در صورت وجود توکن احراز هویت
  useEffect(() => {
    if (auth_token) {
      dispatch(getCutomerList({ token: auth_token }));
      dispatch(getAsyncUserName({ token: auth_token }));
    }
  }, [dispatch, auth_token]);

  // بررسی اینکه آیا شماره تلفن با لیست مشتریان مطابقت دارد
  const handleButtonClick = () => {
    setLoading(true);
    const route = checkPhoneNumberMatch()
      ? "userDashboard/choosingArea"
      : "userDashboard/userInformation";
    router.push(route);
  };

  // بررسی تطابق شماره تلفن کاربر با لیست مشتریان
  const checkPhoneNumberMatch = () => {
    return customerList?.customer_list?.some(
      (customer) =>
        customer.username === phoneNumber && customer.name !== "user"
    );
  };

  // تابع برای کلیک روی گزارش‌ها و انجام عملیات مربوطه
  const reportsClick = () => {
    dispatch(setSteperState(steperState + 1));
    dispatch(getSessionRecords({ phoneNumber, auth_token }));
  };

  // تابع برای کلیک روی حساب کاربری و تغییر وضعیت استپر
  const accountClick = () => {
    dispatch(setSteperState(steperState + 2));
  };

  return (
    <>
      <NavBar bgColor="#ffffff" />
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        pt={20}
        pb={8}
        bgColor="#efefef"
        height="100vh"
      >
        <Flex w="45%" justifyContent="space-between" alignItems="center">
          <Flex
            flexDirection="column"
            mb={3}
            width={{ base: "100%", md: "45%" }}
          >
            <Text color="gray.400" fontSize={{ base: "xs", sm: "sm" }}>
              خوش آمدید
            </Text>
            <Text pr={1} fontWeight="bold" color="gray.500">
              {checkPhoneNumberMatch()
                ? getCustomerName(userNames.username, customerList)
                : ""}{" "}
            </Text>
          </Flex>
          <Text fontWeight="bold" color="gray.500">
            {getDayPart()} بخیر
          </Text>
        </Flex>
        <FirstBox
          loading={loading}
          handleButtonClick={handleButtonClick}
          checkPhoneNumberMatch={checkPhoneNumberMatch}
        />
        <SecondBox reportsClick={reportsClick} accountClick={accountClick} />
      </Flex>
    </>
  );
};

export default DashboardLayout;
