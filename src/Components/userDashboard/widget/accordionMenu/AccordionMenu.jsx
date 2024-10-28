import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
const AccordionMenu = ({reserveInformation,loading,error}) => {


  if (error) {
    console.log('log error', error);
    
  }

  if (loading) {
    return <div>در حال بارگذاری...</div>; // یا یک لودینگ اسپینر
  }

  // بررسی اینکه reserveInformation وجود دارد و آرایه است
  if (!Array.isArray(reserveInformation)) {
    console.log('reserveInformation is not an array or is undefined');

  }



  








  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton display={"flex"} justifyContent={"space-between"}>
            <Box as="span" textAlign="right">
              اطلاعات نوبت
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Stack >
          {reserveInformation.reserve.map((item, index) => (
              <Box  display={'flex'} flexDirection={'column'} gap={4} key={index}>
                {/* فرض کنید item دارای ویژگی‌هایی است که می‌خواهید نمایش دهید */}
                <Box gap={2} display={'flex'} as="span"><p> مدت زمان جلسه:</p>{item.request_time_int}</Box>
                 <Box gap={2} display={'flex'} as="span"> <p>نواحی انتخاب شده:</p>{item.laser_area_name}</Box>
                 <Box gap={2} display={'flex'} as="span"><p>ودیعه جهت رزرو نوبت:</p> {item.total_payment_amount}</Box>
                
                <Box gap={2} display={'flex'} as="span"><p> مبلغ کل:</p> {item.total_price_amount}</Box>
              </Box>
            ))}
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionMenu;
