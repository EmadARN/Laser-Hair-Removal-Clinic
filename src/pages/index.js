import Experienced_years from "@/Components/home/5years-with-you";
import FaQs from "@/Components/home/faqs/wigets/FaQs";
import Main_get_turn from "@/Components/home/get-turn-section";
import CaptionSlider from "@/Components/home/slider/CaptionSlider";
import Suggstion from "@/Components/home/suggestion/Suggstion";
import Layout from "@/Container";
import { Box } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Layout bgColor={"#F7F7F7"}>
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
