import React, { Suspense } from "react";
import { Grid, Box, Spinner } from "@chakra-ui/react";
import ContactInfo from "./ContactInfo";


const MapSection = React.lazy(() => import("./MapSection"));

const SectionInfo = () => {
  return (
    <Grid width={"100%"} display={"flex"} justifyContent={"space-around"}>
 
      <Box width={{ base: "50%", md: "30%" }}>
        <Suspense fallback={<Spinner size="lg" />}>
          <MapSection />
        </Suspense>
      </Box>

    
      <Box width={{ base: "50%", md: "37%" }}>
        <ContactInfo />
      </Box>
    </Grid>
  );
};

export default SectionInfo;
