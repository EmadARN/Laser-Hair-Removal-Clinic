import React from "react";
import ModalDefine from "@/Common/moadals/ModalDefine";
import ModalAttention from "@/Common/moadals/ModalAttention";
import ModalBodyContent from "./widget/modalDefineDetails/ModalBodyContent";
import ModalFooterContent from "./widget/modalDefineDetails/ModalFooterContent";
import BodyContent from "./widget/modalAttentionDetails/BodyContent";
import FooterContent from "./widget/modalAttentionDetails/FooterContent";
import HeaderContent from "./widget/modalAttentionDetails/HeaderContent";
import Lists from "../../common/Lists";
import { Box } from "@chakra-ui/react";
import AdminHeader from "../AdminHeader/AdminHeader";
import { RiShieldUserFill } from "react-icons/ri";

const Empolyees = () => {
  return (
    <>
      <Box sx={{ py: 6 }}>
        <AdminHeader
          headerTitle="کارمندان"
          btnValue="افزودن کارمند جدید"
          icon={<RiShieldUserFill />}
        />
      </Box>
      <Box>
        <ModalDefine
          headerContent="افزودن کارمند جدید"
          renderContent={() => ({
            body: <ModalBodyContent />,
            footer: <ModalFooterContent />,
          })}
        />
        <ModalAttention
          renderContent={() => ({
            header: <HeaderContent />,
            body: <BodyContent />,
            footer: <FooterContent />,
          })}
        />
      </Box>
      <Box sx={{ mt: 8 }}>
        <Lists
          firstArea="علی مظفری"
          secondArea="منشی"
          displayThirdArea="none"
        />
      </Box>
    </>
  );
};

export default Empolyees;
