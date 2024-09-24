import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { CiEdit } from "react-icons/ci";

const UserInfoBox = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      gap={3}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box width={"100%"}>
        <Text fontWeight={"bold"} textAlign={"right"} color={"#111"}>
          اطلاعات کاربری
        </Text>
      </Box>
      <Box
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        bgColor={"#ededed"}
        width={"100%"}
        height={"auto"}
        p={6}
        display={"flex"}
        justifyContent={"space-between"}
        borderRadius={"8px"}
      >
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <Box mb={3}>
            <Text mb={2} color={"#555"}>
              نام کاربری
            </Text>
            <Text fontSize={{ base: "15px", md: "20px" }} fontWeight={"bold"}>
              foroghh ahmadi
            </Text>
          </Box>

          <Box>
            <Text mb={2} color={"#555"}>
              رمز عبور
            </Text>
            <Text fontSize={"20px"} fontWeight={"bold"}>
              **********
            </Text>
          </Box>
        </Box>

        <Box>
          <Button
            value={"ghost"}
            fontWeight={"bold"}
            leftIcon={<CiEdit size={"25px"} />}
          >
            ویرایش
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UserInfoBox;
