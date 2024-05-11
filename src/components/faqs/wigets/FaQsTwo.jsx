import {Text} from '@chakra-ui/react'
import Title from "@/common/title/Title";
import {Box} from '@chakra-ui/react'
import {TwoBoxSx} from "@/components/faqs/Style";
import {DataFaQsTwo} from "@/components/faqs/DataFaQs";

function FaQsTwo() {
    return (

        <>
            <Box sx={TwoBoxSx}>
                <Title inTitle={"سوالات متداول برای مراجعین جلسه اول"}/>
                <Box pb="5" pr={"10%"}  width="90%">
                    {
                        DataFaQsTwo.map((item) => {
                            return (
                                <Text key={item.id} pb="5" color={item.textColor} fontSize='md'>{item.title}</Text>
                            )

                        })
                    }

                </Box>
            </Box>
        </>
    )
}

export default FaQsTwo