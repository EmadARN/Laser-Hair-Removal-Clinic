import React, { useEffect } from "react";
import ModalBodyContent from "./widget/modalDefineDetails/ModalBodyContent";
import ModalFooterContent from "./widget/modalDefineDetails/ModalFooterContent";
import BodyContent from "./widget/modalAttentionDetails/BodyContent";
import FooterContent from "./widget/modalAttentionDetails/FooterContent";
import HeaderContent from "./widget/modalAttentionDetails/HeaderContent";
import Lists from "../../common/Lists";
import { Box } from "@chakra-ui/react";
import AdminHeader from "../AdminHeader/AdminHeader";
import { RiShieldUserFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncOpratorList } from "@/features/adminDashboard/adminDashboardSlice";
import { useCookies } from "react-cookie";

const Empolyees = () => {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["auth_Admin_token"]);

  const { users, token } = useSelector((store) => store.adminDashboard);
  useEffect(() => {
    dispatch(getAsyncOpratorList({ cookies }));
  }, [dispatch]);
  console.log("users::", users);
  console.log("token::", token);

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
