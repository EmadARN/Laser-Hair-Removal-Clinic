import React from "react";
import { Grid, Box, Text, Flex } from "@chakra-ui/react";
import { BiTargetLock } from "react-icons/bi";
const Main_Layout = (props) => {
  return (
    <Grid display="flex" flexDirection="column" gap={3}>
      <Box display="flex" flexDirection="column" gap={1} maxW={"sm"} mb={10}>
        <Flex gap={4} alignItems={"center"}>
          <Box border="2px dotted #b99de0" p={3} borderRadius="50%">
            {props.item.icon}
          </Box>

          <Box>
            <Text fontWeight="bold" color="#111" sx={{fontSize:{base:"md",sm:'lg',md:"xl"}}}>
              {props.item.title}
            </Text>
          </Box>
        </Flex>

        <Box>
          <Text color="#999" textAlign="justify" sx={{fontSize:{base:"md",sm:'lg'}}}>
            {props.item.desc}
          </Text>
        </Box>
      </Box>
      <hr style={{ marginBottom: "20px" }}></hr>
    </Grid>
  );
};

export default Main_Layout;
