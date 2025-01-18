import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

// تابع کمکی برای حذف مقادیر از localStorage
const clearLocalStorage = () => {
  const keysToRemove = [
    "phoneNumber",
    "date",
    "name",
    "reserveId",
    "slots",
    "timeList",
  ];

  keysToRemove.forEach((key) => localStorage.removeItem(key));
};
const SecondBox = ({ sessionRecordClick }) => {
  const [cookies, , removeCookie] = useCookies(["auth_token"]);
  const router = useRouter();

  const handleLogout = () => {
    removeCookie("auth_token", { path: "/" });
    // حذف اطلاعات از localStorage با استفاده از تابع کمکی
    clearLocalStorage();

    router.push("/");
  };

  return (
    <Box
      sx={{
        bgColor: "#FFFFFF",
        mt: 4,
        width: { base: "100%", md: "45%" },
        borderRadius: "10px",
        p: 4,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        as="button"
        onClick={sessionRecordClick}
        sx={{
          w: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box mb={4}>
          <Text fontSize={{ base: "xs", md: "sm" }}>گزارش جلسات</Text>
        </Box>
        <Box>
          <IoIosArrowBack />
        </Box>
      </Box>
      <Box
        as="button"
        onClick={sessionRecordClick}
        sx={{
          w: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box mb={4}>
          <Text fontSize={{ base: "xs", md: "sm" }}>حساب کاربری</Text>
        </Box>
        <Box>
          <IoIosArrowBack />
        </Box>
      </Box>
      <hr />
      <Button
        mt={1}
        w={"100%"}
        p={0}
        display="flex"
        justifyContent={"flex-start"}
        variant={"ghost"}
        fontSize={{ base: "xs", md: "sm" }}
        color="red"
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

export default SecondBox;
