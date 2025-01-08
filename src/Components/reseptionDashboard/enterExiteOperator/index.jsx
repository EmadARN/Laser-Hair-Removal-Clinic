import { Button, Flex, Text, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineAccessTime } from "react-icons/md";
import {
  enterExitedOprators,
  getOperatorSchedule,
} from "@/features/receptionDashboard/receptionThunks";

const EnterExite = () => {
  const [{ auth_Employee_token } = cookies] = useCookies();

  const dispatch = useDispatch();
  const { operatorSchedule } = useSelector(
    (store) => store.receptionDashboardSlice
  );

  useEffect(() => {
    dispatch(getOperatorSchedule({ auth_Employee_token }));
  }, [dispatch]);

  const enterExit = () => {
    const username = operatorSchedule.operator_username;
    dispatch(enterExitedOprators({ username, auth_Employee_token }));
    dispatch(getOperatorSchedule({ auth_Employee_token }));
  };

  return (
    <Box w="100%" maxW="450px" mx="auto" p={{ base: 1, md: 4 }}>
      <Flex direction="column" align="start" mb={2}>
        <Text
          color="#222"
          fontWeight="bold"
          fontSize={{ base: "10px", md: "14px" }}
        >
          اوپراتور شیفت
        </Text>
        <Flex justifyContent="space-between" align="center" w="100%" p={2}>
          <Text color="gray.500" fontSize={{ base: "10px", md: "14px" }}>
            {operatorSchedule.operator_name}
          </Text>
          <MdOutlineAccessTime color="gray" size={18} />
        </Flex>
      </Flex>

      <Button
        onClick={enterExit}
        border="1px solid #7563DC"
        borderRadius="8px"
        mt={3}
        w="100%"
        minW={{ base: "70px", md: "130px" }}
        fontSize={{ base: "8px", md: "14px" }}
        color="brand.400"
        fontWeight="bold"
        bgColor="transparent"
        _hover={{ bgColor: "purple.50" }}
      >
        خروج اوپراتور
      </Button>
    </Box>
  );
};

export default EnterExite;
