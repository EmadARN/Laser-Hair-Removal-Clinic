import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { data } from "@/constants";

const BodyContent = () => {
  return (
    <>
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <Box display="flex" alignItems="center" mt="30px" gap={2}>
              <Icon color="gray.500" fontSize={"26px"}>
                {item.icon}
              </Icon>
              <Link href={item.src}>
                <Text
                  _hover={{
                    color: "blue.500",
                  }}
                >
                  {item.title}
                </Text>
              </Link>
            </Box>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default BodyContent;
