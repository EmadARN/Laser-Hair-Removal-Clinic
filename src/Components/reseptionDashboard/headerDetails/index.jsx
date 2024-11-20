import React from "react";
import { Button, Flex, Text, Grid, GridItem, Box } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import SearchInput from "@/Common/searchInput/SearchInput";
import { getTodayDate } from "@/utils/getTodayDate";
import PatientWithoutTime from "../AddPatientWithoutTime";

const HeaderDetails = ({ todayDateReserve }) => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}
      gap={4}
      sx={{ alignItems: "center", px: 4, pb: 4 }}
    >
      <GridItem colSpan={{ base: 1, md: 4 }}>
        <Flex
          sx={{
            justifyContent: { base: "center", md: "space-between" },
            alignItems: "center",
            flexDirection: { base: "column", md: "row" },
            gap: { base: 2, md: 0 },
          }}
        >
          <Flex
            sx={{
              flexDirection: { base: "column", sm: "row" },
              alignItems: "center",
              gap: { base: 2, sm: 4, md: 8 },
            }}
          >
            <Text
              sx={{
                fontSize: { base: "16px", sm: "18px", md: "22px" },
                fontWeight: "bold",
              }}
            >
              نوبت های روز
            </Text>
            {/* <DataSlider btnDisplay={true} />
            <Button
              sx={{ color: "blue", mt: { base: 2, sm: 0 } }}
              onClick={todayDateReserve}
            >
              امروز
            </Button> */}
            <Box>{getTodayDate()}</Box>
          </Flex>
        </Flex>
      </GridItem>

      <GridItem
        colSpan={{ base: 1, md: 1 }}
        sx={{
          display: "flex",
          justifyContent: { base: "center", md: "flex-end" },
          gap: 4,
          alignItems: "center",
          flexDirection: { base: "column", sm: "row" },
        }}
      >
        <Box sx={{ display: { base: "flex", md: "none" }, width: "100%" }}>
          <SearchInput size={"md"} placeholder="جستجو در نوبت های روز" />
        </Box>
        <PatientWithoutTime />
      </GridItem>
    </Grid>
  );
};

export default HeaderDetails;
