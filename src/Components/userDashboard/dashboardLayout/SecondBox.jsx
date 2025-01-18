import React from "react";
import { Box, Text, Button, Divider } from "@chakra-ui/react";
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

// کامپوننت آیتم‌های منو
const MenuItem = ({ onClick, children }) => (
  <Box
    as="button"
    w="100%"
    display="flex"
    justifyContent="space-between"
    onClick={onClick}
    py={2}
  >
    <Text fontSize={{ base: "xs", md: "sm" }}>{children}</Text>
    <IoIosArrowBack />
  </Box>
);

const SecondBox = ({ reportsClick, accountClick }) => {
  const [, , removeCookie] = useCookies(["auth_token"]);
  const router = useRouter();

  const handleLogout = () => {
    removeCookie("auth_token");
    clearLocalStorage();
    router.push("/");
  };

  return (
    <Box
      bg="white"
      mt={4}
      w={{ base: "100%", md: "45%" }}
      borderRadius="10px"
      p={4}
      display="flex"
      flexDirection="column"
    >
      <MenuItem onClick={reportsClick}>گزارش جلسات</MenuItem>
      <Divider />
      <MenuItem onClick={accountClick}>حساب کاربری</MenuItem>
      <Divider />
      <Button
        mt={1}
        w="100%"
        display="flex"
        justifyContent="flex-start"
        variant="ghost"
        fontSize={{ base: "xs", md: "sm" }}
        color="red"
        p={0}
        leftIcon={<IoExitOutline size="18px" />}
        onClick={handleLogout}
        _hover={{ bg: "transparent" }}
        _focus={{ bg: "transparent" }}
        _active={{ bg: "red.50" }}
      >
        خروج از حساب کاربری
      </Button>
    </Box>
  );
};

export default SecondBox;
