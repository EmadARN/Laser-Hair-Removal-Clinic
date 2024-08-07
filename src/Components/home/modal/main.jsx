import React, { useState } from "react";
import Profile_Modal from "./profile-modal/Profile_Modal";
import VerificationCode from "./verification-code/VerificationCode";
import { Box } from "@chakra-ui/react";
const MainModal = ({ onClose, onOpen, isOpen }) => {
  const [page, setPage] = useState(0);

  const ModalControl = [
    <Profile_Modal
      page={page}
      setPage={setPage}
      onOpen={onOpen}
      onClose={onClose}
      isOpen={isOpen}
    />,
    <Box display='flex' justifyContent='center'><VerificationCode page={page} setPage={setPage} /></Box>,
  ];

  return <Box>{ModalControl[page]}</Box>;
};

export default MainModal;
