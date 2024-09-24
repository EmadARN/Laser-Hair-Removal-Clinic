import ModalAttention from "@/Common/moadals/ModalAttention";
import ModalDefine from "@/Common/moadals/ModalDefine";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

const Lists = ({
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
  fontSize,
  ModalBodyContent,
  ModalFooterContent,
  HeaderContent,
  headerContentValue,
  BodyContent,
  FooterContent,
  iconBtnDisply,
}) => {
  return (
    <Flex
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        bgColor: bgColor || "#1111",
        width: "95%",
        rounded: rounded || "8px",
        color,
        p: 5,
      }}
    >
      <Stack direction="row" gap={4}>
        <img
          style={{ borderRadius: "50%", display: imgDisplay || display }}
          src=""
          alt="yes"
        />
        <Text fontSize={fontSize}>{firstArea}</Text>
      </Stack>
      <Box fontSize={fontSize}>{secondArea}</Box>
      <Box fontSize={fontSize} sx={{ display: displayThirdArea }}>
        {thirdArea}
      </Box>
      <Stack direction="row" gap={1} display={editDeleteDisplay}>
        <ModalDefine
          headerContent={headerContentValue}
          renderContent={() => ({
            body: <ModalBodyContent />,
            footer: <ModalFooterContent />,
          })}
          btn={<CiEdit size={20} color="blue" />}
          BtnDisply={iconBtnDisply}
        />
        <ModalAttention
          renderContent={() => ({
            header: <HeaderContent />,
            body: <BodyContent />,
            footer: <FooterContent />,
          })}
          btn={<RiDeleteBinLine size={18} color="red" />}
        />
      </Stack>
    </Flex>
  );
};

export default Lists;
