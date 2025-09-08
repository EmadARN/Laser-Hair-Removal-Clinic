"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";

export default function InfoToast() {
  const [open, setOpen] = useState(true);
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  useEffect(() => {
    setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <>
      {isDesktop ? (
        // دسکتاپ
        <Box
          position="fixed"
          top={6}
          right={6}
          zIndex={50}
          w="480px"
          bg="gray.700" // رنگ خنثی
          color="white"
          borderRadius="xl"
          shadow="lg"
          border="1px solid"
          borderColor="gray.600"
          p={3}
        >
          <Flex align="flex-start" gap={3}>
            <IconButton
              aria-label="close"
              size="sm"
              icon={<IoMdClose />}
              variant="ghost"
              color="whiteAlpha.800"
              _hover={{ color: "white" }}
              mt={1}
              onClick={() => setOpen(false)}
            />
            <Box flex="1">
              <Text fontSize="sm" lineHeight="short">
                برای ورود به داشبورد{" "}
                <Text as="span" fontWeight="bold" color="yellow.300">
                  ادمین
                </Text>{" "}
                با نام کاربری{""}
                <Text as="span" fontWeight="bold" color="yellow.300">
                  admin
                </Text>{" "}
                و رمز عبور{" "}
                <Text as="span" fontWeight="bold" color="yellow.300">
                  1234
                </Text>
              </Text>

              <Text fontSize="sm" lineHeight="short" mt={2}>
                برای ورود به داشبورد{" "}
                <Text as="span" fontWeight="bold" color="green.300">
                  منشی
                </Text>{" "}
                با نام کاربری{" "}
                <Text as="span" fontWeight="bold" color="yellow.300">
                  reseption
                </Text>{" "}
                و رمز عبور{" "}
                <Text as="span" fontWeight="bold" color="yellow.300">
                  1234{" "}
                </Text>
              </Text>
            </Box>
          </Flex>
        </Box>
      ) : (
        // موبایل
        <Box
          position="fixed"
          top={4}
          left="50%"
          transform="translateX(-50%)"
          zIndex={50}
          w="95vw"
          bg="gray.700" // رنگ خنثی
          color="white"
          borderRadius="lg"
          shadow="md"
          border="1px solid"
          borderColor="gray.600"
          p={2}
          fontSize="xs"
        >
          <Flex align="flex-start" gap={2}>
            <IconButton
              aria-label="close"
              size="xs"
              icon={<IoMdClose size={14} />}
              variant="ghost"
              color="whiteAlpha.800"
              _hover={{ color: "white" }}
              mt={1}
              onClick={() => setOpen(false)}
            />
            <Box flex="1">
              <Text lineHeight="short">
                ورود به{" "}
                <Text as="span" fontWeight="bold" color="yellow.300">
                  ادمین
                </Text>
                :{" "}
                <Text as="span" fontWeight="bold" color="yellow.300">
                  admin / 1234
                </Text>
              </Text>
              <Text lineHeight="short" mt={1}>
                ورود به{" "}
                <Text as="span" fontWeight="bold" color="green.300">
                  منشی
                </Text>
                :{" "}
                <Text as="span" fontWeight="bold" color="yellow.300">
                  reseption / 1234
                </Text>
              </Text>
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
}
