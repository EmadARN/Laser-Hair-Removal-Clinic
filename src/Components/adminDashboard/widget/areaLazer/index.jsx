import React from "react";
import Lists from "../../common/Lists";
import ModalBodyContent from "./widget/modalDefineDetails/ModalBodyContent";
import HeaderContent from "./widget/modalAttentionDetails/HeaderContent";
import BodyContent from "./widget/modalAttentionDetails/BodyContent";
import FooterContent from "./widget/modalAttentionDetails/FooterContent";
import { Box } from "@chakra-ui/react";
import AdminHeader from "../AdminHeader/AdminHeader";
import { BiTargetLock } from "react-icons/bi";

const AreaLazer = () => {
  return (
    <>
      <Box sx={{ py: 6 }}>
        <AdminHeader
          headerTitle="نواحی لیزر"
          btnValue="افزودن ناحیه جدید"
          icon={<BiTargetLock />}
          ModalBodyContent={{ body: <ModalBodyContent isEdit={false} /> }}
          iconBtnDisply="none"
        />
      </Box>
      <Box></Box>
      <Box sx={{ mt: 8 }}>
        <Lists
          firstArea="فول بادی"
          secondArea="450,000 تومان"
          thirdArea="35 دقیقه"
          display="none"
          ModalBodyContent={{ body: <ModalBodyContent isEdit={true} /> }}
          HeaderContent={HeaderContent}
          headerContentValue="ویرایش ناحیه "
          BodyContent={BodyContent}
          FooterContent={FooterContent}
          iconBtnDisply="none"
        />
      </Box>
    </>
  );
};

export default AreaLazer;
