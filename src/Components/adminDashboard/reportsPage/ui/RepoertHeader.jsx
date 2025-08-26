import React, { useRef } from "react";
import { Box } from "@chakra-ui/react";
import SearchInput from "@/Common/searchInput/SearchInput";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const RepoertHeader = ({
  from,
  to,
  onDateChange,
  onTodayClick,
  dateReserve,
  customerListAdmin,
  setFilteredData,
}) => {
  const datePickerRef = useRef(null);

  return (
    <Box
      display="flex"
      flexDirection={"row"}
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      gap={4}
    >
      <Box width={"100%"}>
        <SearchInput
          placeholder="جست و جو"
          size="lg"
          datas={dateReserve && dateReserve.complete_list}
          utilityDatas={customerListAdmin}
          onSearch={setFilteredData}
        />
      </Box>

      <Box>
        <DatePicker
          ref={datePickerRef}
          value={[from, to].filter(Boolean)}
          onChange={onDateChange}
          multiple
          numberOfMonths={2}
          style={{ padding: "20px" }}
          placeholder="انتخاب بازه‌ی تاریخ"
          calendar={persian}
          locale={persian_fa}
        />
      </Box>
    </Box>
  );
};

export default RepoertHeader;
