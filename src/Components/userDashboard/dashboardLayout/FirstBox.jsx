import React, { useState } from "react";
import { Grid, Box, Text, Button, useDisclosure, Flex } from "@chakra-ui/react";
import { UserData } from "@/constants";
import CancelTurnModal from "../cancelTurn/CancelTurnModal";

import SectionTitle from "@/Common/sectionTitle";
import { getCustomerName } from "@/utils/getCustomerName";
import Image from "next/image";
import { extractDate, extractTime } from "@/utils/extractDate";
import { getReserveStatus } from "../utils/ReserveStatus";
import CustomButton from "@/Common/customeButton/CustomeButton";
import Loading from "@/Common/loading";
const FirstBox = ({
  checkPhoneNumberMatch,
  userNames,
  customerList,
  sessionRecords,
  loading,
  handleButtonClick,
  operatorName,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (sessionRecords?.last_reserve) {
    return (
      <Grid
        borderRadius={"10px"}
        bgColor={"white"}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          h={"auto"}
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
          width={{ base: "100%" }}
          p={4}
        >
          <Box>
            <SectionTitle section_title="نوبت بعدی شما"></SectionTitle>
          </Box>

          <>
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
                  {getReserveStatus(sessionRecords?.last_reserve?.reserve_type)}
                </Text>
              </Box>
            </Box>
            {UserData.map((item) => {
              let customValue = "";

              if (item.title === "تاریخ") {
                customValue = extractDate(
                  sessionRecords?.last_reserve?.reserve_time_str
                );
              } else if (item.title === "زمان") {
                customValue = extractTime(
                  sessionRecords?.last_reserve?.reserve_time_str
                );
              } else if (item.title === "اپراتور") {
                customValue = operatorName;
              } else if (item.title === "مبلغ کل") {
                customValue = sessionRecords?.last_reserve?.total_price_amount;
              }
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
                      {customValue}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </>

          <Box mt={3} display={"flex"} justifyContent={"center"} width={"100%"}>
            {" "}
            <Button
              bgColor={"red"}
              color={"#fff"}
              borderRadius={"7px"}
              onClick={onOpen}
              width={"95%"}
              textAlign={"center"}
            >
              لغو نوبت
            </Button>
          </Box>
        </Box>

        {isOpen ? (
          <CancelTurnModal
            onOpen={onOpen}
            onClose={onClose}
            isOpen={isOpen}
          ></CancelTurnModal>
        ) : null}
      </Grid>
    );
  } else {
    return (
      <Box
        mb={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={4}
      >
        <Image
          src="/images/download.png"
          width={200}
          height={200}
          alt="Picture of the author"
        />
        <Text mt={2} color="#7777">
          تا الان نوبتی برای شما ثبت نشده است
        </Text>
        <Flex justifyContent="center" width="100%">
          <CustomButton w="90%" onClick={handleButtonClick}>
            {loading ? (
              <Loading noneHeight="0vh" bg="#fff" h="4px" w="4px" />
            ) : (
              "رزرو نوبت"
            )}
          </CustomButton>
        </Flex>
      </Box>
    );
  }
};

export default FirstBox;
