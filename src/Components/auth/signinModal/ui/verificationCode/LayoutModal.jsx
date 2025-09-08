import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { MdEdit } from "react-icons/md";

const LayoutModal = ({ handleClick, phoneNumber, time, handleBackClick }) => {
  return (
    <>
      <Box
        mb={4}
        display="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text fontSize={{ base: "xs", md: "sm" }} noOfLines={1}>
            کد تایید
          </Text>
        </Box>

        <Button
          onClick={handleBackClick}
          rightIcon={<IoIosArrowBack size={"13px"} />}
          variant="ghost"
          fontSize={{ base: "xs", md: "xs" }}
        >
          <Text>بازگشت</Text>
        </Button>
      </Box>
      <Flex alignItems="center" mb={4}>
        <Text flexWrap={"nowrap"} fontSize={{ base: "xs", md: "md" }}>
          کد تایید به شماره‌
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

      {time > 0 && (
        <Box id="box" mb={6}>
          <Text flexWrap={"nowrap"} fontSize={{ base: "xs", md: "md" }}>
            ارسال مجدد کد تایید در {time} ثانیه
          </Text>
        </Box>
      )}
    </>
  );
};

export default LayoutModal;
