import React from "react";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const AccordionLists = () => {
  return (
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
            <Text>شیما شریفی</Text>
            <Text>تعداد جلسات : 10</Text>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={4}>
          <Stack pt={6}>
            <Box>
              نام و نام خانوادگی<Box as="span"></Box>
            </Box>
            <Box>
              کد ملی<Box as="span"></Box>
            </Box>
            <Box>
              شماره تماس<Box as="span"></Box>
            </Box>
            <Flex gap={20}>
              <Stack>
                <Text>سابقه بیماری</Text>
                <Button>ندارد</Button>
              </Stack>
              <Stack>
                <Text>سابقه بیماری</Text>
                <Button>ندارد</Button>
              </Stack>
            </Flex>
            {/*Start inner Accordion */}
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
  );
};

export default AccordionLists;
