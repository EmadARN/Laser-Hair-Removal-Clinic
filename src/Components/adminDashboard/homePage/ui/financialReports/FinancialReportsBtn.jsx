import { formatNumber } from "@/utils/formatNumber";
import { Box, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import React from "react";

const FinancialReportsBtn = ({ Label1, Label2, value1, value2 }) => {
  const isValuePresent = value1 || value2;

  return (
    <ButtonGroup size="sm" isAttached variant="outline" sx={{ w: "50%" }}>
      <Flex
        sx={{
          p: { base: 2, md: 0 },
          width: "100%",
          h: "auto",
          textAlign: "center",
          whiteSpace: { base: "wrap" },
          borderRadius: "0 3px 3px 0",
          fontSize: { base: "10px", md: "14px" },
          cursor: "default",
          ":hover": {
            bgColor: "transparent",
          },
          border: "1px solid #1111",
          justifyContent: "center",
          alignItems: "center",
        }}
        size={{ base: "xl", md: "md" }}
      >
        {Label1 || Label2}
      </Flex>
      <Box
        sx={{
          width: "100%",
          height: isValuePresent ? "auto" : "50px",
          border: "1px solid #1111",
        }}
      >
        <Text
          sx={{
            display: "flex",
            placeItems: "center",
            p: { base: 3, md: 2 },
            h: "100%",
            fontSize: { base: "10px", md: "14px" },
          }}
        >
          {value2 || (value1 && formatNumber(value1 || value2))}
        </Text>
      </Box>
    </ButtonGroup>
  );
};

export default FinancialReportsBtn;
