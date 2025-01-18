import React, { useState } from "react";
import { Grid, Box, Text, Button, useDisclosure } from "@chakra-ui/react";
import { UserData } from "@/constants";
import CancelTurnModal from "../cancelTurn/CancelTurnModal";

import SectionTitle from "@/Common/sectionTitle";
import { getCustomerName } from "@/utils/getCustomerName";
import Image from "next/image";
const FinalReserve = ({checkPhoneNumberMatch,userNames,customerList}) => {
  const [viewMore, setViewMore] = useState(false);
  const [steperState, setSteperState] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();

    if(checkPhoneNumberMatch){
      return(
        <Grid
        p={4}
          bgColor={"#F7F7F7"}
          width={"100%"}
  
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            alignItems={"flex-start"}
            width={{ base: "100%" }}
            display={"flex"}
            flexDirection={"column"}
            gap={3}
            mb={4}
          >
            <Box mb={2}>
              <Text color={"#999"}>خوش آمدید</Text>
            </Box>
            <Box>
            <Text pr={1} fontWeight="bold" color="gray.500">
              {checkPhoneNumberMatch()
                ? getCustomerName(userNames.username, customerList)
                : ""}
            </Text>
            </Box>
          </Box>
  
          <Box
            h={"auto"}
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            width={{ base: "100%",}}
            p={4}
          >
            <Box>
              <SectionTitle section_title="نوبت بعدی شما"></SectionTitle>
            </Box>
  
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              p={2}
              w={"100%"}
            >
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
            {!viewMore
              ? UserData.slice(0, 2).map((item) => {
                  return (
                    <Box
                      key={item.id}
                      display={"flex"}
                      justifyContent={"space-between"}
                      p={2}
                      w={"100%"}
                    >
                      <Box>
                        <Text
                          color={"#999"}
                          fontSize={{ basel: "13px", md: "14px" }}
                        >
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
                  );
                })
              : UserData.map((item) => {
                  return (
                    <>
                      <Box
                        key={item.id}
                        display={"flex"}
                        justifyContent={"space-between"}
                        p={2}
                        w={"100%"}
                      >
                        <Box>
                          <Text
                            color={"#999"}
                            fontSize={{ basel: "13px", md: "14px" }}
                          >
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
                    </>
                  );
                })}
  
            <Box mt={3} display={"flex"} justifyContent={"center"} width={"100%"}>
              {" "}
              <Button onClick={onOpen} width={"95%"} textAlign={"center"}>
                لغو نوبت
              </Button>
            </Box>
  
            <Box
              mt={3}
              width={"100%"}
              display={"flex"}
              justifyContent={"flex-start"}
            >
              {!viewMore ? (
                <Button onClick={() => setViewMore(true)} color={"brand.400"}>
                  مشاهده ی بیشتر
                </Button>
              ) : (
                <Button color="brand.400" onClick={() => setViewMore(false)}>
                  مشاهده ی کمتر
                </Button>
              )}
            </Box>
          </Box>
  
          {/* <SessionRecordSection
            setSteperState={setSteperState}
            steperState={steperState}
          /> */}
  
          {isOpen ? (
            <CancelTurnModal
              onOpen={onOpen}
              onClose={onClose}
              isOpen={isOpen}
            ></CancelTurnModal>
          ) : null}
        </Grid>
      )
    }else{
      return(
        <Box mb={6} display="flex" flexDirection="column" alignItems="center">
            <Image
              src="/images/download.png"
              width={200}
              height={200}
              alt="Picture of the author"
            />
            <Text mt={2} color="#7777">
              تا الان نوبتی برای شما ثبت نشده است
            </Text>
          </Box>
      )
    }
     
  

};

export default FinalReserve;
