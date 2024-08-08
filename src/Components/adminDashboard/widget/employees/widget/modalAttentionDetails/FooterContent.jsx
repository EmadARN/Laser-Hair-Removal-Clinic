import { Button, Stack } from "@chakra-ui/react";
import React from "react";

const FooterContent = () => {
  return (
    <Stack direction={"row"}>
      <Button colorScheme="red" mr={3}>
        حذف
      </Button>
      <Button colorScheme="blue" mr={3}>
        لغو
      </Button>
    </Stack>
  );
};

export default FooterContent;
