import React from "react";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { extractTime } from "@/utils/extractDate";

const AccordionLists = ({ clientData, mdCancelHandler, clientInformation }) => {
  return (
    <>
      <Box display={"flex"} alignItems={"center"} gap={6} mt={6}>
        <MdOutlineArrowRightAlt
          cursor={"pointer"}
          onClick={mdCancelHandler}
          fontSize={"30px"}
        />
        <Text fontWeight={"bold"} fontSize={{ base: "16px", md: "24px" }}>
          {clientData.name + " " + clientData.last_name}
        </Text>
      </Box>

      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
          <Heading as="h2">
            <AccordionButton
              sx={{
                ":hover": {
                  bgColor: "transparent",
                },
                justifyContent: "space-between",
                alignItems: "center",
                bgColor: "gray.50",
                width: "100%",
                rounded: "8px",
                p: 5,
              }}
            >
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <Stack pt={6}>
              <Box mb={3} display={"flex"} flexDirection={"column"} gap={3}>
                <Text fontSize={{ base: "12px", md: "16px" }}>
                  نام و نام خانوادگی
                </Text>
                <Box
                  fontWeight={"bold"}
                  fontSize={{ base: "13px", md: "18px" }}
                  as="span"
                >
                  {clientData.name + " " + clientData.last_name}
                </Box>
              </Box>

              <Box mb={3} display={"flex"} flexDirection={"column"} gap={3}>
                <Text fontSize={{ base: "12px", md: "16px" }}> شماره تماس</Text>
                <Box
                  fontWeight={"bold"}
                  fontSize={{ base: "13px", md: "18px" }}
                  as="span"
                >
                  {clientData.phone_number}
                </Box>
              </Box>
              <Flex
                width={{ base: "100%", md: "50%" }}
                gap={20}
                justifyContent={"space-between"}
              >
                <Stack>
                  <Text fontSize={{ base: "12px", md: "16px" }}>
                    سابقه بیماری
                  </Text>
                  <Text
                    textAlign={"center"}
                    fontSize={{ base: "12px", md: "16px" }}
                    py={{ base: 1, md: 2 }}
                    bgColor={"#ddd"}
                  >
                    {clientData.decease_hist === true ? "بله" : "خیر"}
                  </Text>
                </Stack>
                <Stack>
                  <Text fontSize={{ base: "12px", md: "16px" }}>
                    سابقه مصرف دارو
                  </Text>
                  <Text
                    textAlign={"center"}
                    fontSize={{ base: "12px", md: "16px" }}
                    py={{ base: 1, md: 2 }}
                    bgColor={"#ddd"}
                  >
                    {clientData.drug_hist === true ? "بله" : "خیر"}
                  </Text>
                </Stack>
              </Flex>
              {/* Start inner Accordion */}
              <Stack pt={8} spacing={4}>
                <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
                  تاریخچه جلسات
                </Text>
                <Accordion allowMultiple>
                  {clientInformation?.map((item, index) => (
                    <AccordionItem key={index}>
                      <Heading as="h2" size="md" noOfLines={1}>
                        <AccordionButton
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          flexWrap="wrap"
                          sx={{
                            ":hover": {
                              bgColor: "transparent",
                            },
                            bgColor: "gray.50",
                            rounded: "8px",
                            p: { base: 3, md: 5 },
                          }}
                        >
                          <Text
                            mb={4}
                            as="span"
                            textAlign="right"
                            fontSize={{ base: "sm", md: "md" }}
                          >
                            {item.reserve_time_str}
                          </Text>
                          <Stack
                            direction={{ base: "column", sm: "row" }}
                            spacing={2}
                            textAlign={{ base: "right", sm: "center" }}
                          >
                            <Text mb={4} fontSize={{ base: "sm", md: "md" }}>
                              {extractTime(item.reserve_time_str)}
                            </Text>
                            <Text mb={4} fontSize={{ base: "sm", md: "md" }}>
                              {item.laser_area_name}
                            </Text>
                          </Stack>
                          <AccordionIcon />
                        </AccordionButton>
                      </Heading>
                      <AccordionPanel pb={4}>
                        <Stack spacing={3}>
                          <Box fontSize={{ base: "sm", md: "md" }}>
                            نواحی انتخاب شده:{" "}
                            <Box as="span"> {item.laser_area_name}</Box>
                          </Box>
                          <Box fontSize={{ base: "sm", md: "md" }}>
                            ودیعه جهت رزرو نوبت:{" "}
                            <Box as="span">{item.total_payment_amount}</Box>
                          </Box>

                          <Box fontSize={{ base: "sm", md: "md" }}>
                            مبلغ کل:{" "}
                            <Box as="span">{item.total_price_amount}</Box>
                          </Box>
                        </Stack>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Stack>

              {/*End inner Accordion */}
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default AccordionLists;
