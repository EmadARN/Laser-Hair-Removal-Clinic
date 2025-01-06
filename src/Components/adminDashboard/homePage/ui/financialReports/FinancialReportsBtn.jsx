import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import React from "react";

const FinancialReportsBtn = ({
  morningShiftLabel,
  afternoonShiftLabel,
  totalPaidAmountThisMonth,
  totalAmountThisMonth,
}) => {
  const isValuePresent = totalPaidAmountThisMonth || totalAmountThisMonth;

  return (
    <ButtonGroup size="sm" isAttached variant="outline" sx={{ w: "100%" }}>
      <Button
        sx={{
          p:{base:2,md:0},
          width: "100%",
          h: "auto",
          textAlign:'center',
         whiteSpace:{base:'wrap'},
          borderRadius: "0 3px 3px 0",
          fontSize: { base: "10px", md: "14px" },
          cursor: "default",
          ":hover": {
            bgColor: "transparent",
          },
        }}
        size={{base:"xl",md:"md"}}
      >
        {morningShiftLabel || afternoonShiftLabel}
      </Button>
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
            alignItems:'center',
            justifyContent: "center",
            p: {base:3,md:2},
            fontSize: { base: "10px", md: "14px" },
          }}
        >
          {totalPaidAmountThisMonth ||
            totalAmountThisMonth ||
            "0"}
        </Text>
      </Box>
    </ButtonGroup>
  );
};

export default FinancialReportsBtn;
