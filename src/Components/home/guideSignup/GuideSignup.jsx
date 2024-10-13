import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Button, Flex, Text, Icon } from "@chakra-ui/react";
import { get_turn_data } from "@/constants";
import Section_title from "@/Common/section-title";

export const GuideSignup = ({
  tabs: propTabs = get_turn_data,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0] || null);
  const [tabs] = useState(propTabs);
  useEffect(() => {
    const interval = setInterval(() => {
      moveToNextTab();
    }, 4000); // هر 4 ثانیه تب عوض می‌شود
    return () => clearInterval(interval);
  }, [tabs, active]);
  const moveToNextTab = () => {
    const currentIdx = tabs.indexOf(active);
    const nextIdx = (currentIdx + 1) % tabs.length; // حرکت به تب بعدی
    setActive(tabs[nextIdx]);
  };
  return (
    <Box
      px={{ base: 10, md: 28 }}
      mx={2}
      py={4}
      minH={"350px"}
      bgColor={"#fff"}
      rounded={"25px"}
    >
      <Section_title
        section_title="نحوه دریاف نوبت"
        size={"20px"}
      ></Section_title>
      <Flex flexDirection={{ base: "row", lg: "column" }}>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          alignItems="start"
          justifyContent="center"
          overflowX="auto"
          maxWidth="full"
          width="full"
        >
          {tabs.map((tab) => (
            <Flex
              key={tab.id}
              flexDirection={{ base: "column", lg: "row" }}
              alignItems="center"
              justifyContent="center"
            >
              <Button
                onClick={() => setActive(tab)} // فقط وضعیت فعال را تنظیم کنید
                position="relative"
                paddingX={4}
                paddingY={2}
                width={{ base: "110px", lg: "200px" }}
                bg={active?.id === tab.id ? "brand.400" : "#F7F7F7"}
                boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
                color={active?.id === tab.id ? "#F7F7F7" : "#222"}
                _hover={{ color: "#fff" }}
                borderRadius={0} // حذف فاصله بین تب‌ها و خطوط
              >
                <Flex
                  sx={{
                    position: "relative",
                    color: active?.id === tab.id ? "white" : "#666",
                    alignItems: "center",
                    fontSize: { base: "10px", lg: "18px" },
                  }}
                >
                  <Icon ml={2}>{tab.icon}</Icon>
                  {tab.title}
                </Flex>
              </Button>
              {/* خط بین تب‌ها */}
              {tabs.indexOf(tab) < tabs.length - 1 && (
                <Box
                  height={{ base: "20px", lg: "2px" }}
                  width={{ base: "2px", lg: "20px" }}
                  bg="purple.200"
                />
              )}
            </Flex>
          ))}
        </Flex>
        <FadeInDiv
          tabs={tabs}
          active={active}
          key={active?.id}
          className={contentClassName}
        />
      </Flex>
    </Box>
  );
};

export const FadeInDiv = ({ tabs, active }) => {
  return (
    <Box
      position="relative"
      width="full"
      height="full"
      mt={{ base: 0, lg: 10 }}
    >
      {tabs.map((tab) => (
        <motion.div
          key={tab.id}
          initial={{ opacity: 0, scale: 0.8, y: 20 }} // حالت اولیه: کوچک‌تر و پایین‌تر
          animate={
            active?.id === tab.id
              ? { opacity: 1, scale: 1, y: 0 } // تب فعال به صورت کامل و با اندازه اصلی و بالا
              : { opacity: 0.4, scale: 0.6, y: 20 } // تب‌های قبلی کمی کمرنگ‌تر و کوچک‌تر و پایین‌تر
          }
          exit={{ opacity: 0, scale: 0.8, y: 20 }} // خروج با کم شدن اندازه و پایین‌تر
          transition={{ duration: 0.8 }} // زمان انیمیشن نرم‌تر
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 10,
            zIndex: active?.id === tab.id ? 1 : 0, // تب فعال در بالاترین لایه
          }}
        >
          <Box
            p={4}
            bg="#F7F7F7"
            borderRadius="md"
            color="gray.600"
            shadow="md"
            minH={{ base: "220px", lg: "130px" }}
            minW={{ base: "170px", lg: "200px" }}
            h={"100%"}
            w={"100%"}
            overflow={"auto"}
            transform={active?.id === tab.id ? "scale(1)" : "scale(0.9)"} // تغییر سایز بر اساس تب فعال یا قبلی
          >
            <Text fontWeight="bold">{tab.title}</Text>
            <Text>{tab.desc}</Text>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
};
