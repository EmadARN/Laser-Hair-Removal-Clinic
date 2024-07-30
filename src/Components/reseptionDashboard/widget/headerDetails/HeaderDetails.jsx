import React from "react";
import PaginationDate from "./PaginationDate";
import { Button, Flex, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const HeaderDetails = () => {
  return (
    <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
      <Flex sx={{ alignItems: "center", gap: 8 }}>
        <Text sx={{ fontSize: "22px", fontWeight: "bold" }}>نوبت های روز</Text>
        <PaginationDate />
        <Text sx={{ color: "blue" }}>امروز</Text>
      </Flex>
      <Button
        leftIcon={<FaPlus />}
        sx={{ color: "blue" }}
        variant="outline"
        colorScheme={"blue"}
      >
        مراجع بین نوبت
      </Button>
    </Flex>
  );
};

export default HeaderDetails;
