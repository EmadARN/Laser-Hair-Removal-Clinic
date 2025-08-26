import { Button, VStack, Flex, Box } from "@chakra-ui/react";
import { MdExitToApp } from "react-icons/md";
import MenuItemButton from "./MenuItemButton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EnterExite from "@/Components/reseptionDashboard/enterExiteOperator";

const MenuContent = ({
  menuItems,
  active,
  setActive,
  router,
  onLogoutClick,
}) => {
  const { pathname } = useRouter();
  const [exist, setExist] = useState(false);

  useEffect(() => {
    if (pathname?.startsWith("/reseptionDashboard")) {
      setExist(true);
    } else {
      setExist(false);
    }
  }, [pathname]);

  const handleClick = (slug) => {
    setActive(slug);
    router.push(slug);
  };

  return (
    <Flex
      direction="column"
      w={{ base: "full", md: "220px" }}
      p={4}
      borderRadius="xl"
      h="full"
      justifyContent="space-between"
    >
      {/* منوی اصلی */}
      <VStack align="stretch" spacing={3}>
        {menuItems.map((item) => (
          <MenuItemButton
            key={item.id}
            item={item}
            active={active}
            onClick={() => handleClick(item.slug)}
          />
        ))}
      </VStack>

      <Box mt={4}>
        {exist && (
          <Box
            border="1px solid #1111"
            borderRadius="8px"
            w="100%"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            mb={8}
            fontSize="14px"
            p={2}
          >
            <EnterExite />
          </Box>
        )}

        {/* دکمه خروج پایین */}
        <Button
          leftIcon={<MdExitToApp />}
          onClick={onLogoutClick}
          w="full"
          variant="ghost"
          justifyContent="flex-start"
          _hover={{ bg: "red.100" }}
          sx={{ color: "red", pl: 6, fontWeight: "light" }}
        >
          خروج
        </Button>
      </Box>
    </Flex>
  );
};

export default MenuContent;
