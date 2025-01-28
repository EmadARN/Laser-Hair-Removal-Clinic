import React from "react";
import { Box, keyframes } from "@chakra-ui/react";
import { useRouter } from "next/router";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const HeaderBtn = () => {
  const router = useRouter();
  return (
    <Box
      as="button"
      h="50px"
      px="24px"
      borderRadius="md"
      border="1px solid"
      borderColor="brand.400"
      backgroundImage="linear-gradient(110deg, brand.400 45%, #b57edc 55%, brand.400 )"
      backgroundSize="200% 100%"
      animation={`${shimmer} 5s linear infinite`}
      color="white"
      fontWeight="medium"
      transition="background-color 0.2s"
      _hover={{ backgroundColor: "rgba(181, 126, 220, 0.7)" }}
      position={"absolute"}
      top={{ base: "115%", md: "80%" }}
      left="50%"
      transform="translate(-50%, -50%)"
      whiteSpace={"nowrap"}
      onClick={() => router.push("/userDashboard")}
    >
      همین حالا نوبت رزرو کن
    </Box>
  );
};

export default HeaderBtn;
