import React, { useEffect } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { todayDate } from "@/features/receptionDashboard/receptionDashboardSlice";
import { useCookies } from "react-cookie";
import { ReservationTable } from "../reservationTable/ReservationTable";
const PaidTurns = ({ display }) => {
  const [{ auth_Employee_token } = cookies, setCookie] = useCookies([
    "auth_Employee_token",
  ]);
  const dispatch = useDispatch();
  const { todayReserve } = useSelector(
    (store) => store.receptionDashboardSlice
  );

  useEffect(() => {
    dispatch(todayDate({ auth_Employee_token }));
  }, [dispatch]);

  return (
    <Accordion
      defaultIndex={[0]}
      allowMultiple
      mt={10}
      w={{ base: "100vw", md: "100%" }}
    >
      <AccordionItem>
        <AccordionButton display={"flex"} justifyContent={"space-between"}>
          <Box>نوبت های پرداخت شده</Box>
          <Box as="span" textAlign="right">
            نمایش <AccordionIcon />
          </Box>
        </AccordionButton>

        <AccordionPanel pb={4} px={0}>
          <Stack>
            <ReservationTable
              display={display}
              isDisabled={true}
              todayReserve={todayReserve}
              ButtonValue="ورود به شارژ"
              isPaymentTable={true}
            />
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default PaidTurns;
