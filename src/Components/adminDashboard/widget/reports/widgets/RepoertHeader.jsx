import React from "react";
import { Box, Button } from "@chakra-ui/react";
import SearchInput from "@/Common/searchInput/SearchInput";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

const RepoertHeader = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={3}
      width={"100%"}
    >
      <Box>
        <SearchInput placeholder="جست و جو" size="lg" />
      </Box>

      <Box display={"flex"} alignItems={"center"} gap={3}>
        <Button variant={'ghost'} border={'2px solid orange'} color={'orange'} textAlign={'center'} size="lg">
          امروز
        </Button>
        <Box>
          <DatePicker  numberOfMonths={2} style={{padding:"20px"}} placeholder='انتخاب تاریخ' calendar={persian} locale={persian_fa} />
        </Box>
      </Box>
    </Box>
  );
};

export default RepoertHeader;
