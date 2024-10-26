import AboutText from "@/Components/About_Us/AboutText";
import CounterMain from "@/Components/About_Us/counter/Counter";
import Layout from "@/Container";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const About = () => {
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
          <GridItem width={"50%"}>
            <img width={"80%"} src="/images/about.jpg" alt="image" />
          </GridItem>

          <GridItem width={"50%"}>
            <AboutText />
          </GridItem>
        </Grid>


        <Box>
            <CounterMain/>
        </Box>
      </Grid>
    </Layout>
  );
};

export default About;
