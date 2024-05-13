import React from "react";
import { Grid, Box, Text, Flex } from "@chakra-ui/react";
const Main_Layout = (props) => {
  return (
    <Grid display="flex" flexDirection="column" gap={3}>
      <Box display="flex" flexDirection="column" gap={1} mb={10}>
        <Flex gap={4} alignItems={"center"}>
          <Box
            w={10}
            h={10}
            border="3px dashed #D1CBF3"
            borderRadius="50%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box fontSize="20px" p={3}>
              {props.item.icon}
            </Box>
          </Box>

          <Box>
            <Text
              fontWeight="bold"
              color="#111"
              sx={{ fontSize: { base: "sm" } }}
            >
              {props.item.title}
            </Text>
          </Box>
        </Flex>

        <Box>
          <Text
            color="#999"
            textAlign="justify"
            sx={{ fontSize: { base: "sm" } }}
            pr={1}
          >
            {props.item.desc}
          </Text>
        </Box>
      </Box>
    </Grid>
  );
};

export default Main_Layout;
