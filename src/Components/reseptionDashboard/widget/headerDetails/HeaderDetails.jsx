import React from "react";
import { Button, Flex, Text, Grid, GridItem, Box } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import SearchInput from "@/Common/searchInput/SearchInput";
import DataSlider from "@/Common/dataSlider/DataSlider";

const HeaderDetails = () => {
  return (
    <Grid
      templateColumns={{ base: "repeat(4, 1fr)", md: "repeat(5, 1fr)" }}
      gap={4}
      sx={{ alignItems: "center", px: 4, pb: 4 }}
    >
      <GridItem colSpan={4}>
        <Flex
          sx={{
            justifyContent: { base: "start", md: "space-between" },
            alignItems: "center",
          }}
        >
          <Flex
            sx={{
              flexDirection: { base: "column", sm: "row" },
              alignItems: "center",
              gap: { base: 0, sm: 8 },
            }}
          >
            <Text
              sx={{
                fontSize: { base: "14px", md: "22px" },
                fontWeight: "bold",
              }}
            >
              نوبت های روز
            </Text>
            <DataSlider />
            <Text sx={{ color: "blue" }}>امروز</Text>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem
        sx={{
          display: "flex",
          gap: 6,
        }}
      >
        <Box sx={{ display: { base: "flex", md: "none" }, width: "100%" }}>
          <SearchInput size={"md"} placeholder="جستجو در نوبت های روز" />
        </Box>
        <Button
          leftIcon={<FaPlus />}
          sx={{
            color: "blue",
            w: "100%",
            h: "100%",
            py: 3,
            px: 8,
          }}
          variant="outline"
          colorScheme={"blue"}
        >
          مراجع بین نوبت
        </Button>
      </GridItem>
    </Grid>
  );
};

export default HeaderDetails;
