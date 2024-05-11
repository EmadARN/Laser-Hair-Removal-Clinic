import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { DataFaQsOne } from "../DataFaQs";
import Section_title from "@/Common/section-title";

function FaQs() {
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
          {DataFaQsOne.map((item) => {
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
      </Box>
    </>
  );
}

export default FaQs;
