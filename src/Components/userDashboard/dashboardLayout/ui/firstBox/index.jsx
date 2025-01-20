import React, { useEffect, useState } from "react";
import NewUser from "./NewUser";
import ExistUser from "./ExistUser";
import { Box } from "@chakra-ui/react";
import Loading from "@/Common/loading";

const FirstBox = ({
  sessionRecords,
  loading,
  handleButtonClick,
  operatorName,
}) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!loading) {
      const delay = setTimeout(() => setShowContent(true), 300);
      return () => clearTimeout(delay);
    } else {
      setShowContent(false);
    }
  }, [loading]);

  if (loading || !showContent) {
    return <Loading />;
  }
  const lastReserve = sessionRecords?.last_reserve;
  const isExistingUser = lastReserve && lastReserve.reserve_type !== "sc";

  return (
    <Box
      w="100%"
      opacity={showContent ? 1 : 0}
      transition="opacity 0.5s ease-in-out"
    >
      {isExistingUser ? (
        <ExistUser
          sessionRecords={sessionRecords}
          operatorName={operatorName}
          loading={loading}
        />
      ) : (
        <NewUser loading={loading} handleButtonClick={handleButtonClick} />
      )}
    </Box>
  );
};

export default FirstBox;
