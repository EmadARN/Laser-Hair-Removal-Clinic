import React from "react";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline";
const {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  Icon,
} = require("@chakra-ui/react");
import { Box, IconButton } from "@chakra-ui/react";
import BodyContent from "./widgets/BodyContent";
import BtnReservation from "@/Common/btnReservation/BtnReservation";

const RightBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        size={"sm"}
        icon={<Bars3Icon />}
        aria-label={"Open Menu"}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent transition={".05s ease"}>
          <Icon
            color="gray.500"
            fontSize={"30px"}
            cursor={"pointer"}
            mt={4}
            mr={4}
            onClick={onClose}
          >
            <XCircleIcon />
          </Icon>
          <DrawerBody>
            <BodyContent />
            <Box display="flex" justifyContent="start" mt={10}>
              <BtnReservation onClose={onClose} />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default RightBar;
