import CustomButton from "@/Common/customeButton/CustomeButton";
import Loading from "@/Common/loading";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const NewUser = ({ loading, handleButtonClick }) => {
  return (
    <Box
      mt={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={4}
      bg="#fff"
      p={4}
      rounded="lg"
    >
      <Image
        src="/images/download.png"
        width={200}
        height={200}
        alt="Picture of the author"
      />
      <Text mt={2} color="#7777">
        تا الان نوبتی برای شما ثبت نشده است
      </Text>
      <Flex justifyContent="center" width="100%">
        <CustomButton w="90%" onClick={handleButtonClick}>
          {loading ? (
            <Loading noneHeight="0vh" bg="#fff" h="4px" w="4px" />
          ) : (
            "رزرو نوبت"
          )}
        </CustomButton>
      </Flex>
    </Box>
  );
};

export default NewUser;
