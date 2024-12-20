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
        flexDirection: { base: "column", md: "row" },
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
   
      <Box
        flex="3"
        minWidth="130px"
        textAlign="right"
        fontSize={responsiveFontSize}
      >
        {firstArea}
      </Box>

  
      <Box
        flex="3"
        minWidth="130px"
        textAlign="right"
        fontSize={responsiveFontSize}
      >
        {secondArea}
      </Box>


      <Box
        flex="3"
        minWidth="120px"
        textAlign="right"
        fontSize={responsiveFontSize}
        sx={{ display: displayThirdArea }}
      >
        {thirdArea}
      </Box>

  
      <Stack
        direction="row"
        gap={2}
        flex="1"
        justifyContent="center"
        alignItems="center"
        display={editDeleteDisplay}
      >
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


      <Box flex="0.2" display={leftArrowDisplay} textAlign="center">
        <FaChevronLeft />
      </Box>
    </Flex>
  );
};

export default Lists;
