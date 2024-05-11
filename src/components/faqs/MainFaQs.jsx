import FaQsTwo from "@/components/faqs/wigets/FaQsTwo";
import {Box} from "@chakra-ui/react";
import FaQs from "@/components/faqs/wigets/FaQs";
import FaQsThree from "@/components/faqs/wigets/FaQsThree";
import FaQsFour from "@/components/faqs/wigets/FaQsFour";

function FAQS() {
    return (
        <>
            <Box>


                <FaQs/>
                <FaQsTwo/>
                <FaQsThree/>
                <FaQsFour />
            </Box>
        </>
    )
}

export default FAQS