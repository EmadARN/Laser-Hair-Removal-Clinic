import React, { useState } from "react";
import { Box, Text, Button, Divider } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import Loading from "@/Common/loading";

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
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      removeCookie("auth_token", { path: "/" });
      clearLocalStorage();
      router.push("/");
    } catch (error) {
      console.error("خطا در خروج:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  if (isLoggingOut) {
    return (
      <Box
        position="fixed"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="rgba(255, 255, 255, 0.8)"
        zIndex={9999}
      >
        <Loading />
      </Box>
    );
  }

  return (
    <Box
      bg="white"
      mt={4}
      w={{ base: "100%", md: "45%" }}
      borderRadius="10px"
      px={4}
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
        colorScheme="red"
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
