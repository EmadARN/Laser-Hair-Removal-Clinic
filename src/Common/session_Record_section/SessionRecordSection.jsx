import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import { firstBox, secBox, buttonStyle } from "./Style";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

const SessionRecordSection = ({ setSteperState, steperState }) => {
  const [cookies, , removeCookie] = useCookies(["auth_token"]);
  const router = useRouter();

  const handleLogout = () => {
    removeCookie("auth_token", { path: "/" });
    router.push("/");
  };

  return (
    <Box sx={firstBox}>
      <Box
        sx={secBox}
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
      <Button
        mt={1}
        w={"100%"}
        display="flex"
        justifyContent={"flex-start"}
        variant={"ghost"}
        sx={buttonStyle}
        leftIcon={<IoExitOutline size={"18px"} />}
        onClick={handleLogout}
        _hover={{ bgColor: "transparent" }}
        _focus={{ bgColor: "transparent" }}
        _active={{ bgColor: "red.50" }}
      >
        خروج از حساب کاربری
      </Button>
    </Box>
  );
};

export default SessionRecordSection;
