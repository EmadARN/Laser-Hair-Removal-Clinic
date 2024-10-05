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
  HeaderContent,
  headerContentValue,
  BodyContent,
  FooterContent,
  iconBtnDisply,
  addDisplay,
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
          alt=""
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
    </Flex>
  );
};

export default Lists;

// import ModalAttention from "@/Common/moadals/ModalAttention";
// import ModalDefine from "@/Common/moadals/ModalDefine";
// import { Box, Flex, Stack, Text } from "@chakra-ui/react";
// import React from "react";
// import { CiEdit } from "react-icons/ci";
// import { RiDeleteBinLine } from "react-icons/ri";

// const Lists = ({
//   firstArea,
//   secondArea,
//   thirdArea,
//   imgDisplay,
//   display,
//   displayThirdArea,
//   editDeleteDisplay,
//   bgColor,
//   color,
//   rounded,
//   fontSize,
//   ModalBodyContent,
//   ModalFooterContent,
//   HeaderContent,
//   headerContentValue,
//   BodyContent,
//   FooterContent,
//   iconBtnDisply,
//   addDisplay,
// }) => {
//   return (
//     <Flex
//       direction={{ base: "column", md: "row" }}
//       justifyContent="space-between"
//       alignItems="center"
//       bgColor={bgColor || "#1111"}
//       width="100%"
//       rounded={rounded || "8px"}
//       color={color}
//       p={5}
//       mb={4}
//       gap={4}
//     >
//       <Stack
//         display="flex"
//         alignItems="center"
//         minWidth={{ base: "100%", md: "150px" }} // حداقل عرض
//       >
//         <img
//           style={{ borderRadius: "50%", display: imgDisplay || display }}
//           src=""
//           alt=""
//         />
//         <Text fontSize={{ base: "sm", md: fontSize }}>{firstArea}</Text>
//       </Stack>

//       <Box fontSize={{ base: "sm", md: fontSize }} textAlign="center">
//         {secondArea}
//       </Box>

//       <Box
//         fontSize={{ base: "sm", md: fontSize }}
//         sx={{ display: displayThirdArea }}
//         textAlign="center"
//         alignItems="center"
//       >
//         {thirdArea}
//       </Box>

//       {/* Edit & Delete */}
//       <Stack
//         direction="row"
//         gap={1}
//         display={editDeleteDisplay}
//         textAlign="center"
//         flexShrink={0}
//       >
//         <ModalDefine
//           headerContent={headerContentValue}
//           renderContent={() => ({
//             body: <ModalBodyContent />,
//             footer: <ModalFooterContent />,
//           })}
//           btn={<CiEdit size={20} color="blue" />}
//           BtnDisply={iconBtnDisply}
//           addDisplay={addDisplay}
//         />
//         <ModalAttention
//           renderContent={() => ({
//             header: <HeaderContent />,
//             body: <BodyContent />,
//             footer: <FooterContent />,
//           })}
//           btn={<RiDeleteBinLine size={18} color="red" />}
//         />
//       </Stack>
//     </Flex>
//   );
// };

// export default Lists;
