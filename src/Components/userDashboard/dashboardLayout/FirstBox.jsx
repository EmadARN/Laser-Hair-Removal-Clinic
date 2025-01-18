import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Loading from "@/Common/loading";
import CustomButton from "@/Common/customeButton/CustomeButton";
import SectionTitle from "@/Common/sectionTitle";

const FirstBox = ({ loading, handleButtonClick, checkPhoneNumberMatch }) => {
  const InfoRow = ({ label, value }) => (
    <Flex justifyContent="space-between" alignItems="center" pb={4}>
      <Text color="gray.500">{label}</Text>
      <Text>{value}</Text>
    </Flex>
  );

  return (
    <>
      <Flex
        width={{ base: "100%", md: "45%" }}
        p={4}
        flexDirection="column"
        bgColor="#fff"
        borderRadius="10px"
      >
        <SectionTitle section_title="نوبت بعدی شما" />
        {checkPhoneNumberMatch() ? (
          <>
            <InfoRow
              label="وضعیت"
              // value={getReserveStatus(reserveType.reserve_Type)}
            />
            <InfoRow label="تاریخ نوبت بعدی" value="1402/1/24" />
          </>
        ) : (
          <Box mb={6} display="flex" flexDirection="column" alignItems="center">
            <Image
              src="/images/download.png"
              width={200}
              height={200}
              alt="Picture of the author"
            />
            <Text mt={2} color="#7777">
              تا الان نوبتی برای شما ثبت نشده است
            </Text>
          </Box>
        )}
        <Flex justifyContent="center" width="100%">
          <CustomButton w="90%" onClick={handleButtonClick}>
            {loading ? (
              <Loading noneHeight="0vh" bg="#fff" h="4px" w="4px" />
            ) : (
              "رزرو نوبت"
            )}
          </CustomButton>
        </Flex>
      </Flex>
    </>
  );
};

export default FirstBox;
