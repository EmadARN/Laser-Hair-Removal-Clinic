import React from "react";
import { Box, Button, Text, Icon } from "@chakra-ui/react";
import { FaChevronLeft } from "react-icons/fa";
import { extractDate } from "@/utils/extractDate";

const SessionList = ({ sessions, onSessionClick }) => {
  return (
    <Box>
      {sessions
        .reverse()
        .map((session) => (
          <Box key={session.id} borderBottom="1px solid #ddd" pb={2}>
            <Button
              width="100%"
              justifyContent="space-between"
              variant="ghost"
              onClick={() => onSessionClick(session)}
            >
              <Text>{extractDate(session.reserve_time_str)}</Text>
              <Icon as={FaChevronLeft} />
            </Button>
          </Box>
        ))}
    </Box>
  );
};

export default SessionList;
