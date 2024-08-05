import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { IoMdCheckmark } from "react-icons/io";
import { firstBox, TextStyle, seccondBox } from "./style";
const RedGreenBox = ({ bgColor, bgColor2, iconColor, textColor }) => {
  return (
    <Box sx={firstBox(bgColor)}>
      <Box sx={seccondBox(bgColor2)}>
        <Box borderRadius={"50%"} bgColor={"#fff"} p={1}>
          <IoMdCheckmark color={iconColor} size={"17px"} />
        </Box>
      </Box>

      <Box mt={2}>
        <Text sx={TextStyle}>7:40 - 8.30</Text>
      </Box>

      <Box>
        <Text fontSize={{ sm: "13px", md: "15px" }} color={"#555"}>
          {" "}
          درصورتی که از حساب شما مبلغی کم شده باشد،
          <br />
          طی ۷۲ ساعت به حساب شما بازگردانده میشود{" "}
        </Text>
      </Box>

      {/* <Box>
      <Text whiteSpace={"nowrap"} fontSize={{ base: "13px", md: "14px" }}>
        {" "}
        لطفا ۱۵ دقیقه قبل از زمان تعیین شده در مطب حضور داشته باشید
      </Text>
    </Box> */}
    </Box>
  );
};

export default RedGreenBox;
