import { useEffect, useState, useMemo } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { get_turn_data } from "@/constants";
import TabButtons from "./TabButtons";
import FadeInDiv from "./FadeInDiv";

export const GuideSignup = ({
  tabs: propTabs = get_turn_data,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0] || null);

  const tabs = useMemo(() => propTabs, [propTabs]);

  useEffect(() => {
    const interval = setInterval(() => {
      moveToNextTab();
    }, 4000);
    return () => clearInterval(interval);
  }, [active, tabs]);

  const moveToNextTab = () => {
    const currentIdx = tabs.indexOf(active);
    const nextIdx = (currentIdx + 1) % tabs.length;
    setActive(tabs[nextIdx]);
  };

  return (
    <Box
      px={{ base: 10, md: 6 }}
      py={{ base: 4, md: 8 }}
      minH="350px"
      bgColor="#fff"
      rounded="25px"
    >
      <Heading
        sx={{ display: "flex", justifyContent: "center" }}
        as="h2"
        size={{ base: "sm", md: "md" }}
        color={"gray.600"}
        mb={10}
      >
        نحوه دریافت نوبت
      </Heading>
      <Flex flexDirection={{ base: "row", lg: "column" }}>
        <TabButtons tabs={tabs} active={active} setActive={setActive} />
        <FadeInDiv tabs={tabs} active={active} className={contentClassName} />
      </Flex>
    </Box>
  );
};
