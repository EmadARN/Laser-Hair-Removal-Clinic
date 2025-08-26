import { Flex, Button, Box, Icon } from "@chakra-ui/react";

const TabButtons = ({ tabs, active, setActive }) => (
  <Flex
    flexDirection={{ base: "column", lg: "row" }}
    justifyContent="center"
    overflowX="auto"
    maxWidth="full"
    width={{ base: "50%", lg: "100%" }}
    py={1}
  >
    {tabs.map((tab, index) => (
      <Flex
        key={tab.id}
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="center"
        justifyContent="center"
      >
        <Button
          onClick={() => setActive(tab)}
          position="relative"
          paddingX={4}
          paddingY={2}
          width={{ base: "110px", lg: "200px" }}
          bg={active?.id === tab.id ? "brand.400" : "#F7F7F7"}
          boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
          color={active?.id === tab.id ? "#F7F7F7" : "#222"}
          _hover={{ color: "#fff" }}
          borderRadius="md"
        >
          <Flex
            alignItems="center"
            fontSize={{ base: "10px", lg: "16px" }}
            color={active?.id === tab.id ? "white" : "#666"}
          >
            <Icon ml={2}>{tab.icon}</Icon>
            {tab.title}
          </Flex>
        </Button>
        {index < tabs.length - 1 && (
          <Box
            height={{ base: "20px", lg: "2px" }}
            width={{ base: "2px", lg: "20px" }}
            bg="purple.200"
          />
        )}
      </Flex>
    ))}
  </Flex>
);

export default TabButtons;
