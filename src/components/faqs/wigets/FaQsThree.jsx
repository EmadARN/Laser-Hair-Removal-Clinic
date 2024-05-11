import {Text} from '@chakra-ui/react'
import Title from "@/common/title/Title";
import {Box} from '@chakra-ui/react'
import {ThreeBoxSx} from "@/components/faqs/Style";
import {DataFaQsThree} from "@/components/faqs/DataFaQs";

function FaQsThree() {
    return (

        <>
            <Box sx={ThreeBoxSx}>
                <Title inTitle={"سوالات متداول برای مراجعین جلسه 3 - 10"}/>
                <Box pb="5" pr={"10%"} textAlign="right" width="90%">
                    <Text pb="5" color="#000" fontSize='md'> افرادی که تمایل به لیزر درمانی دارند باید بدانند که:</Text>
                    {DataFaQsThree.map((item)=> {
                        return(
                            <Text key={item.id} pb="5" textColor={item.textColor} fontSize='md'>{item.Title}</Text>
                        )
                    })}

                </Box>
            </Box>
        </>
    )
}

export default FaQsThree