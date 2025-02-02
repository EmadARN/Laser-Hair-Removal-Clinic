import React, { useEffect } from "react";
import { Box, Stack } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { todayDate } from "@/features/receptionDashboard/receptionThunks";
import { ReservationList } from "../reservationList";
const PaidTurns = ({ display }) => {
  const [{ auth_Employee_token } = cookies] = useCookies([
    "auth_Employee_token",
  ]);
  const dispatch = useDispatch();
  const { todayReserve, cutomerList, LazerAreas } = useSelector(
    (store) => store.receptionDashboardSlice
  );

  useEffect(() => {
    dispatch(todayDate({ auth_Employee_token }));
  }, [dispatch, auth_Employee_token]);

  return (
    <Accordion
      defaultIndex={[0]}
      allowMultiple
      mt={10}
      w={{ base: "120vw", md: "100%" }}
    >
      <AccordionItem>
        <AccordionButton display={"flex"} justifyContent={"space-between"}>
          <Box>نوبت های تکمیل شده</Box>
          <Box as="span" textAlign="right">
            نمایش <AccordionIcon />
          </Box>
        </AccordionButton>

        <AccordionPanel pb={4} px={0}>
          <Stack>
            <ReservationList
              display={display}
              isDisabled={true}
              todayReserve={todayReserve}
              isPaymentTable={true}
              auth_Employee_token={auth_Employee_token}
              cutomerList={cutomerList}
              LazerAreas={LazerAreas}
            />
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default PaidTurns;
