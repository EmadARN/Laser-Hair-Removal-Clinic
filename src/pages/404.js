import { Box, Text, Button, keyframes } from "@chakra-ui/react";
import Link from "next/link";

// انیمیشن برای متن
const bounce = keyframes`
  0% { transform: translateY(0); }
  25% { transform: translateY(-10px); }
  50% { transform: translateY(0); }
  75% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const Custom404 = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgGradient="linear(to-r, #7563DC, #9b59b6)"
      color="white"
      textAlign="center"
      p={6}
    >
      <Text
        fontSize="6xl"
        fontWeight="bold"
        mb={6}
        animation={`${bounce} 2s ease-in-out infinite`}
      >
        ۴۰۴
      </Text>
      <Text fontSize="xl" mb={6}>
        صفحه مورد نظر پیدا نشد
      </Text>

      <Link href="/">
        <Button
          colorScheme="purple"
          size="lg"
          variant="solid"
          _hover={{ bg: "#6a0dad" }}
          transition="all 0.3s ease-in-out"
        >
          بازگشت به صفحه اصلی
        </Button>
      </Link>
    </Box>
  );
};

export default Custom404;
