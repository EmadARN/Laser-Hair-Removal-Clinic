import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { DataFaQsOne } from "../DataFaQs";
import Section_title from "@/Common/section-title";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function FaQs() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Box
        w="100"
        px={{ base: 10, md: 28 }}
        py={10}
        mx={2}
        bgColor={"#ffffff"}
        rounded={"25px"}
      >
        <Section_title section_title="درباره لیزر"></Section_title>
        <Box textAlign="right" width="90%" pb={45}>
          <Text pb={3} fontSize="14px">
            افرادی که تمایل به لیزر درمانی دارند باید بدانند که:
          </Text>
          {!show
            ? DataFaQsOne.slice(0, 3).map((item) => {
                return (
                  <Text
                    key={item.id}
                    lineHeight="35px"
                    color="gray"
                    fontSize="14px"
                    textAlign="justify"
                  >
                    {item.Title}
                  </Text>
                );
              })
            : DataFaQsOne.map((item) => {
                return (
                  <Text
                    key={item.id}
                    lineHeight="35px"
                    color="gray"
                    fontSize="14px"
                    textAlign="justify"
                  >
                    {item.Title}
                  </Text>
                );
              })}
          <Box
            pt={4}
            pr={1}
            cursor="pointer"
            color="#757BE6"
            onClick={() => setShow(true)}
            display={show && "none"}
            fontWeight="bold"
          >
            <Box display="flex" justifyContent="start" alignItems="center">
              <Text>مشاهده بیشتر</Text>
              <Text w={5} h={5} mr={2} mt={2}>
                <ChevronDownIcon />
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default FaQs;
