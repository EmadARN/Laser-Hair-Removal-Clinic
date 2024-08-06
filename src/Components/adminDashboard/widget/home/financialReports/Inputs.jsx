import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import React from "react";

const Inputs = ({ shiftsName }) => {
  return (
    <ButtonGroup size="sm" isAttached variant="outline" w="85%">
      <Button
        sx={{
          width: "clamp(160px,100px,200px)",
          borderRadius: "0 3px 3px 0",
          fontSize: { base: "12px", md: "14px" },
          cursor: "default",
          ":hover": {
            bgColor: "transparent",
          },
        }}
        size="md"
      >
        {shiftsName || shiftsName}
      </Button>
      <Box
        sx={{
          border: "1px solid gray",
          borderRadius: "3px 0px 0px 3px",
          width: {
            base: "clamp(100px,100%,300px)",
            md: "clamp(300px,100%,300px)",
          },
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <Text> تومان 0,00</Text>
      </Box>
    </ButtonGroup>
  );
};

export default Inputs;
