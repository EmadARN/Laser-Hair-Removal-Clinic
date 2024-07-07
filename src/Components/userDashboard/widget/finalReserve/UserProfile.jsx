import React, { useState } from "react";
import { Grid, Box, Text, Button } from "@chakra-ui/react";
import Section_title from "@/Common/section-title";
import { UserData } from "./DataForProfile";
const FinalReserve = () => {
  const [viewMore, setViewMore] = useState(false);
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
        alignItems={"flex-start"}
        w={"450px"}
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        mb={4}
      >
        <Box mb={2}>
          <Text color={"#999"}>خوش آمدید</Text>
        </Box>
        <Box>
          <Text fontWeight={"bold"}>نام و نام خانوادگی کاربر</Text>
        </Box>
      </Box>

      <Box
        h={"auto"}
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        width={"450px"}
        p={4}
      >
        <Box>
          <Section_title section_title="نوبت بعدی شما"></Section_title>
        </Box>

        <Box display={"flex"} justifyContent={"space-between"} p={2} w={"100%"}>
          <Box>
            <Text color={"#999"} fontSize={{ basel: "13px", md: "14px" }}>
              وضعیت
            </Text>
          </Box>
          <Box>
            <Text
              fontWeight={"bold"}
              color={"green"}
              fontSize={{ basel: "13px", md: "14px" }}
            >
              رزرو شده
            </Text>
          </Box>
        </Box>
        {!viewMore
          ? UserData.slice(0, 2).map((item) => {
              return (
                <Box
                  key={item.id}
                  display={"flex"}
                  justifyContent={"space-between"}
                  p={2}
                  w={"100%"}
                >
                  <Box>
                    <Text
                      color={"#999"}
                      fontSize={{ basel: "13px", md: "14px" }}
                    >
                      {item.title}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontWeight={"bold"}
                      fontSize={{ basel: "13px", md: "14px" }}
                    >
                      {item.value}
                    </Text>
                  </Box>
                </Box>
              );
            })
          : UserData.map((item) => {
              return (
                <>
                  <Box
                    key={item.id}
                    display={"flex"}
                    justifyContent={"space-between"}
                    p={2}
                    w={"100%"}
                  >
                    <Box>
                      <Text
                        color={"#999"}
                        fontSize={{ basel: "13px", md: "14px" }}
                      >
                        {item.title}
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        fontWeight={"bold"}
                        fontSize={{ basel: "13px", md: "14px" }}
                      >
                        {item.value}
                      </Text>
                    </Box>
                  </Box>
                </>
              );
            })}

        <Box
          mt={3}
          width={"100%"}
          display={"flex"}
          justifyContent={"flex-start"}
        >
          {!viewMore ? (
            <Button onClick={() => setViewMore(true)} color={"purple"}>
              مشاهده ی بیشتر
            </Button>
          ) : (
            <Button color="purple" onClick={() => setViewMore(false)}>
              مشاهده ی کمتر
            </Button>
          )}
        </Box>
      </Box>
    </Grid>
  );
};

export default FinalReserve;
