import React from "react";
import { Flex, Text, Grid, GridItem, Box } from "@chakra-ui/react";
import SearchInput from "@/Common/searchInput/SearchInput";
import PatientWithoutTime from "../AddPatientWithoutTime";
import { getTodayDate } from "@/utils/extractDate";

const HeaderDetails = () => {
  return (
    <Box
      width={"100%"}
    mr={{base:12,md:0}}
      gap={4}
    
    >
      <Flex
       
        sx={{
          justifyContent:"space-between",
          width: "100%",
          flexDirection: { base: "row" },
          alignItems: "center",
          gap: { base: 5, sm: 4, md: 8 },
        }}
      >
        <Text
          sx={{
            whiteSpace: "nowrap",
            fontSize: { base: "12px", sm: "15px", md: "20px" },
            fontWeight: "bold",
          }}
        >
          نوبت های روز
        </Text>
        <Box
          whiteSpace="nowrap"
          fontSize={{ base: "12px", sm: "15px", md: "20px" }}
        >
          {" "}
          {getTodayDate()}
        </Box>

        <Box
      
        sx={{
        
          gap: { base: 5, md: 4 },
          alignItems: "center",
   
        }}
      >
  
        <PatientWithoutTime />
      </Box>
      </Flex>

 
    </Box>
  );
};

export default HeaderDetails;
