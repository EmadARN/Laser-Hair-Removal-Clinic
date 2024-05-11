import {Text} from '@chakra-ui/react'
import Title from "@/common/title/Title";
import {Box} from '@chakra-ui/react'
import {ThreeBoxSx} from "@/components/faqs/Style";
import {DataFaQsFour} from "@/components/faqs/DataFaQs";

function FaQsFour() {
    return (

        <>
            <Box sx={ThreeBoxSx}>
                <Title inTitle={"سوالات متداول برای مراجعین در دوره شارژ"}/>
                <Box pb="5" pr={"10%"} textAlign="right" width="90%">
                    <Text pb="5" color="#000" > افرادی که تمایل به لیزر درمانی دارند باید بدانند که:</Text>
                    {DataFaQsFour.map((item)=>{
                        return(
                            <Text key={item.id} pb="5"textColor={item.textColor} size={item.size} fontSize='md'>{item.Title}</Text>
                        )
                    })
                    }
                </Box>
            </Box>
        </>
    )
}

export default FaQsFour