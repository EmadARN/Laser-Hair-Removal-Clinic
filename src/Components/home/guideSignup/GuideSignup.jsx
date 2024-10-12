import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box, Button, Flex, Text, Icon } from "@chakra-ui/react";
import { get_turn_data } from "@/constants";
import Section_title from "@/Common/section-title";

export const GuideSignup = ({
  tabs: propTabs = get_turn_data,
  containerClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0] || null);
  const [tabs] = useState(propTabs);

  // برای حرکت خودکار بین تب‌ها
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
      minH={"300px"}
      bgColor={"#fff"}
      rounded={"25px"}
    >
      <Section_title section_title="نحوه دریاف نوبت"></Section_title>
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="start"
        overflowX="auto"
        maxWidth="full"
        width="full"
        className={containerClassName}
      >
        {tabs.map((tab) => (
          <Flex key={tab.id} alignItems="center">
            <Button
              onClick={() => setActive(tab)} // فقط وضعیت فعال را تنظیم کنید
              position="relative"
              paddingX={4}
              paddingY={2}
              bg={active?.id === tab.id ? "purple.100" : "#F7F7F7"}
              boxShadow=" rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
              color={active?.id === tab.id ? "#F7F7F7" : "#222"}
              _hover={{ color: "#fff" }}
              borderRadius={0} // حذف فاصله بین تب‌ها و خطوط
            >
              <Flex
                sx={{
                  position: "relative",
                  color: active?.id === tab.id ? "white" : "#666",
                  alignItems: "center",
                }}
              >
                <Icon ml={2}>{tab.icon}</Icon>
                {tab.title}
              </Flex>
            </Button>
            {/* خط بین تب‌ها */}
            {tabs.indexOf(tab) < tabs.length - 1 && (
              <Box
                height="2px"
                width="20px" // کوچک کردن عرض خط برای نزدیک‌تر کردن به دکمه‌ها
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
    </Box>
  );
};

export const FadeInDiv = ({ tabs, active }) => {
  return (
    <Box position="relative" width="full" height="full" mt={4}>
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
            left: 0,
            zIndex: active?.id === tab.id ? 1 : 0, // تب فعال در بالاترین لایه
          }}
        >
          <Box
            p={4}
            bg="#F7F7F7"
            borderRadius="md"
            color="gray.600"
            shadow="md"
            minH={"130px"}
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
