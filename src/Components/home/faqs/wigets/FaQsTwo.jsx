import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { TwoBoxSx } from "../Style";
import Section_title from "@/Common/section-title";
import { DataFaQsTwo } from "@/constants";

function FaQsTwo() {
  return (
    <>
      <Box sx={TwoBoxSx}>
        <Section_title
          section_title={"سوالات متداول برای مراجعین جلسه اول"}
        ></Section_title>
        <Box pb="5" pr={"10%"} width="90%">
          {DataFaQsTwo.map((item) => {
            return (
              <Text key={item.id} pb="5" color={item.textColor} fontSize="md">
                {item.title}
              </Text>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default FaQsTwo;
