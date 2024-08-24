import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Section_title from "@/Common/section-title";
import { ThreeBoxSx } from "../Style";
import { DataFaQsFour } from "@/constants";

function FaQsFour() {
  return (
    <>
      <Box sx={ThreeBoxSx}>
        <Section_title
          section_title={"سوالات متداول برای مراجعین در دوره شارژ"}
        ></Section_title>
        <Box pb="5" pr={"10%"} textAlign="right" width="90%">
          <Text pb="5" color="#000">
            افرادی که تمایل به لیزر درمانی دارند باید بدانند که:
          </Text>
          {DataFaQsFour.map((item) => {
            return (
              <Text
                key={item.id}
                pb="5"
                textColor={item.textColor}
                size={item.size}
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

export default FaQsFour;
