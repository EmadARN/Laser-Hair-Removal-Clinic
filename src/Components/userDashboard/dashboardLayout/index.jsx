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

const DashboardLayout = ({ dispatch, steperState, setSteperState }) => {
  const [username, setUsername] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState();
  const [{ auth_token }] = useCookies(["auth_token"]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { userNames, customerList } = useSelector(
    (store) => store.customerDashboard
  );

  useEffect(() => setPhoneNumber(localStorage.getItem("phoneNumber")), []);
  useEffect(() => setUsername(localStorage.getItem("phoneNumber")), []);
  useEffect(() => {
    if (auth_token) {
      dispatch(getCutomerList({ token: auth_token }));
      dispatch(getAsyncUserName({ token: auth_token }));
    }
  }, [dispatch, auth_token]);

  const handleButtonClick = () => {
    setLoading(true);
    router.push(
      checkPhoneNumberMatch()
        ? "userDashboard/choosingArea"
        : "userDashboard/userInformation"
    );
    if (
      router.pathname === "userDashboard/choosingArea" ||
      router.pathname === "userDashboard/userInformation"
    ) {
      setLoading(false);
    }
  };

  const checkPhoneNumberMatch = () =>
    customerList?.customer_list?.some(
      (customer) => customer.username === username && customer.name !== "user"
    );
  const reportsClick = () => {
    dispatch(setSteperState(steperState + 1));
    dispatch(getSessionRecords({ phoneNumber, auth_token }));
  };
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
        <Flex flexDirection="column" mb={3} width={{ base: "100%", md: "45%" }}>
          <Text color="gray.400" fontSize={{ base: "xs", sm: "sm" }}>
            خوش آمدید
          </Text>
          <Text pr={1} fontWeight="bold" color="gray.500">
            {checkPhoneNumberMatch()
              ? getCustomerName(userNames.username, customerList)
              : ""}
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
