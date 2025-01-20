import React, { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import NavBar from "@/Layout/navbar/NavBar";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { getCustomerName } from "@/utils/getCustomerName";
import {
  getAsyncUserName,
  getCutomerList,
  getSessionRecords,
} from "@/features/customerDashboard/customerThunks";
import SecondBox from "./ui/SecondBox";
import FirstBox from "./ui/firstBox";
import { getDayPart } from "@/utils/extractDate";

const DashboardLayout = ({ dispatch, steperState, setSteperState }) => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [{ auth_token }] = useCookies(["auth_token"]);
  const [loading, setLoading] = useState(false);
  const [operatorName, setOperatorName] = useState();

  const router = useRouter();
  const { userNames, customerList, sessionRecords } = useSelector(
    (store) => store.customerDashboard
  );

  useEffect(() => {
    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    const storedOperatorName = localStorage.getItem("operatorName");
    setPhoneNumber(storedPhoneNumber);
    if (storedOperatorName) setOperatorName(storedOperatorName);
  }, []);

  useEffect(() => {
    if (auth_token) {
      dispatch(getCutomerList({ token: auth_token }));
      dispatch(getAsyncUserName({ token: auth_token }));
      dispatch(getSessionRecords({ phoneNumber, auth_token }));
    }
  }, [dispatch, auth_token, phoneNumber]);

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
      <NavBar bgColor="#ffffff" py={6} />
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        pt={16}
        bgColor="#efefef"
        height="100vh"
      >
        <Flex w="45%" justifyContent="space-between" alignItems="center">
          <Flex
            flexDirection="column"
            mb={1}
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
        <Box width={{ base: "100%", md: "45%" }}>
          <FirstBox
            operatorName={operatorName}
            sessionRecords={sessionRecords}
            customerList={customerList}
            userNames={userNames}
            loading={loading}
            handleButtonClick={handleButtonClick}
            checkPhoneNumberMatch={checkPhoneNumberMatch}
          />
        </Box>

        <SecondBox reportsClick={reportsClick} accountClick={accountClick} />
      </Flex>
    </>
  );
};

export default DashboardLayout;
