import React from "react";
import { Box, Grid, Text, Button, Flex } from "@chakra-ui/react";
import Section_title from "@/Common/section-title";
import Image from "next/image";
import NavBar from "@/Container/navbar/NavBar";
import SessionRecordSection from "@/Common/session_Record_section/SessionRecordSection";
import { useRouter } from "next/router";

const DashboardLayout = ({ setSteperState, steperState }) => {
  const router = useRouter();
  return (
    <>
      <NavBar bgColor="#ffffff" />

      <Grid
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        pt={20}
        pb={8}
        bgColor={"#efefef"}
      >
        <Flex
          justifyContent="flex-start"
          flexDirection="column"
          mb={3}
          width={{ base: "100%", md: "45%" }}
        >
          <Text color="gray.400" fontSize={{ base: "xs", sm: "sm" }}>
            خوش آمدید
          </Text>
          <Text pr={1} fontWeight={"bold"} color={"gray.500"}>
            ایسان
          </Text>
        </Flex>

        <Box
          width={{ base: "100%", md: "45%" }}
          p={4}
          display="flex"
          flexDirection={"column"}
          bgColor={"#fff"}
          borderRadius="10px"
        
        >
          <Box display={"flex"} justifyContent={"flex-start"}>
            <Section_title section_title="نوبت بعدی شما"></Section_title>
          </Box>

          <Box
            mb={6}
            display={"flex"}
            justifyContent="center"
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Image
              src="/images/download.png"
              width={200}
              height={200}
              alt="Picture of the author"
            />

            <Text mt={2} color={"#7777"}>
              تا الان نوبتی برای شما ثبت نشده است
            </Text>
          </Box>

          <Box display="flex" justifyContent="center" width="100%">
            <Button
              width="90%"
              rounded="20px"
              variant="solid"
              bgColor="brand.400"
              color="purple.50"
              _hover={{
                bgColor: "purple.100",
                color: "purple.500",
              }}
              transition=".5s"
              mr={3}
              fontWeight="500"
              onClick={() => router.push("userDashboard/userInformation")}
            >
              رزرو نوبت
            </Button>
          </Box>
        </Box>

        <SessionRecordSection
          steperState={steperState}
          setSteperState={setSteperState}
        />
      </Grid>
    </>
  );
};

export default DashboardLayout;
