import React from "react";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Icon,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import BodyContent from "./BodyContent";
import CustomButton from "@/Common/customeButton/CustomeButton";

const RightBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        sx={{
          bgColor: "#ffffff",
          mr: -1,
          "&:hover": {
            bgColor: "#ffffff",
          },
        }}
        size={"xs"}
        icon={<Bars3Icon style={{ width: "25px", height: "25px" }} />}
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
            sx={{
              color: "gray.500",
              fontSize: "30px",
              cursor: "pointer",
              mt: 4,
              mr: 4,
            }}
            onClick={onClose}
          >
            <XCircleIcon />
          </Icon>
          <DrawerBody>
            <BodyContent />
            <Box display="flex" justifyContent="start" mt={10}>
              <Link href={"/userDashboard"}>
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
