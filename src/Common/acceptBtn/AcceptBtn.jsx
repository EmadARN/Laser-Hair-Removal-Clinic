import { Box, Button } from "@chakra-ui/react";
import React from "react";

export const AcceptBtn = ({ page, setPage, text }) => {
  return (
    <Box width="100%" display="flex" justifyContent="center" p={3}>
      <Button
        sx={{ "&:hover": { bgColor: "#347391" } }}
        bgColor={"#2aafed"}
        color="#fff"
        w={"27%"}
        onClick={() => setPage(page + 1)}
      >
        {text}
      </Button>
    </Box>
  );
};
