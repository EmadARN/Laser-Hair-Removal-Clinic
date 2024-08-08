import React from "react";
import { Grid, Box, Text, Flex } from "@chakra-ui/react";
import { firstText, mainBox, secText } from "../../style";
const Main_Layout = (props) => {
  return (
    <Grid display="flex" flexDirection="column" gap={3}>
      <Box display="flex" flexDirection="column" gap={1} mb={10}>
        <Flex gap={4} alignItems={"center"}>
          <Box sx={mainBox}>
            <Box fontSize="20px" p={3}>
              {props.item.icon}
            </Box>
          </Box>

          <Box>
            <Text sx={firstText}>{props.item.title}</Text>
          </Box>
        </Flex>

        <Box>
          <Text sx={secText}>{props.item.desc}</Text>
        </Box>
      </Box>
    </Grid>
  );
};

export default Main_Layout;
