import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
const HeaderImg = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      width={"100%"}
      height={"100%"}
    >
      <img
        style={{ width: "750px", maxHeight: "300px" }}
        src="/images/welcome_1.jpg"
        alt="Picture of the author"
      />
    </Box>
  );
};

export default HeaderImg;
