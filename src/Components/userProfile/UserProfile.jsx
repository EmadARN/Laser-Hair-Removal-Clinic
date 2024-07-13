import React, { useState } from "react";
import { Grid, Box, Text, Button,useDisclosure, } from "@chakra-ui/react";
import Section_title from "@/Common/section-title";
import { UserData } from "./DataForProfile";
import { IoIosArrowBack } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import Session_Records from "../userDashboard/widgetForRecords/no-record/session-records/Session-Records";
import CancelTurnModal from "./cancel turn modal/CancelTurnModal";
const UserProfile = () => {
  const [viewMore, setViewMore] = useState(false);
  const [steperState, setSteperState] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();
  if (steperState === 0) {
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
          width={{ base: "100%", md: "45%" }}
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
          width={{ base: "100%", md: "45%" }}
          p={4}
        >
          <Box>
            <Section_title section_title="نوبت بعدی شما"></Section_title>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            p={2}
            w={"100%"}
          >
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
            
           <Box mt={3} display={'flex'} justifyContent={'center'} width={'100%'}> <Button onClick={onOpen} width={'95%'} textAlign={'center'}>لغو نوبت</Button></Box>

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

        <Box
          mt={4}
          width={{ base: "100%", md: "45%" }}
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          borderRadius="10px"
          p={4}
          display="flex"
          flexDirection={"column"}
        >
          <Box
            w={"100%"}
            display="flex"
            justifyContent={"space-between"}
            as="button"
            onClick={() => setSteperState(steperState + 1)}
          >
            <Box mb={4}>
              <Text fontSize={{ base: "xs", md: "sm" }}>گزارش جلسات</Text>
            </Box>

            <Box>
              <IoIosArrowBack />
            </Box>
          </Box>

          <hr />

          <Box
            w={"100%"}
            display="flex"
            justifyContent={"space-between"}
            as="button"
            mb={4}
          >
            <Box mt={2}>
              <Text fontSize={{ base: "xs", md: "sm" }}> ناحیه کاربری</Text>
            </Box>

            <Box mt={2}>
              <IoIosArrowBack />
            </Box>
          </Box>

          <hr />

          <Box mt={1} w={"100%"} display="flex" justifyContent={"flex-start"}>
            <Button
              fontSize={{ base: "xs", md: "sm" }}
              variant={"ghost"}
              color={"red"}
              leftIcon={<IoExitOutline size={"18px"} />}
            >
              خروج از حساب کاربری
            </Button>
          </Box>
        </Box>

        {isOpen ? (
          <CancelTurnModal onOpen={onOpen} onClose={onClose} isOpen={isOpen}></CancelTurnModal>
         
        ) : null}
      </Grid>
    );
  } else if (steperState === 1) {
    return (
      <Session_Records
        setSteperState={setSteperState}
        steperState={steperState}
      />
    );
  }
};

export default UserProfile;
