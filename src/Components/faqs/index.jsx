import FaQsTwo from "@/components/faqs/wigets/FaQsTwo";
import { Box } from "@chakra-ui/react";
import FaQsThree from "@/components/faqs/wigets/FaQsThree";
import FaQsFour from "@/components/faqs/wigets/FaQsFour";
import FaQs from "./wigets/FaQs";

function FAQS() {
  return (
    <>
      <Box>
        <FaQs />
        <FaQsTwo />
        <FaQsThree />
        <FaQsFour />
      </Box>
    </>
  );
}

export default FAQS;
