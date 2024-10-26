import BackToUp from "@/Common/backToUp/BackToUp";
import Banner from "@/Components/home/banner/Banner";
import Faqs from "@/Components/home/faqs/Faqs";
import { GuideSignup } from "@/Components/home/guideSignup/GuideSignup";
import Header from "@/Components/home/header/Header";
import { LaserBefore } from "@/Components/home/laserBefore/LaserBefore";
import Suggstion from "@/Components/home/suggestion/Suggstion";
import WhyLaser from "@/Components/home/whyLaser/WhyLaser";
import Layout from "@/Container";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Layout bgColor={"#F7F7F7"}>
      <Header />
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} my={8}>
        <GridItem colSpan={12} mt={{ base: 24, md: 0 }}>
          <Banner />
        </GridItem>
        <GridItem colSpan={12} my={12}>
          <WhyLaser />
        </GridItem>
      </Grid>
      <Box my={8}>
        <LaserBefore />
      </Box>
      <Box my={8}>
        <GuideSignup />
      </Box>
      <Box my={8}>
        <Faqs />
      </Box>
      <Box my={8}>
        <Suggstion />
      </Box>
      <Box>
        <BackToUp />
      </Box>
    </Layout>
  );
};

export default Home;
