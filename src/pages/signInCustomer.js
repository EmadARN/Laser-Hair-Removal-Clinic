import MainModal from "@/Components/home/signinModal/main";
import NavBar from "@/Container/navbar/NavBar";
import { useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const SignInCustomer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    // بررسی اینکه کاربر به روت /signInCustomer وارد شده است
    if (router.pathname === "/signInCustomer") {
      onOpen(); // باز کردن مودال بلافاصله پس از وارد شدن به صفحه ساین این
    }
  }, [router.pathname, onOpen]); // هر بار که مسیر تغییر کرد، این اثر اجرا می‌شود

  return (
    <>
      <NavBar bgColor="#ffffff" onOpen={onOpen} />
      <MainModal onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default SignInCustomer;
