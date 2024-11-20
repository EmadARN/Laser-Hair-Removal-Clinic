import React from "react";
import { Grid, Box, Text, Button } from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Section_title from "@/Common/section-title";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { extractDate } from "@/utils/extractDate";
import No_Records from "./No_Records";
import NavBar from "@/Layout/navbar/NavBar";


const Session_Records = ({ setSteperState, steperState }) => {
  const { sessionRecords, loading, error } = useSelector(
    (store) => store.customerDashboard
  );

  // فرض می‌کنیم شما از moment.js یا هر کتابخانه مشابهی استفاده کنید، اما اینجا یک تابع ساده برای فرمت تاریخ می‌سازیم.
  function formatReserveTime(reserve_time_str) {
    // جدا کردن تاریخ و روز از رشته
    const [date, dayOfWeek] = reserve_time_str.split(" ");

    // تبدیل تاریخ به فرمت ایرانی
    const [year, month, day] = date.split("/");

    // ترکیب روز و تاریخ در فرمت جدید
    return `${dayOfWeek} ${day}/${month}/${year}`;
  }

  if (loading === true) {
    return <h1>loading</h1>;
  }

  if (error) {
    return alert(error);
  }

  if (!sessionRecords.reserve_list.length) {
    return (
      <>
        <NavBar bgColor="#ffffff" />
        <No_Records setSteperState={setSteperState} />
      </>
    );
  } else {
    return (
      <>
        <NavBar bgColor="#ffffff" />
        <Grid
          alignItems={"center"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          width={"100%"}
          h={"100vh"}
          bgColor={"#F7F7F7"}
        >
          <Box mb={4} textAlign={"right"} w={{ base: "100%", md: "40%" }}>
            <Button
              leftIcon={<FaLongArrowAltRight />}
              onClick={() => {
                setSteperState(0);
              }}
            >
              بازگشت
            </Button>
          </Box>
          <Box
            w={{ base: "100%", md: "40%" }}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            h={"auto"}
            p={3}
          >
            <Box textAlign={"right"}>
              <Section_title section_title="گزارش جلسات"></Section_title>
            </Box>
            <Box
              width={"100%"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              {sessionRecords.reserve_list.map((rec) => (
                <>
                  <Box
                    key={rec.id}
                    w={"100%"}
                    display="flex"
                    justifyContent={"space-between"}
                    as="button"
                    onClick={() => setSteperState(steperState + 1)}
                  >
                    <Box mb={4}>
                      <Text fontSize={{ base: "xs", md: "sm" }}>
                        {" "}
                        {formatReserveTime(rec.reserve_time_str)}
                      </Text>
                    </Box>

                    <Box>
                      <IoIosArrowBack />
                    </Box>
                  </Box>

                  <hr />
                </>
              ))}
            </Box>
          </Box>
        </Grid>
      </>
    );
  }

  // return (
  //   <>

  //     <NavBar bgColor="#ffffff" />
  //     <Grid
  //       alignItems={"center"}
  //       display={"flex"}
  //       justifyContent={"center"}
  //       flexDirection={"column"}
  //       width={"100%"}
  //       h={"100vh"}
  //       bgColor={"#F7F7F7"}
  //     >
  //       <Box mb={4} textAlign={"right"} w={{ base: "100%", md: "40%" }}>
  //         <Button
  //           leftIcon={<FaLongArrowAltRight />}
  //           onClick={() => {
  //             setSteperState(0);
  //           }}
  //         >
  //           بازگشت
  //         </Button>
  //       </Box>
  //       <Box
  //         w={{ base: "100%", md: "40%" }}
  //         boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
  //         h={"auto"}
  //         p={3}
  //       >
  //         <Box textAlign={"right"}>
  //           <Section_title section_title="گزارش جلسات"></Section_title>
  //         </Box>
  //         <Box
  //           width={"100%"}
  //           display={"flex"}
  //           flexDirection={"column"}
  //           alignItems={"center"}
  //         >
  //           {sessionRecords.reserve_list.map((rec)=>(
  //             <>
  //             <Box
  //             key={rec.id}
  //             w={"100%"}
  //             display="flex"
  //             justifyContent={"space-between"}
  //             as="button"
  //             onClick={() => setSteperState(steperState + 1)}
  //           >
  //             <Box mb={4}>
  //               <Text fontSize={{ base: "xs", md: "sm" }}>  {formatReserveTime(rec.reserve_time_str)}</Text>
  //             </Box>

  //             <Box>
  //               <IoIosArrowBack />
  //             </Box>
  //           </Box>

  //           <hr />
  //           </>
  //           ))}

  //         </Box>
  //       </Box>
  //     </Grid>
  //   </>
  // );
};

export default Session_Records;
