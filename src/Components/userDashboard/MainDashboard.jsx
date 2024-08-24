import React from "react";
import { Box, Grid, Text, Button } from "@chakra-ui/react";
import Section_title from "@/Common/section-title";
import Image from "next/image";
import NavBar from "@/Container/navbar/NavBar";
import SessionRecordSection from "@/Common/session_Record_section/SessionRecordSection";

const MainDashboard = ({ page, setPage, setSteperState, steperState }) => {
  return (
    <>
      <NavBar bgColor="#ffffff" />

      <Grid
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        pt={16}
        pb={8}
        bgColor={"#efefef"}
      >
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          mb={3}
          width={{ base: "100%", md: "45%" }}
        >
          <Text color="#ddd" fontSize={{ base: "xs", sm: "sm" }}>
            خوش آمدید
          </Text>
        </Box>

        <Box
          mb={6}
          width={{ base: "100%", md: "45%" }}
          p="4"
          display="flex"
          flexDirection={"column"}
          bgColor={"#fff"}
          borderRadius="10px"
        >
          <Box display={"flex"} justifyContent={"flex-start"}>
            <Section_title section_title="موجودی کیف پول شما"></Section_title>
          </Box>

          <Box display="flex" justifyContent="center">
            <Text fontWeight={"bold"} color={"#888"}>
              0تومان
            </Text>
          </Box>
        </Box>

        <Box
          width={{ base: "100%", md: "45%" }}
          p={4}
          display="flex"
          flexDirection={"column"}
          bgColor={"#fff"}
          borderRadius="10px"
          mb={6}
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
              onClick={() => setPage(page + 1)}
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

export default MainDashboard;
