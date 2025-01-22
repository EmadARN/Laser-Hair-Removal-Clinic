import React, { useEffect, useState } from "react";
import NewUser from "./NewUser";
import ExistUser from "./ExistUser";
import { Box } from "@chakra-ui/react";
import Loading from "@/Common/loading";
import { extractDate } from "@/utils/extractDate";
import { toPersianDigits } from "@/utils/toPersianDigits";

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
  const date = new Date();

  const lastReserve = sessionRecords?.last_reserve;
  const payed = lastReserve && lastReserve.payed;
  const reserveDate = toPersianDigits(
    extractDate(lastReserve && lastReserve.reserve_time_str)
  );
  const nowDay = date.toLocaleDateString("fa-IR");
  const compareDate = reserveDate < nowDay ? true : false;
  const reserveCompelete = compareDate === true && payed === true;
  const isExistingUser =
    lastReserve &&
    lastReserve.reserve_type !== "sc" &&
    payed !== true &&
    compareDate !== true &&
    reserveCompelete !== true;

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
          reserveCompelete={reserveCompelete}
        />
      ) : (
        <NewUser loading={loading} handleButtonClick={handleButtonClick} />
      )}
    </Box>
  );
};

export default FirstBox;
