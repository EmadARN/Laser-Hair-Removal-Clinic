import {Text} from '@chakra-ui/react'
import Title from "@/common/title/Title";
import {Box} from '@chakra-ui/react'
import {OneBoxSx} from "@/components/faqs/Style";
import {DataFaQsOne} from "@/components/faqs/DataFaQs";

function FaQs() {
    return (

        <>
            <Box sx={OneBoxSx}>
                <Title inTitle={"درباره لیزر"}/>
                <Box pr={"10%"} textAlign="right" width="90%" pb={45} >
                    <Text pb={3} fontSize="16.5px">افرادی که تمایل به لیزر درمانی دارند باید بدانند که:</Text>
                    {DataFaQsOne.map((item) => {
                        return(
                                <Text key={item.id} lineHeight="35px" color="gray" fontSize='16.4'  >{item.Title}</Text>
                            )
                    })
                    }
                </Box>
            </Box>
        </>
    )
}

export default FaQs