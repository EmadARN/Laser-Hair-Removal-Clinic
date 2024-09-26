import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import ModalDefine from "@/Common/moadals/ModalDefine";
const AdminHeader = (props) => {
  return (
    <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
      <Box m={5} display={"flex"} alignItems={"center"} gap={2}>
        <span>{props.icon}</span>
        <Text fontSize={"20px"} fontWeight={"bold"}>
          {props.headerTitle}
        </Text>
        <Box pr={4}>{props.dataSlider}</Box>
      </Box>
      <Box m={5}>
        {/* <Button colorScheme={"blue"} py={6}>
          {props.btnValue}
        </Button> */}
        <ModalDefine
          headerContent={props.btnValue}
          renderContent={() => ({
            body: <props.ModalBodyContent />,
            footer: <props.ModalFooterContent />,
          })}
          addDisplay={props.addDisplay}
          iconBtnDisply={props.iconBtnDisply}
        />
      </Box>
    </Box>
  );
};

export default AdminHeader;
