import { Box, Flex, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa";
import ModalDefine from "./moadals/ModalDefine";
import ModalAttention from "./moadals/ModalAttention";

const Lists = ({
  leftArrowDisplay,
  firstArea,
  secondArea,
  thirdArea,
  imgDisplay,
  display,
  displayThirdArea,
  editDeleteDisplay,
  bgColor,
  color,
  rounded,
  ModalBodyContent,
  HeaderContent,
  headerContentValue,
  BodyContent,
  FooterContent,
  iconBtnDisply,
  addDisplay,
}) => {
  const responsiveFontSize = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <Flex
      sx={{
        flexDirection: { base: "column", md: "row" }, // تغییر جهت بر اساس سایز صفحه
        justifyContent: "space-between",
        alignItems: "center",
        bgColor: bgColor || "graySky.100",
        width: "95%",
        rounded: rounded || "8px",
        color,
        p: 5,
        my: 2,
      }}
    >
      <Stack direction="row" gap={4} alignItems="center">
        <img
          style={{ borderRadius: "50%", display: imgDisplay || display }}
          src=""
          alt=""
        />
        <Text fontSize={responsiveFontSize}>{firstArea}</Text>
      </Stack>
      <Box fontSize={responsiveFontSize}>{secondArea}</Box>
      <Box fontSize={responsiveFontSize} sx={{ display: displayThirdArea }}>
        {thirdArea}
      </Box>
      <Stack direction="row" gap={1} display={editDeleteDisplay}>
        <ModalDefine
          headerContent={headerContentValue}
          bodyContent={ModalBodyContent}
          btn={<CiEdit size={20} color="blue" />}
          BtnDisply={iconBtnDisply}
          addDisplay={addDisplay}
        />
        <ModalAttention
          HeaderContent={HeaderContent}
          BodyContent={BodyContent}
          FooterContent={FooterContent}
          btn={<RiDeleteBinLine size={18} color="red" />}
        />
      </Stack>

      <Box display={leftArrowDisplay}>
        <FaChevronLeft />
      </Box>
    </Flex>
  );
};

export default Lists;
