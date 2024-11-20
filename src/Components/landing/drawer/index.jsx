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
import Link from "next/link";
import { iconButton, seccondIcon } from "./Style";
import BodyContent from "./BodyContent";
import CustomButton from "@/Common/customeButton/CustomeButton";

const RightBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        sx={iconButton}
        size={"xs"}
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
          <Icon sx={seccondIcon} onClick={onClose}>
            <XCircleIcon />
          </Icon>
          <DrawerBody>
            <BodyContent />
            <Box display="flex" justifyContent="start" mt={10}>
              <Link href={"/UserDashboard"}>
                <CustomButton px={4} onClick={onClose}>
                  دریافت نوبت
                </CustomButton>
              </Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default RightBar;
