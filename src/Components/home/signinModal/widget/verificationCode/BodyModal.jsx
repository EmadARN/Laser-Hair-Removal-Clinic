import { Box, Text, Flex } from "@chakra-ui/react";
import { MdEdit } from "react-icons/md";

const BodyModal = ({ handleClick, phoneNumber, time }) => {
  return (
    <>
      <Flex alignItems="center" mb={4}>
        <Text flexWrap={"nowrap"} fontSize={{ base: "xs", md: "md" }}>
          کد تایید به شماره‌ی
          <Box px={1} as="span" textDecoration="underline">
            {phoneNumber}
          </Box>
          ارسال شد
        </Text>
        <Flex cursor="pointer" alignItems="center" onClick={handleClick} pr={4}>
          <MdEdit size="16px" color="#7563DC" />
          <Text fontSize={{ base: "xs", md: "md" }} fontWeight="bold" pr={1}>
            ویرایش
          </Text>
        </Flex>
      </Flex>

      <Box id="box" mb={6}>
        <Text flexWrap={"nowrap"} fontSize={{ base: "xs", md: "md" }}>
          ارسال مجدد کد تایید در {time} ثانیه
        </Text>
      </Box>
    </>
  );
};

export default BodyModal;
