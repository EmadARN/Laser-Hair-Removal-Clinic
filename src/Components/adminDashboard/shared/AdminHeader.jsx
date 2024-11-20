import React from "react";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import ModalDefine from "./moadals/ModalDefine";

const AdminHeader = (props) => {
  const responsiveFontSize = useBreakpointValue({ base: "16px", md: "20px" });

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row" }}
      p={4}
    >
      <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
        <span>{props.icon}</span>
        <Text fontSize={responsiveFontSize} fontWeight="bold">
          {props.headerTitle}
        </Text>
        <Box pr={4}>{props.dataSlider}</Box>
      </Box>
      <Box mt={{ base: 2, md: 0 }} ml={{ md: 5 }}>
        {/* تنظیم حاشیه برای موبایل */}
        <ModalDefine
          operator_list={props.operator_list}
          headerContent={props.btnValue}
          bodyContent={props.ModalBodyContent}
          addDisplay={props.addDisplay}
          iconBtnDisply={props.iconBtnDisply}
          BtnDisply={props.BtnDisply}
        />
      </Box>
    </Box>
  );
};

export default AdminHeader;
