import React, { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
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
  const { userNames, customerList ,sessionRecords} = useSelector(
    (store) => store.customerDashboard
  );


  
  useEffect(() => {
    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    setPhoneNumber(storedPhoneNumber);
    setUsername(storedPhoneNumber);
  }, []);


  useEffect(() => {
    if (auth_token) {
      dispatch(getCutomerList({ token: auth_token }));
      dispatch(getAsyncUserName({ token: auth_token }));
      dispatch(getSessionRecords({ phoneNumber, auth_token }));
    }
  }, [dispatch, auth_token,phoneNumber]);




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
  const sessionRecordClick = () => {
    dispatch(setSteperState(steperState + 1));
    dispatch(getSessionRecords({ phoneNumber, auth_token }));
  };

  const getReserveStatus = (reserveType) =>
    RESERVE_STATUSES[reserveType] || "اطلاعات موجود نیست";

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
        <Box mb={3} width={{ base: "100%", md: "45%" }}>
          <FirstBox
          sessionRecords={sessionRecords}
            customerList={customerList}
            userNames={userNames}
            loading={loading}
            handleButtonClick={handleButtonClick}
            checkPhoneNumberMatch={checkPhoneNumberMatch}
          />
        </Box>

        <SecondBox sessionRecordClick={sessionRecordClick} />
      </Flex>
    </>
  );
};

export default DashboardLayout;
