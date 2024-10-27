import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import MapSection from "./MapSection";
import ContactInfo from "./ContactInfo";
const SectionInfo = () => {
  return (
    <Grid width={"100%"} display={"flex"} justifyContent={"space-around"}>
      {/* map Box */}
      <Box width={{ base: "50%", md: "30%" }}>
        <MapSection />
      </Box>

      {/* contact info */}
      <Box width={{ base: "50%", md: "37%" }}>
        <ContactInfo />
      </Box>
    </Grid>
  );
};

export default SectionInfo;
