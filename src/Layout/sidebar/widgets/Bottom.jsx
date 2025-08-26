import EnterExite from "@/Components/reseptionDashboard/enterExiteOperator";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Bottom = ({ active }) => {
  const { pathname } = useRouter();
  const [exist, setExist] = useState(false);
  useEffect(() => {
    if (pathname) {
      if (pathname.startsWith("/reseptionDashboard")) {
        setExist(true);
      } else {
        setExist(false);
      }
    }
  }, [pathname]);
  
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
      {exist && <EnterExite />}
    </Box>
  );
};

export default Bottom;
