import React from "react";
import { Grid, Box, Text, Button } from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useSelector } from "react-redux";

const SessionRecordDetails = ({ setSteperState, dispatch }) => {
  const { sessionRecords, loading, error } = useSelector(
    (store) => store.customerDashboard
  );

  if (loading === true) {
    return <h1>loading</h1>;
  }

  if (error) {
    return alert(error);
  }

  const reserveData = sessionRecords.reserve_list[0] || {};

  const getReserveStatus = (reserveType) => {
    switch (reserveType) {
      case "pe":
        return "معلق";
      case "co":
        return "تکمیل شده";
      case "ca":
        return "کنسل شده";
      case "do":
        return "در انتظار پرداخت";
      default:
        return "اطلاعات موجود نیست";
    }
  };

  const userDataFromAPI = [
    {
      id: 3,
      title: "وضعیت",
      value: getReserveStatus(reserveData.reserve_type),
    },
    {
      id: 1,
      title: "تاریخ",
      value: reserveData.reserve_time_str || "اطلاعات موجود نیست",
    },
    {
      id: 2,
      title: "زمان",
      value: reserveData.reserve_time_str.split(" ")[1] || "اطلاعات موجود نیست",
    },
    {
      id: 4,
      title: "مبلغ کل",
      value:
        `${reserveData.total_price_amount.toLocaleString()} تومان` ||
        "اطلاعات موجود نیست",
    },
    {
      id: 5,
      title: "نام نواحی",
      value: reserveData.laser_area_name || "نام ناحیه",
    },
  ];

  return (
    <Grid
      bgColor={"#F7F7F7"}
      width={"100%"}
      h={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        h={"auto"}
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        width={{ base: "100%", md: "45%" }}
        p={4}
      >
        <Box mb={4} textAlign={"right"} w={{ base: "100%", md: "40%" }}>
          <Button
            leftIcon={<FaLongArrowAltRight />}
            onClick={() => {
              dispatch(setSteperState(1));
            }}
          >
            بازگشت
          </Button>
        </Box>

        {userDataFromAPI ? (
          userDataFromAPI.map((item) => (
            <Box
              key={item.id}
              display={"flex"}
              justifyContent={"space-between"}
              p={4}
              w={"100%"}
            >
              <Box>
                <Text color={"#999"} fontSize={{ basel: "13px", md: "14px" }}>
                  {item.title}
                </Text>
              </Box>
              <Box>
                <Text
                  fontWeight={"bold"}
                  fontSize={{ basel: "13px", md: "14px" }}
                  color={
                    item.title === "وضعیت" && item.value === "تکمیل شده"
                      ? "green"
                      : "black"
                  }
                >
                  {item.value}
                </Text>
              </Box>
            </Box>
          ))
        ) : (
          <h1>data not</h1>
        )}
      </Box>
    </Grid>
  );
};

export default SessionRecordDetails;
