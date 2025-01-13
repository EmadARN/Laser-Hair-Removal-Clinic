import EnterExite from "@/Components/reseptionDashboard/enterExiteOperator";
import { Box } from "@chakra-ui/react";
import React from "react";

const Bottom = ({ active }) => {
  return (
    <Box
      sx={{
        border: "1px solid #1111",
        borderRadius: "8px",
        w: "70%",
        display: active ? "flex" : "none",
        justifyContent: "center",
        flexDirection: "column",
        mt: 12,
        fontSize: "14px",
        p: 1,
        position: "absolute",
        bottom: "70px",
        right: "15%",
      }}
    >
      <EnterExite />
    </Box>
  );
};

export default Bottom;
