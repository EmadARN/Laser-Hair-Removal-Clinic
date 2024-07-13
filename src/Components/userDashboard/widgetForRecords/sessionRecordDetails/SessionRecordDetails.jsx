import React from "react";
import { Grid, Box, Text, Button } from "@chakra-ui/react";
import { UserData2 } from "./DataForProfile";
const SessionRecordDetails = () => {
  return (
    <Grid
      bgColor={"#F7F7F7"}
      width={"100%"}
      h={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        h={"auto"}
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        width={{ base: "100%", md: "45%" }}
        p={4}
      >
        <Box display={"flex"} justifyContent={"space-between"} p={2} w={"100%"}>
          <Box>
            <Text color={"#999"} fontSize={{ basel: "13px", md: "14px" }}>
              وضعیت
            </Text>
          </Box>
          <Box>
            <Text
              fontWeight={"bold"}
              color={"green"}
              fontSize={{ basel: "13px", md: "14px" }}
            >
              رزرو شده
            </Text>
          </Box>
        </Box>
        {UserData2.map((item) => {
          return (
            <>
            <Box
              key={item.id}
              display={"flex"}
              justifyContent={"space-between"}
              p={4}
              w={"100%"}
            >
              <Box>
                <Text color={"#999"} fontSize={{ basel: "13px", md: "14px" }}>
                  {item.title}
                </Text>
              </Box>
              <Box>
                <Text
                  fontWeight={"bold"}
                  fontSize={{ basel: "13px", md: "14px" }}
                >
                  {item.value}
                </Text>
              </Box>
            </Box>
            <hr />
            </>
          );
        })}
      </Box>
    </Grid>
  );
};

export default SessionRecordDetails;
