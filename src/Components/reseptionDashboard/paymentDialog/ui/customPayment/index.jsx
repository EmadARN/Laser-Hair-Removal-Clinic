// import { Box, Button, Flex } from "@chakra-ui/react";
// import React from "react";
// import EachPaymentBox from "./EachPaymentBox";
// import { useDispatch, useSelector } from "react-redux";

// const CustomPayment = ({
//   setStep,
//   setConfirmChange,
//   handlePaymentChange,
//   handlePrice,
// }) => {
//   const dispatch = useDispatch();
//   const {
//     selectedValue,
//     selectedValue2,
//     paymentPriceKepper1,
//     paymentPriceKepper2,
//   } = useSelector((state) => state.payment);

//   const changeHandler = () => {
//     dispatch(setConfirmChange(true));

//     setConfirmChange(true);
//     setStep(0);
//   };
//   return (
//     <>
//       <Flex flexDirection={"column"} gap={5} p={3}>
//         <Box mb={4}>
//           <EachPaymentBox
//             handlePrice={(event) => handlePrice(event, "value1")}
//             paymentPriceKepper={paymentPriceKepper1}
//             selectedValue={selectedValue}
//             handlePaymentChange={(event) =>
//               handlePaymentChange(event, "value1")
//             }
//             title1="پرداخت ۱"
//           />
//         </Box>

//         <Box mb={4}>
//           <EachPaymentBox
//             handlePrice={(event) => handlePrice(event, "value2")}
//             paymentPriceKepper={paymentPriceKepper2}
//             selectedValue={selectedValue2}
//             handlePaymentChange={(event) =>
//               handlePaymentChange(event, "value2")
//             }
//             title1="پرداخت ۲"
//           />
//         </Box>

//         <Flex justifyContent={"space-between"}>
//           <Box>
//             <Button
//               onClick={changeHandler}
//               color="#fff"
//               colorPalette="blue"
//               variant={"solid"}
//             >
//               تایید تغییرات
//             </Button>
//           </Box>

//           <Box>
//             <Button color={"blue"} variant={"ghost"}>
//               لغو تغییرات
//             </Button>
//           </Box>
//         </Flex>
//       </Flex>
//     </>
//   );
// };

// export default CustomPayment;
import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import EachPaymentBox from "./EachPaymentBox";
import { useDispatch, useSelector } from "react-redux";

const CustomPayment = ({
  setStep,
  setConfirmChange,
  handlePaymentChange,
  handlePrice,
}) => {
  const dispatch = useDispatch();
  const {
    selectedValue,
    selectedValue2,
    paymentPriceKepper1,
    paymentPriceKepper2,
  } = useSelector((state) => state.payment);

  const changeHandler = () => {
    dispatch(setConfirmChange(true));
    setConfirmChange(true);
    setStep(0);
  };
  const payment = [
    {
      key: "value1",
      paymentPriceKepper: paymentPriceKepper1,
      selectedValue: selectedValue,
      title: "پرداخت ۱",
    },
    {
      key: "value2",
      paymentPriceKepper: paymentPriceKepper2,
      selectedValue: selectedValue2,
      title: "پرداخت ۲",
    },
  ];
  return (
    <Flex flexDirection="column" gap={5} p={3}>
      {payment.map(({ key, paymentPriceKepper, selectedValue, title }) => (
        <Box key={key} mb={4}>
          <EachPaymentBox
            handlePrice={(event) => handlePrice(event, key)}
            paymentPriceKepper={paymentPriceKepper}
            selectedValue={selectedValue}
            handlePaymentChange={(event) => handlePaymentChange(event, key)}
            title1={title}
          />
        </Box>
      ))}

      <Flex justifyContent="space-between">
        <Button onClick={changeHandler} colorScheme="blue">
          تایید تغییرات
        </Button>
        <Button colorScheme="blue" variant="ghost">
          لغو تغییرات
        </Button>
      </Flex>
    </Flex>
  );
};

export default CustomPayment;
