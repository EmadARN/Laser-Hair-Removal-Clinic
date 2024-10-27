import AboutHeader from "@/Components/aboutUs/AboutHeader";
import CounterMain from "@/Components/aboutUs/CounterMain";
import Layout from "@/Container";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const AboutUs = () => {
  return (
    <Layout bgColor={"#F7F7F7"}>
      <Grid p={12} display={"flex"} flexDirection={"column"} gap={6}>
        <Grid
          container
          mt={17}
          p={12}
          width={"100%"}
          display={"flex"}
          justifyContent={"space-around"}
        >
          <GridItem>
            <AboutHeader />
          </GridItem>
        </Grid>

        <Box my={28}>
          <CounterMain />
        </Box>
      </Grid>
    </Layout>
  );
};

export default AboutUs;
