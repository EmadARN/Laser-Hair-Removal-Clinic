import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import backToUp from "@/utils/BackToUp";
import { Button } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

const BackToUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      // اگر مقدار اسکرول بیشتر از 300 شد، دکمه نمایش داده شود
      if (currentScrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const BtnStyle = {
    backgroundColor: "gray.100",
    color: "gray.600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    _hover: {
      backgroundColor: "brand.400",
      boxShadow: "0 15px 25px rgba(0, 0, 0, 0.2)",
      color: "#fff",
      transform: "translateY(-5px)",
    },
    _active: {
      backgroundColor: "#2c5282",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <motion.div
      initial={{ x: "-120%" }} // شروع از بیرون سمت چپ با کمی فاصله بیشتر
      animate={{
        x: isVisible ? "0" : "-120%", // ورود به صفحه یا خروج کامل از آن
        transition: { duration: 0.5 },
      }}
      style={{
        position: "fixed", // برای اینکه همیشه همراه اسکرول باشد
        left: 10, // فاصله از سمت چپ
        bottom: 70, // کمی از پایین فاصله داشته باشد
        transform: "translateY(-50%)", // برای مرکز کردن دکمه در محور Y
        zIndex: 1000,
      }}
    >
      <Button sx={BtnStyle} onClick={() => backToUp()}>
        <ArrowUpIcon fontSize="18px" />
      </Button>
    </motion.div>
  );
};

export default BackToUp;
