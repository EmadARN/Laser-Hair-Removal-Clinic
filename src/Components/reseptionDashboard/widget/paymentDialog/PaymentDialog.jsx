import React from "react";
import { Grid, Box, Text ,Flex} from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import InformationBox from "./widget/InformationBox";
import PaymentMethodSection from "./widget/PaymentMethodSection";
import ConfitmTransaction from "./widget/ConfitmTransaction";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,

  ModalCloseButton,
} from "@chakra-ui/react";

const PaymentDialog = ({isOpen,onClose}) => {


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={3} >
      

            <Box
       
               mb={4}
        
         display={'flex'}
         justifyContent={'space-between'}
         width={'100%'}
            
            >
             
           
              <Text fontWeight={"bold"}>پرداخت</Text>
              <MdCancel cursor={'pointer'} onClick={onClose} />
              
            </Box>

            <Box
              width={"100%"}
              p={2}
              display={"flex"}
              flexDirection={"column"}
              gap={2}
            >
              <InformationBox title="نام و نام خانوادگی" value="ملیکا رمضانی" />
              <InformationBox title="زمان نوبت" value="8.30" />
              <InformationBox title="ناحیه لیزر" value={"فول بادی"} />
            </Box>

            <Box mt={3} width={"99%"}>
              <PaymentMethodSection />
            </Box>

            <Box mt={3} width={"100%"}>
              <ConfitmTransaction />
            </Box>
        
    
      </ModalContent>
    </Modal>
  );
};

export default PaymentDialog;
