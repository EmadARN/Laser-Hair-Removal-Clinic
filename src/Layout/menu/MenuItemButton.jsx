import { Button, Text, HStack } from "@chakra-ui/react";

const MenuItemButton = ({ item, active, onClick }) => (
  <Button
    variant={active === item.slug ? "solid" : "ghost"}
    leftIcon={item.icon}
    justifyContent="flex-start"
    onClick={onClick}
    w="full"
    size="md"
    fontWeight="medium"
    _hover={{ bg: "gray.200" }}
    borderRadius="md"
    gap={2}
  >
    <HStack spacing={2}>
      <Text>{item.label}</Text>
      {item.amount && (
        <Text fontSize="sm" color="gray.600">
          {item.amount}
        </Text>
      )}
    </HStack>
  </Button>
);
export default MenuItemButton;
