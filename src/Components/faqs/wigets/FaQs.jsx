import { Button, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { DataFaQsOne } from "../DataFaQs";
import Section_title from "@/Common/section-title";
import { useState } from "react";

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
        </Box>
        <Text
          cursor="pointer"
          color="#757BE6"
          onClick={() => setShow(true)}
          display={show && "none"}
        >
          مشاهده بیشتر
        </Text>
      </Box>
    </>
  );
}

export default FaQs;
