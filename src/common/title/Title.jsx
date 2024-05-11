import {Box, Text} from '@chakra-ui/react'
import {TitleSx} from "@/common/title/Style";
function Title({inTitle}){
    return(
        <>
            <Box pt="5" mt="5">
                <Text sx={TitleSx} >{inTitle}</Text>
            </Box>
        </>
    )
}
export default Title