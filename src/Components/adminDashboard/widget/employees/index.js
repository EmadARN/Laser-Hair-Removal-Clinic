import React from "react";
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
          ModalBodyContent={ModalBodyContent}
          addDisplay="none"
          ModalFooterContent={ModalFooterContent}
          iconBtnDisply="none"
        />
      </Box>
      <Box sx={{ mt: 8 }}>
        <Lists
          firstArea="علی مظفری"
          secondArea="منشی"
          displayThirdArea="none"
          ModalBodyContent={ModalBodyContent}
          ModalFooterContent={ModalFooterContent}
          HeaderContent={HeaderContent}
          headerContentValue="ویرایش کارمند"
          BodyContent={BodyContent}
          FooterContent={FooterContent}
          iconBtnDisply="none"
        />
      </Box>
    </>
  );
};

export default Empolyees;
