// import React from "react";
// import { Button, Box, Text } from "@chakra-ui/react";

// const ConfitmTransaction = ({ selectedReserve, paymentHandleClick }) => {
//   return (
//     <Box
//       width="100%"
//       display="flex"
//       flexDirection={{ base: "column", md: "row" }} // ستونی در سایزهای کوچک‌تر
//       justifyContent="space-between"
//       alignItems="center"
//       p={2}
//       gap={4} // فاصله بین آیتم‌ها در سایز کوچک‌تر
//     >
//       <Button
//         onClick={paymentHandleClick}
//         bgColor="brand.400"
//         color="white"
//         _hover={{
//           bgColor: "purple.400",
//         }}
//         py={6}
//         width={{ base: "100%", md: "160px" }} // عرض دکمه ۲۵۰ پیکسل در سایزهای بزرگ‌تر
//         minWidth="200px" // حداقل عرض دکمه
//       >
//         پرداخت
//       </Button>
//       <Box
//         display="flex"
//         flexDirection="column"
//         gap={2}
//         justifyContent="center"
//         alignItems="center"
//         mt={{ base: 4, md: 0 }} // فاصله بالا برای سایزهای کوچک‌تر
//       >
//         <Text color="#555">مبلغ قابل پرداخت</Text>
//         <Text color="blue">
//           {selectedReserve.total_price_amount || ""} تومان
//         </Text>
//       </Box>
//     </Box>
//   );
// };

// export default ConfitmTransaction;
import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { formatNumber } from "@/utils/formatNumber";

const ConfirmTransaction = ({ selectedReserve, paymentHandleClick }) => {
  return (
    <Flex
      width="100%"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      p={2}
      gap={4}
    >
      <Button
        onClick={paymentHandleClick}
        bgColor="brand.400"
        color="white"
        _hover={{ bgColor: "purple.400" }}
        py={6}
        width={{ base: "100%", md: "160px" }}
        minWidth="200px"
      >
        پرداخت
      </Button>
      <Flex
        flexDirection="column"
        gap={2}
        alignItems="center"
        mt={{ base: 4, md: 0 }}
      >
        <Text color="#555" fontWeight="bold" fontSize="14px">
          مبلغ قابل پرداخت
        </Text>
        <Text color="blue">
          {formatNumber(selectedReserve.total_price_amount) || ""} تومان
        </Text>
      </Flex>
    </Flex>
  );
};

export default ConfirmTransaction;
