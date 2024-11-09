import React from "react";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { MdOutlineArrowRightAlt } from "react-icons/md";



const AccordionLists = ({clientData,mdCancelHandler}) => {
  return (
<>
<Box display={'flex'} alignItems={'center'} gap={6} mt={6}>
<MdOutlineArrowRightAlt cursor={'pointer'} onClick={mdCancelHandler} fontSize={'30px'}/>
<Text fontWeight={'bold'} fontSize={'25px'}>{clientData.name + " " + clientData.last_name}</Text>
</Box>

    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
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
            <Box mb={3} display={'flex'} flexDirection={'column'} gap={3}>
              <Text >نام و نام خانوادگی</Text>
              <Box fontWeight={'bold'} fontSize = {{ base: "14px", md: "18px" }} as="span">{clientData.name + " " + clientData.last_name}</Box>
            </Box>
            <Box mb={3} display={'flex'} flexDirection={'column'} gap={3}>
              <Text>کد ملی</Text>
              <Box fontWeight={'bold'} fontSize = {{ base: "14px", md: "18px" }} as="span">{clientData.national_code}</Box>
            </Box>
            <Box mb={3} display={'flex'} flexDirection={'column'} gap={3}>
              <Text> شماره تماس</Text>
             <Box fontWeight={'bold'} fontSize = {{ base: "14px", md: "18px" }} as="span">{clientData.phone_number}</Box>
            </Box>
            <Flex width={'50%'} gap={20} justifyContent={'space-between'}>
              <Stack>
                <Text>سابقه بیماری</Text>
                <Text textAlign={'center'} py={2}  bgColor={"#ddd"}>{clientData.decease_hist === true ?"بله":"خیر"}</Text>
              </Stack>
              <Stack>
                <Text>سابقه بیماری</Text>
                <Text textAlign={'center'} py={2}  bgColor={"#ddd"}>{clientData.drug_hist === true ?"بله":"خیر"}</Text>
              </Stack>
            </Flex>
            {/* Start inner Accordion */}
            <Stack pt={8}>
              <Text>تاریخچه جلسات</Text>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <Heading as="h2" size="4xl" noOfLines={1}>
                    <AccordionButton
                      display={"flex"}
                      justifyContent={"space-between"}
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
                      <Text as="span" textAlign="right">
                        1 دوشنبه 17 دی , 1401
                      </Text>
                      <Text>16:20</Text>
                      <Text>فول بادی</Text>
                      <Text>پرداخت نقدی</Text>
                      <AccordionIcon />
                    </AccordionButton>
                  </Heading>
                  <AccordionPanel pb={4}>
                    <Stack>
                      <Box>
                        مدت زمان جلسه :<Box as="span"></Box>
                      </Box>
                      <Box>
                        نواحی انتخاب شده :<Box as="span"></Box>
                      </Box>
                      <Box>
                        ودیعه جهت رزرو نوبت :<Box as="span"></Box>
                      </Box>
                      <Box>
                        موجودی کیف پول :<Box as="span"></Box>
                      </Box>
                      <Box>
                        مبلغ کل:
                        <Box as="span"></Box>
                      </Box>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
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
