import HeaderImg from "@/Components/contactUs/HeaderImg";
import SectionInfo from "@/Components/contactUs/Section_info";
import Layout from "@/Layout";
import { Box, Grid } from "@chakra-ui/react";

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
        <Box p={14} width={"100%"}>
          <SectionInfo />
        </Box>
      </Grid>
    </Layout>
  );
};

export default ContactUs;
