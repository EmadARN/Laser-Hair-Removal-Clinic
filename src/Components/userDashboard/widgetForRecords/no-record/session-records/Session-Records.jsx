import React from "react";
import { Grid, Box, Text, Button } from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Section_title from "@/Common/section-title";
import { IoIosArrowBack } from "react-icons/io";

const Session_Records = ({ setSteperState, steperState }) => {
  return (
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
          <Box
            w={"100%"}
            display="flex"
            justifyContent={"space-between"}
            as="button"
            // onClick={() => setSteperState(steperState + 1)}
          >
            <Box mb={4}>
              <Text fontSize={{ base: "xs", md: "sm" }}> دوشنبه</Text>
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
            // onClick={() => setSteperState(steperState + 1)}
          >
            <Box mb={4}>
              <Text fontSize={{ base: "xs", md: "sm" }}> دوشنبه</Text>
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
            // onClick={() => setSteperState(steperState + 1)}
          >
            <Box mb={4}>
              <Text fontSize={{ base: "xs", md: "sm" }}> دوشنبه</Text>
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
            // onClick={() => setSteperState(steperState + 1)}
          >
            <Box mb={4}>
              <Text fontSize={{ base: "xs", md: "sm" }}> دوشنبه</Text>
            </Box>

            <Box>
              <IoIosArrowBack />
            </Box>
          </Box>

          <hr />
        </Box>
      </Box>
    </Grid>
  );
};

export default Session_Records;
