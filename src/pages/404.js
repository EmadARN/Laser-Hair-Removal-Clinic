import React from "react";
import { Box, Text, Button, Heading, Flex } from "@chakra-ui/react";
import { Link } from "next/link";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      bg="gray.100"
      p={5}
    >
      <Box>
        <Heading as="h1" size="4xl" color="blue.500">
          404
        </Heading>
        <Text fontSize="2xl" mt={4}>
          صفحه مورد نظر یافت نشد
        </Text>
        <Text fontSize="lg" color="gray.600" mt={2}>
          به نظر می‌رسد که نمی‌توانیم آنچه را که به دنبالش هستید پیدا کنیم.
        </Text>
      </Box>
      <Link href="/" passHref>
        <Button mt={6} colorScheme="blue">
          برگشت به خانه
        </Button>
      </Link>
    </Flex>
  );
}
