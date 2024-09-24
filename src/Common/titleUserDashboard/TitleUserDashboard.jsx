import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { RiHome5Line } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import { firstStyle, secText, textStyle } from "./style";
import { useRouter } from "next/router";
import Link from "next/link";

const TitleUserDashboard = ({ page, setPage }) => {
  const router = useRouter();

  return (
    <Flex sx={firstStyle}>
      <Text as="button" sx={textStyle} onClick={() => router.push("/")}>
        <span>
          <RiHome5Line size="24px" />
        </span>
        <Link href={"/"}> بازگشت به خانه</Link>
      </Text>
      <Text as="button" sx={secText} onClick={() => router.back()}>
        مرحله قبل
        <span style={{ paddingTop: "5px" }}>
          <IoIosArrowRoundBack size="24px" />
        </span>
      </Text>
    </Flex>
  );
};

export default TitleUserDashboard;
