import BackToUp from "@/Common/backToUp/BackToUp";
import Loading from "@/Common/loading";
import Banner from "@/Components/landing/banner";
import Faqs from "@/Components/landing/faqs";
import { GuideSignup } from "@/Components/landing/guideSignup";
import Header from "@/Components/landing/header";
import { LaserBefore } from "@/Components/landing/laserBefore";
import WhyLaser from "@/Components/landing/whyLaser";
import Layout from "@/Layout";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInitialLoading(false);
    }, 3000);
  }, []);

  return initialLoading ? (
    <Loading />
  ) : (
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
      <Box>
        <BackToUp />
      </Box>
    </Layout>
  );
};

export default Home;
