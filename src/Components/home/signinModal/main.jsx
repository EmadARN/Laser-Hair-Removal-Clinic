import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Profile_Modal from "./widget/profile-modal/Profile_Modal";
import VerificationCode from "./widget/verification-code/VerificationCode";
const MainModal = ({ onClose, onOpen, isOpen }) => {
  const [page, setPage] = useState(0);

  if (page === 0) {
    return (
      <Profile_Modal
        page={page}
        setPage={setPage}
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
      />
    );
  } else if (page === 1) {
    document.body.style.overflow = "hidden";
    return (
      <Box
        display={"flex"}
        height={"100vh"}
        justifyContent="center"
        alignItems={"flex-start"}
      >
        <VerificationCode
          page={page}
          setPage={setPage}
          onOpen={onOpen}
          onClose={onClose}
          isOpen={isOpen}
        />
      </Box>
    );
  }
};

export default MainModal;
