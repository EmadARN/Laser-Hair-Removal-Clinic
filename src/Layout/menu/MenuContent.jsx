import { Button, VStack, Flex, Box } from "@chakra-ui/react";
import { MdExitToApp } from "react-icons/md";
import MenuItemButton from "./MenuItemButton";

const MenuContent = ({
  menuItems,
  active,
  setActive,
  router,
  onLogoutClick,
}) => {
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
      shadow="lg"
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

      {/* دکمه خروج پایین */}
      <Box pt={4}>
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
