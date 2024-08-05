import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { RiHome5Line } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import { firstStyle,secText,textStyle,secText } from "./style";
const TitleUserDashboard = ({ page, setPage }) => {
  return (
    <Flex sx={firstStyle}>
      <Text
        as="button"
        sx={textStyle}
        onClick={() => (location.href = "/")}
      >
        <span>
          <RiHome5Line size="24px" />
        </span>
        بازگشت به خانه
      </Text>
      <Text
        as="button"
        sx={secText}
        onClick={() => setPage(page - 1)}
      >
        مرحله قبل
        <span style={{ paddingTop: "5px" }}>
          <IoIosArrowRoundBack size="24px" />
        </span>
      </Text>
    </Flex>
  );
};

export default TitleUserDashboard;
