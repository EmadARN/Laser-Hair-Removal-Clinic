import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SearchInput from "@/Common/searchInput/SearchInput";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import HeaderDetails from "./headerDetails";
import { todayDate } from "@/features/receptionDashboard/receptionThunks";
import { ReservationList } from "./reservationList";
import PaidTurns from "./paidTurnList";
import PatientWithoutTime from "./AddPatientWithoutTime";

const DailyShift = () => {
  const [{ auth_Employee_token } = cookies, setCookie] = useCookies();
  const dispatch = useDispatch();
  const { todayReserve, cutomerList, LazerAreas } = useSelector(
    (store) => store.receptionDashboardSlice
  );
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    dispatch(todayDate({ auth_Employee_token }));
  }, [dispatch, auth_Employee_token]);

  return (
    <Box sx={{ width: "100%", minW: "500px" }}>
      <Flex
        p={4}
        align="center"
        justifyContent="space-between"
        gap={4}
        w={"100%"}
      >
        {/* SearchInput سمت چپ */}
        <Box flex="1">
          <SearchInput
            size="md"
            placeholder="جستجو در نوبت های روز"
            datas={todayReserve && todayReserve?.all_list}
            utilityDatas={cutomerList}
            onSearch={setFilteredData}
          />
        </Box>

        {/* PatientWithoutTime سمت راست */}
        <Box flex="0 0 auto">
          <PatientWithoutTime />
        </Box>
      </Flex>

      {/* ReservationList بخش */}
      <Box px={{ base: 2, md: 4 }} width={"100%"}>
        <ReservationList
          isDisabled={false}
          todayReserve={todayReserve}
          auth_Employee_token={auth_Employee_token}
          cutomerList={cutomerList}
          LazerAreas={LazerAreas}
          filteredData={filteredData}
        />
      </Box>

      {/* PaidTurns بخش */}
      <Box w={"100%"} px={{ base: 2, md: 4 }} mt={{ base: 6, md: 8 }}>
        <PaidTurns />
      </Box>
    </Box>
  );
};

export default DailyShift;
