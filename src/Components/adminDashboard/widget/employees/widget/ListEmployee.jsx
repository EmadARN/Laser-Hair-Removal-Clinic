import { Box, Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
const ListEmployee = () => {
  return (
    <Flex
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        bgColor: "#1111",
        width: "95%",
        rounded: "8px",
        p: 5,
      }}
    >
      <Stack direction="row" gap={4}>
        <img style={{ borderRadius: "50%" }} src="" alt="yes" />
        <Text>علی مظفری</Text>
      </Stack>
      <Box>منشی</Box>
      <Stack direction="row" gap={1}>
        <IconButton
          aria-label="Add to friends"
          icon={<CiEdit size={20} color="blue" />}
        />
        <IconButton
          
          aria-label="Add to friends"
          icon={<RiDeleteBinLine size={18} color="red" />}
        />
      </Stack>
    </Flex>
  );
};

export default ListEmployee;
