import React from "react";
import { Text, Button } from "@chakra-ui/react";

const RenderOperators = ({ shiftData = [], onSelect }) => {
  return shiftData.length === 0 ? (
    <Text fontSize="lg" color="gray.500" textAlign="center">
      هیچ فردی برای نمایش وجود ندارد.
    </Text>
  ) : (
    shiftData.map((operator, index) => (
      <Button
        key={index}
        onClick={() => onSelect(operator)}
        variant="outline"
        width="100%"
        justifyContent="flex-start"
        borderRadius="md"
        padding={3}
        _hover={{ bg: "brand.400", color: "#fff" }}
      >
        <Text fontSize="lg">
          {operator.name} {operator.last_name}
        </Text>
      </Button>
    ))
  );
};

export default RenderOperators;
