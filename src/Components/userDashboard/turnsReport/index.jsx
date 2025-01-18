import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Flex, Box, Text, useDisclosure, Button } from "@chakra-ui/react";
import NavBar from "@/Layout/navbar/NavBar";
import { extractDate, extractTime } from "@/utils/extractDate";
import NoRecords from "./ui/NoRecords";
import SessionList from "./ui/SessionList";
import SessionDetailsModal from "./ui/SessionDetailsModal";
import Loading from "@/Common/loading";
import { FaLongArrowAltRight } from "react-icons/fa";
import SectionTitle from "@/Common/sectionTitle";
import { getReserveStatus } from "../utils/ReserveStatus";

const SessionReports = ({ dispatch, setSteperState }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedSession, setSelectedSession] = useState(null);
  const { sessionRecords, loading, error } = useSelector(
    (store) => store.customerDashboard
  );

  const handleSessionClick = (session) => {
    setSelectedSession({
      details: {
        reserveStatus: getReserveStatus(session.reserve_type),
        sessionDate: extractDate(session.reserve_time_str),
        sessionTime: extractTime(session.reserve_time_str),
        laserArea: session.laser_area_name,
        totalPrice: session.total_price_amount,
      },
    });
    onOpen();
  };

  const handleBackButtonClick = () => {
    dispatch(setSteperState(0));
  };

  if (loading) return <Loading />;
  if (error) return alert(error);

  if (!sessionRecords.reserve_list.length) {
    return (
      <>
        <NavBar bgColor="#ffffff" />
        <NoRecords dispatch={dispatch} setSteperState={setSteperState} />
      </>
    );
  }

  return (
    <>
      <NavBar bgColor="#ffffff" />

      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        width="100%"
        h="100vh"
        bgColor="#F7F7F7"
      >
        <Box mb={4} textAlign="right" w={{ base: "100%", md: "50%" }}>
          <Button
            leftIcon={<FaLongArrowAltRight />}
            onClick={handleBackButtonClick}
          >
            بازگشت
          </Button>
        </Box>
        <Box
          width={{ base: "100%", md: "50%" }}
          bg="white"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius="md"
          p={4}
        >
          <SectionTitle section_title="گزارش جلسات" />
          <SessionList
            sessions={sessionRecords.reserve_list}
            onSessionClick={handleSessionClick}
          />
        </Box>
      </Flex>
      <SessionDetailsModal
        isOpen={isOpen}
        onClose={onClose}
        sessionDetails={selectedSession?.details}
      />
    </>
  );
};

export default SessionReports;
