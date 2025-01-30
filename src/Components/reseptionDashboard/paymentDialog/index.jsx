// import React, { useState } from "react";
// import {
//   Box,
//   Text,
//   Flex,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   Input,
// } from "@chakra-ui/react";
// import { MdCancel } from "react-icons/md";
// import { extractTime } from "@/utils/extractDate";
// import InformationBox from "./widget/InformationBox";
// import { FaArrowRight } from "react-icons/fa";
// import PaymentMethodSection from "./widget/PaymentMethodSection";
// import ConfitmTransaction from "./widget/ConfitmTransaction";
// import CustomPayment from "./widget/customPayment";
// import LaserAreas from "./widget/LaserAreas";
// import { secBox } from "./widget/LaserAreas/style";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setPaymentPriceKepper1,
//   setPaymentPriceKepper2,
//   setSelectedValue,
//   setSelectedValue2,
// } from "@/features/receptionDashboard/paymentSlice";

// const PaymentDialog = ({
//   handlePaymentMethodChange,
//   handlePrice,
//   isOpen,
//   onClose,
//   paymentHandleClick,
//   handlePaymentChange,
// }) => {
//   const [discountCode, setDiscountCode] = useState("");
//   const [step, setStep] = useState(0);
//   const {
//     selectedReserve,
//     idKeeper,
//     selectedValue,
//     selectedValue2,
//     paymentPriceKepper1,
//     paymentPriceKepper2,
//     oneWayPaymentValu,
//     confrimChange,
//   } = useSelector((state) => state.payment);

//   const dispatch = useDispatch();
//   const handleCancel = () => {
//     setStep(0);
//     dispatch(setPaymentPriceKepper1(""));
//     dispatch(setPaymentPriceKepper2(""));
//     dispatch(setSelectedValue(""));
//     dispatch(setSelectedValue2(""));
//     onClose();
//   };

//   const getPayementKind = (Payment) => {
//     switch (Payment) {
//       case "ca":
//         return "نقدی";
//       case "cr":
//         return "کارتخوان";
//       default:
//         return "اطلاعات موجود نیست";
//     }
//   };

//   const renderInformationBox = (title, value, stepControl = null) => {
//     return (
//       <InformationBox
//         title={title}
//         value={value}
//         setStep={stepControl ? setStep : undefined}
//         step={stepControl ? step : undefined}
//       />
//     );
//   };

//   const renderHeader = () => {
//     const titles = ["پرداخت", "انتخاب نواحی", "پرداخت به چند روش"];

//     return (
//       <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }}>
//         <Box sx={secBox}>
//           {step > 0 && (
//             <FaArrowRight
//               onClick={() => setStep(0)}
//               cursor={"pointer"}
//               fontSize={"17px"}
//             />
//           )}
//           <Text mr={3} fontSize={"17px"} fontWeight={"bold"}>
//             {titles[step]}
//           </Text>
//         </Box>
//       </Text>
//     );
//   };

//   const renderContent = () => {
//     switch (step) {
//       case 0:
//         return (
//           <>
//             <Box
//               width="100%"
//               p={2}
//               display="flex"
//               flexDirection="column"
//               gap={3}
//             >
//               {renderInformationBox(
//                 "نام و نام خانوادگی",
//                 selectedReserve.user || ""
//               )}
//               {renderInformationBox(
//                 "زمان نوبت",
//                 extractTime(selectedReserve.reserve_time_str) || ""
//               )}
//               {renderInformationBox(
//                 "ناحیه لیزر",
//                 selectedReserve.laser_area_name || "",
//                 true
//               )}
//             </Box>
//             <Box>
//               {!confrimChange ? (
//                 <Box mt={3} width="100%" p={2}>
//                   <PaymentMethodSection
//                     oneWayPaymentValu={oneWayPaymentValu}
//                     handlePaymentMethodChange={handlePaymentMethodChange}
//                     setStep={setStep}
//                     step={step}
//                   />
//                 </Box>
//               ) : (
//                 <Box
//                   borderRadius={"6px"}
//                   border={"1px solid #ddd"}
//                   width={"98%"}
//                   h={"auto"}
//                   p={"10px"}
//                   display={"flex"}
//                   flexDirection={"column"}
//                   gap={2}
//                 >
//                   <Box p={2} display={"flex"} justifyContent={"space-between"}>
//                     <Text>{getPayementKind(selectedValue)}</Text>
//                     <Text color={"blue"} fontWeight={"bold"}>
//                       {paymentPriceKepper1} تومان
//                     </Text>
//                   </Box>
//                   <hr />

//                   <Box p={2} display={"flex"} justifyContent={"space-between"}>
//                     <Text>{getPayementKind(selectedValue2)}</Text>
//                     <Text color={"blue"} fontWeight={"bold"}>
//                       {paymentPriceKepper2} تومان
//                     </Text>
//                   </Box>
//                 </Box>
//               )}
//             </Box>
//             <Box mt={4} width="100%">
//               <ConfitmTransaction
//                 paymentHandleClick={paymentHandleClick}
//                 selectedReserve={selectedReserve}
//               />
//             </Box>
//           </>
//         );
//       case 1:
//         return (
//           <LaserAreas idKeeper={idKeeper} onClose={onClose} setStep={setStep} />
//         );
//       case 2:
//         return (
//           <CustomPayment
//             setStep={setStep}
//             handlePrice={handlePrice}
//             handlePaymentChange={handlePaymentChange}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={handleCancel} isCentered>
//       <ModalOverlay />
//       <ModalContent
//         p={{ base: 3, md: 5 }}
//         maxW={{ base: "90%", md: "500px" }}
//         maxH="100vh"
//         overflowY="auto"
//       >
//         <Flex
//           mb={4}
//           p={2}
//           justifyContent="space-between"
//           alignItems="center"
//           width="100%"
//         >
//           {renderHeader()}
//           <MdCancel
//             cursor="pointer"
//             onClick={handleCancel}
//             fontSize={{ base: "20px", md: "24px" }}
//           />
//         </Flex>
//         {renderContent()}
//       </ModalContent>
//     </Modal>
//   );
// };
//گوت آقا فرضی پور
// export default PaymentDialog;پ

import React from "react";
import { Flex, Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import LaserAreas from "./ui/LaserAreas";
import CustomPayment from "./ui/customPayment";
import usePaymentDialog from "./logic/usePaymentDialog";
import paymentDialogContent from "./ui/paymentDialogContent";
import { useSelector } from "react-redux";

const PaymentDialog = ({
  handlePaymentMethodChange,
  handlePrice,
  isOpen,
  onClose,
  paymentHandleClick,
  handlePaymentChange,
}) => {
  const { cutomerList } = useSelector((state) => state.receptionDashboardSlice);
  const {
    step,
    setStep,
    selectedReserve,
    idKeeper,
    selectedValue,
    selectedValue2,
    paymentPriceKepper1,
    paymentPriceKepper2,
    oneWayPaymentValu,
    confrimChange,
    handleCancel,
    paymentKind,
    titles,
  } = usePaymentDialog(onClose);

  const { renderHeader, renderpaymentDialogContent } = paymentDialogContent(
    step,
    setStep,
    selectedReserve,
    paymentKind,
    selectedValue,
    selectedValue2,
    paymentPriceKepper1,
    paymentPriceKepper2,
    titles,
    oneWayPaymentValu,
    confrimChange,
    handlePaymentMethodChange,
    paymentHandleClick,
    cutomerList
  );

  const renderContent = () => {
    if (step === 1)
      return (
        <LaserAreas idKeeper={idKeeper} onClose={onClose} setStep={setStep} />
      );
    if (step === 2)
      return (
        <CustomPayment
          setStep={setStep}
          handlePrice={handlePrice}
          handlePaymentChange={handlePaymentChange}
        />
      );

    return renderpaymentDialogContent();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCancel} isCentered>
      <ModalOverlay />
      <ModalContent
        p={{ base: 3, md: 5 }}
        maxW={{ base: "90%", md: "500px" }}
        maxH="100vh"
        overflowY="auto"
      >
        <Flex
          mb={4}
          p={2}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          {renderHeader()}
          <MdCancel
            cursor="pointer"
            onClick={handleCancel}
            fontSize={{ base: "20px", md: "24px" }}
          />
        </Flex>
        {renderContent()}
      </ModalContent>
    </Modal>
  );
};

export default PaymentDialog;
