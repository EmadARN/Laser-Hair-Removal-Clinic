import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { MainBox, ButtonStyle } from "./style";
export const AcceptBtn = ({ page, setPage, text, bgColor }) => {
  return (
    <Box sx={MainBox} bgColor={bgColor}>
      <Button sx={ButtonStyle} onClick={() => setPage(page + 1)}>
        {text}
      </Button>
    </Box>
  );
};
