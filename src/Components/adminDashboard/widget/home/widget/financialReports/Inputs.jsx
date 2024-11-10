import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import React from "react";

const Inputs = ({
  morningShiftLabel,
  afternoonShiftLabel,
  totalPaidAmountThisMonth,
  totalAmountThisMonth,
}) => {
  return (
    <ButtonGroup size="sm" isAttached variant="outline" sx={{ w: "100%" }}>
      <Button
        sx={{
          width: "100%",
          borderRadius: "0 3px 3px 0",
          fontSize: { base: "12px", md: "14px" },
          cursor: "default",
          ":hover": {
            bgColor: "transparent",
          },
        }}
        size="md"
      >
        {morningShiftLabel || afternoonShiftLabel}
      </Button>
      <Box
        sx={{
          width: "100%",
          border: "1px solid #1111",
        }}
      >
        <Text
          sx={{
            display: "flex",
            justifyContent: "end",
            p: 2,
            fontSize: { base: "12px", md: "14px" },
          }}
        >
          {totalPaidAmountThisMonth || totalAmountThisMonth}
        </Text>
      </Box>
    </ButtonGroup>
  );
};

export default Inputs;
