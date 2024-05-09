import {Box,Text} from '@chakra-ui/react'
const Section_title = ({section_title}) => {
    return ( 
        <Box sx={{ display: "flex",  mb: 6 }}>
        <Box
          sx={{ border: "5px solid #9584e0", borderRadius: "10px", py: 2 }}
        ></Box>

        <Text sx={{fontsize:{base:"md",lg:"lg"}}} fontWeight={"bold"} mr={2}>
         {section_title}
        </Text>
      </Box>
     );
}
 
export default Section_title;