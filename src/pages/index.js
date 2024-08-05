import Experienced_years from "@/Components/5years-with-you";
import AdminTable from "@/Components/AdminTable/AdminTable";
import FaQs from "@/Components/faqs/wigets/FaQs";
import Main_get_turn from "@/Components/get-turn-section";
import ReseptionDashboard from "@/Components/reseptionDashboard";
import CaptionSlider from "@/Components/slider/CaptionSlider";
import Suggstion from "@/Components/suggestion/Suggstion";
import Layout from "@/Container";
import SideBar from "@/Layout/SideBar/Sidebar";
import SideBarDashboard from "@/Layout/SideBar/Sidebar";
import DashboardReception from "@/Layout/SideBar/Sidebar";
import { Box } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    // <Layout bgColor={"#F7F7F7"}>
    //   <CaptionSlider />
    //   <Main_get_turn />
    //   <Box my={8}>
    //     <FaQs />
    //   </Box>
    //   <Suggstion />
    //   <Experienced_years />
    // </Layout>
    <AdminTable/>
  );
};

export default Home;
