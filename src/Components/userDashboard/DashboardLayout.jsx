import React, { useEffect, useState } from "react";
import { Box, Grid, Text, Button, Flex } from "@chakra-ui/react";
import Section_title from "@/Common/section-title";
import Image from "next/image";
import SessionRecordSection from "@/Common/session_Record_section/SessionRecordSection";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { getCustomerName } from "@/utils/getCustomerName";
import NavBar from "@/Layout/navbar/NavBar";
import {
  getAsyncUserName,
  getCutomerList,
} from "@/features/customerDashboard/customerThunks";

const DashboardLayout = ({
  setSteperState,
  steperState,
  sessionRecordClick,
}) => {
  const [username, setUsername] = useState(null);
  const [{ auth_token }] = useCookies(["auth_token"]);
  const router = useRouter();

  const dispatch = useDispatch();
  const { userNames, customerList } = useSelector(
    (store) => store.customerDashboard
  );

  useEffect(() => setUsername(localStorage.getItem("phoneNumber")), []);
  useEffect(() => {
    if (auth_token) {
      dispatch(getCutomerList({ auth_token }));
      dispatch(getAsyncUserName({ token: auth_token }));
    }
  }, [dispatch, auth_token]);

  const handleButtonClick = () => {
    router.push(
      checkPhoneNumberMatch()
        ? "userDashboard/choosingArea"
        : "userDashboard/userInformation"
    );
  };

  const checkPhoneNumberMatch = () =>
    customerList?.customer_list?.some(
      (customer) => customer.username === username && customer.name !== "user"
    );

  const InfoRow = ({ label, value }) => (
    <Flex justifyContent="space-between" alignItems="center" pb={4}>
      <Text color="gray.500">{label}</Text>
      <Text>{value}</Text>
    </Flex>
  );

  return (
    <>
      <NavBar bgColor="#ffffff" />
      <Grid
        display="flex"
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

        <Box
          width={{ base: "100%", md: "45%" }}
          p={4}
          display="flex"
          flexDirection="column"
          bgColor="#fff"
          borderRadius="10px"
        >
          <Section_title section_title="نوبت بعدی شما" />
          {checkPhoneNumberMatch() ? (
            <>
              <InfoRow label="وضعیت" value="رزرو نشده" />
              <InfoRow label="تاریخ نوبت بعدی" value="1402/1/24" />
            </>
          ) : (
            <Box
              mb={6}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image
                src="/images/download.png"
                width={200}
                height={200}
                alt="Picture of the author"
              />
              <Text mt={2} color="#7777">
                تا الان نوبتی برای شما ثبت نشده است
              </Text>
            </Box>
          )}
          <Box display="flex" justifyContent="center" width="100%">
            <Button
              width="90%"
              rounded="md"
              variant="solid"
              bgColor="brand.400"
              color="purple.50"
              _hover={{ bgColor: "purple.100", color: "purple.500" }}
              transition=".5s"
              fontWeight="500"
              onClick={handleButtonClick}
            >
              رزرو نوبت
            </Button>
          </Box>
        </Box>

        <SessionRecordSection
          sessionRecordClick={sessionRecordClick}
          steperState={steperState}
          setSteperState={setSteperState}
        />
      </Grid>
    </>
  );
};

export default DashboardLayout;
