import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Profile_Modal from "./widget/profile-modal/Profile_Modal";
import VerificationCode from "./widget/verification-code/VerificationCode";
const MainModal = ({ onClose, onOpen, isOpen }) => {
  const [page, setPage] = useState(0);

  return (
    <Box>
      <Profile_Modal
        page={page}
        setPage={setPage}
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
      />

      <Flex justifyContent="center">
        <VerificationCode
          page={page}
          setPage={setPage}
          onOpen={onOpen}
          onClose={onClose}
          isOpen={isOpen}
        />
      </Flex>
    </Box>
  );
};

export default MainModal;
