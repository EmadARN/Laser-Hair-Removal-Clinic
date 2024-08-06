import React from "react";
import ModalDefine from "@/Common/moadals/ModalDefine";
import ModalAttention from "@/Common/moadals/ModalAttention";
import ListEmployee from "./widget/ListEmployee";
import ModalBodyContent from "./widget/modalDefineDetails/ModalBodyContent";
import ModalFooterContent from "./widget/modalDefineDetails/ModalFooterContent";
import BodyContent from "./widget/modalAttentionDetails/BodyContent";
import FooterContent from "./widget/modalAttentionDetails/FooterContent";
import HeaderContent from "./widget/modalAttentionDetails/HeaderContent";

const Empolyees = () => {
  return (
    <>
      <ModalDefine
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
      <ListEmployee />
    </>
  );
};

export default Empolyees;
