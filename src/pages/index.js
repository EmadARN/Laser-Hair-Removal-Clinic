import Experienced_years from "@/Components/5years-with-you";
import FaQs from "@/Components/faqs/wigets/FaQs";
import Main_get_turn from "@/Components/get-turn-section";
import CaptionSlider from "@/Components/slider/CaptionSlider";
import Suggstion from "@/Components/suggestion/Suggstion";
import Layout from "@/Container";
import { Box } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Layout>
      <CaptionSlider />
      <Main_get_turn />
      <Box my={8}>
        <FaQs />
      </Box>
      <Suggstion />
      <Experienced_years />
    </Layout>
  );
};

export default Home;
