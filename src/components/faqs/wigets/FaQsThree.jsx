import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { DataFaQsThree } from "../DataFaQs";
import { ThreeBoxSx } from "../Style";
import Section_title from "@/Common/section-title";

function FaQsThree() {
  return (
    <>
      <Box sx={ThreeBoxSx}>
        <Section_title
          section_title={"سوالات متداول برای مراجعین جلسه 3 - 10"}
        ></Section_title>

        <Box pb="5" pr={"10%"} textAlign="right" width="90%">
          <Text pb="5" color="#000" fontSize="md">
            افرادی که تمایل به لیزر درمانی دارند باید بدانند که:
          </Text>
          {DataFaQsThree.map((item) => {
            return (
              <Text
                key={item.id}
                pb="5"
                textColor={item.textColor}
                fontSize="md"
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

export default FaQsThree;
