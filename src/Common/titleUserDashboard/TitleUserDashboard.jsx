import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { RiHome5Line } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
const TitleUserDashboard = ({page,setPage}) => {
  return (
    <Flex justifyContent="space-between" bgColor="#1111" w={"full"}>
      <Text as='button'  sx={{ display: "flex", alignItems: "center", gap: "5px" }} onClick={()=>location.href="/"} >
        <span>
          <RiHome5Line size="24px" />
        </span>
        بازگشت به خانه
      </Text>
      <Text
      as='button'
        sx={{ display: "flex", alignItems: "center", position: "relative" }}
        onClick={()=>setPage(page -1)}
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
