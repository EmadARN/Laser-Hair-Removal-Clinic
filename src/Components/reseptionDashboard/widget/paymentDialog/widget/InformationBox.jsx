import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { CiEdit } from "react-icons/ci";

const InformationBox = ({ title, value }) => {
  return (
    <Box
      borderRadius={"6px"}
      border={"1px solid #ddd"}
      width={"100%"}
      h={"auto"}
      p={"10px"}
      textAlign={"right"}
    >
      <Box display={"flex"} justifyContent={"space-between"} gap={2}>
        <Box display={"flex"} flexDirection={"column"}>
          <Text color={"#555"}>{title}</Text>
          <Text fontWeight={"bold"}>{value}</Text>
        </Box>

        {title === "ناحیه لیزر" ? (
          <Box as="button" display={"flex"} alignItems={"center"}>
            <CiEdit color="blue" />
            <Text color={"blue"} mr="1">
              تغییر نواحی
            </Text>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default InformationBox;
