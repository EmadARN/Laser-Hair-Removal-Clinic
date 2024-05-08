import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { data } from "../data";

const BodyContent = () => {
  return (
    <>
      {data.map((item) => {
        return (
          <>
            <Box
              key={item.id}
              display="flex"
              alignItems="center"
              mt="30px"
              gap={2}
            >
              <Icon color="gray.500" fontSize={"26px"}>
                {item.icon}
              </Icon>
              <Text
                _hover={{
                  color: "blue.500",
                }}
              >
                {item.title}
              </Text>
            </Box>
          </>
        );
      })}
    </>
  );
};

export default BodyContent;
