import React from "react";
import Lists from "../../common/Lists";
import ModalAttention from "@/Common/moadals/ModalAttention";
import ModalDefine from "@/Common/moadals/ModalDefine";
import ModalBodyContent from "./widget/modalDefineDetails/ModalBodyContent";
import ModalFooterContent from "./widget/modalDefineDetails/ModalFooterContent";
import HeaderContent from "./widget/modalAttentionDetails/HeaderContent";
import BodyContent from "./widget/modalAttentionDetails/BodyContent";
import FooterContent from "./widget/modalAttentionDetails/FooterContent";

const AreaLazer = () => {
  return (
    <>
      <ModalDefine
        headerContent="افزودن ناحیه جدید"
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
      <Lists
        firstArea="فول بادی"
        secondArea="450,000 تومان"
        thirdArea="35 دقیقه"
        style={style.imgDisplay}
      />
    </>
  );
};

export default AreaLazer;
