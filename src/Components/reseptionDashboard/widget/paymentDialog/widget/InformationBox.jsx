import React from "react";
import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { CiEdit } from "react-icons/ci";

const InformationBox = ({ title, value, setStep, step }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      borderRadius={"6px"}
      border={"1px solid #ddd"}
      width={"100%"}
      h={"auto"}
      p={"10px"}
      textAlign={"right"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={2}
        flexDirection={{ base: "column", md: "row" }} // ریسپانسیو
      >
        <Box display={"flex"} flexDirection={"column"} width="100%">
          <Flex justifyContent="space-between" alignItems="center" w="100%">
            <Text color={"#555"}>{title}</Text>
            {title === "ناحیه لیزر" && (
              <Box
                as="button"
                display={"flex"}
                alignItems={"center"}
                mt={{ base: 2, md: 0 }}
              >
                <CiEdit color="blue" />
                <Text
                  onClick={() => setStep(step + 1)}
                  as={"button"}
                  color={"blue"}
                  ml={1}
                >
                  تغییر نواحی
                </Text>
              </Box>
            )}
          </Flex>

          <Text
            fontSize={{ base: "10px", md: "14px" }}
            pt={2}
            fontWeight="bold"
          >
            {value}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default InformationBox;
