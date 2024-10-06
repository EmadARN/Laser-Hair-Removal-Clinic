import React from "react";
import { Box, Button, useBreakpointValue } from "@chakra-ui/react";
import SearchInput from "@/Common/searchInput/SearchInput";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const RepoertHeader = () => {
  const responsiveButtonSize = useBreakpointValue({ base: "sm", md: "lg" });

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }} // تغییر جهت بر اساس سایز صفحه
      justifyContent="space-between"
      alignItems="center"
      p={3}
      width="100%"
    >
      <Box width={{ base: "100%", md: "auto" }} mb={{ base: 3, md: 0 }}>
        {" "}
        {/* تنظیم عرض برای موبایل */}
        <SearchInput placeholder="جست و جو" size="lg" />
      </Box>

      <Box display="flex" alignItems="center" gap={3}>
        <Button
          variant="ghost"
          border="2px solid orange"
          color="orange"
          textAlign="center"
          size={responsiveButtonSize}
        >
          امروز
        </Button>
        <Box>
          <DatePicker
            numberOfMonths={2}
            style={{ padding: "20px" }}
            placeholder="انتخاب تاریخ"
            calendar={persian}
            locale={persian_fa}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default RepoertHeader;
