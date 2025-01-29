import React from "react";
import { Grid, Box, AspectRatio, Text } from "@chakra-ui/react";
import { contactDetails } from "@/constants";

const SectionInfo = () => {
  return (
    <Grid width={"100%"} display={"flex"} justifyContent={"space-around"}>
      <Box width={{ base: "50%", md: "30%" }}>
        <AspectRatio ratio={15 / 10}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
        </AspectRatio>
      </Box>

      <Box width={{ base: "50%", md: "37%" }}>
        <Box display="flex" flexDirection="column" gap={4}>
          {contactDetails.map((detail, index) => (
            <Box key={index} gap={3} display="flex" flexDirection="column">
              <Text
                fontWeight="bold"
                fontSize={{ base: "16px", md: "22px" }}
                color="gray.600"
              >
                {detail.title}
              </Text>
              <Text fontSize={{ base: "12px", md: "17px" }} color="gray.500">
                {detail.content}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Grid>
  );
};

export default SectionInfo;
