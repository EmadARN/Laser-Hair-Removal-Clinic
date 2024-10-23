import HeaderImg from "@/Components/contact_us/HeaderImg";
import SectionInfo from "@/Components/contact_us/Section_info";
import Layout from "@/Container";
import { Box, Grid } from "@chakra-ui/react";
import React from "react";

const ContactUs = () => {
  return (
    <Layout bgColor={"#F7F7F7"}>
      <Grid display={"flex"} flexDirection={"column"} gap={5}>
        <Box width={"100%"}>
          {/* header image box */}
          <HeaderImg />

          <Box
            width={"70%"}
            margin={"auto"}
            borderBottom={"2px solid #444"}
            mt={4}
          ></Box>
        </Box>

        {/* contact info box */}
        <Box m={14} width={"100%"}>
          <SectionInfo />
        </Box>
      </Grid>
    </Layout>
  );
};

export default ContactUs;
