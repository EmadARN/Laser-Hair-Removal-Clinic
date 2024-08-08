import React from "react";
import ModalDefine from "@/Common/moadals/ModalDefine";
import ModalAttention from "@/Common/moadals/ModalAttention";
import ModalBodyContent from "./widget/modalDefineDetails/ModalBodyContent";
import ModalFooterContent from "./widget/modalDefineDetails/ModalFooterContent";
import BodyContent from "./widget/modalAttentionDetails/BodyContent";
import FooterContent from "./widget/modalAttentionDetails/FooterContent";
import HeaderContent from "./widget/modalAttentionDetails/HeaderContent";
import Lists from "../../common/Lists";

const Empolyees = () => {
  return (
    <>
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
      <Lists  firstArea="علی مظفری" secondArea="منشی" displayThirdArea="none"  />
    </>
  );
};

export default Empolyees;
