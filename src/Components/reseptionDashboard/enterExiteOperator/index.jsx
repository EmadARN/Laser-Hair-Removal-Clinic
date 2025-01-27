// import { Button, Flex, Text, Box } from "@chakra-ui/react";
// import React, { useEffect, useState } from "react";
// import { useCookies } from "react-cookie";
// import { useDispatch, useSelector } from "react-redux";
// import { MdOutlineAccessTime } from "react-icons/md";
// import {
//   enterExitedOprators,
//   getOperatorSchedule,
// } from "@/features/receptionDashboard/receptionThunks";
// import { useCustomToast } from "@/utils/useCustomToast ";
// import CustomModal from "@/Common/attentionModal/CustomModal";

// const EnterExite = () => {
//   const [{ auth_Employee_token } = cookies] = useCookies();
//   const { showToast } = useCustomToast();
//   const dispatch = useDispatch();
//   const { operatorSchedule } = useSelector(
//     (store) => store.receptionDashboardSlice
//   );

//   const [isEntered, setIsEntered] = useState(false);
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [selectedAction, setSelectedAction] = useState(null); // برای ذخیره انتخاب کاربر (ورود یا خروج)

//   useEffect(() => {
//     if (!operatorSchedule) {
//       showToast({
//         title: "خطا.",
//         description: "هیچ اوپراتوری یافت نشد.",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   }, [operatorSchedule]);

//   useEffect(() => {
//     dispatch(getOperatorSchedule({ auth_Employee_token }));
//   }, [dispatch]);

//   const openModal = (action) => {
//     setSelectedAction(action); // انتخاب عملیات (ورود یا خروج)
//     setModalOpen(true); // باز کردن مودال
//   };

//   const closeModal = () => {
//     setModalOpen(false); // بستن مودال
//     setSelectedAction(null); // پاک کردن انتخاب
//   };

//   const handleConfirm = () => {
//     const username = operatorSchedule?.operator_username;
//     if (selectedAction === "enter") {
//       dispatch(enterExitedOprators({ username, auth_Employee_token }));
//       setIsEntered(true);
//       showToast({
//         title: "ورود موفق",
//         description: "اوپراتور با موفقیت وارد شد.",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
//     } else if (selectedAction === "exit") {
//       dispatch(enterExitedOprators({ username, auth_Employee_token }));
//       setIsEntered(false);
//       showToast({
//         title: "خروج موفق",
//         description: "اوپراتور با موفقیت خارج شد.",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//     dispatch(getOperatorSchedule({ auth_Employee_token }));
//     closeModal(); // بستن مودال بعد از تایید
//   };
//   //Props to customModal
//   const modalProps = {
//     title: isEntered ? "ثبت خروج" : "ثبت ورود",
//     description: `آیا از ${isEntered ? "خروج" : "ورود"} اوپراتور (${
//       operatorSchedule?.operator_name
//     }) مطمئن هستید؟`,
//     confirmText: isEntered ? "ثبت خروج" : "ثبت ورود",
//   };

//   return (
//     <Box w="100%" maxW="450px" mx="auto" p={{ base: 1, md: 4 }}>
//       <Flex direction="column" align="start" mb={2}>
//         <Text
//           color="#222"
//           fontWeight="bold"
//           fontSize={{ base: "10px", md: "14px" }}
//         >
//           اوپراتور شیفت
//         </Text>
//         <Flex justifyContent="space-between" align="center" w="100%" p={2}>
//           <Text color="gray.500" fontSize={{ base: "10px", md: "14px" }}>
//             {operatorSchedule?.operator_name || "نام اوپراتور یافت نشد"}
//           </Text>
//           <MdOutlineAccessTime color="gray" size={18} />
//         </Flex>
//       </Flex>

//       <Button
//         onClick={() => openModal(isEntered ? "exit" : "enter")} // باز کردن مودال و تعیین عملیات
//         border="1px solid #7563DC"
//         borderRadius="8px"
//         mt={3}
//         w="100%"
//         minW={{ base: "70px", md: "130px" }}
//         fontSize={{ base: "8px", md: "14px" }}
//         color="brand.400"
//         fontWeight="bold"
//         bgColor="transparent"
//         _hover={{ bgColor: "purple.50" }}
//       >
//         {isEntered ? "ثبت خروج" : "ثبت ورود"} {/* متن دکمه براساس وضعیت */}
//       </Button>

//       {/* نمایش مودال تایید */}
//       <CustomModal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         title={modalProps.title} // عنوان مودال
//         description={modalProps.description} // توضیحات مودال
//         confirmText={modalProps.confirmText} // متن دکمه تایید
//         cancelText="بازگشت"
//         onConfirm={handleConfirm} // تایید عملیات
//         onCancel={closeModal} // بستن مودال
//       />
//     </Box>
//   );
// };

// export default EnterExite;
import { Button, Flex, Text, Box } from "@chakra-ui/react";
import React from "react";
import { MdOutlineAccessTime } from "react-icons/md";
import CustomModal from "@/Common/attentionModal/CustomModal";
import useEnterExit from "./useEnterExit";

const EnterExite = () => {
  const {
    operatorSchedule,
    isEntered,
    isModalOpen,
    openModal,
    closeModal,
    handleConfirm,
    modalProps,
  } = useEnterExit();

  return (
    <Box w="100%" maxW="450px" mx="auto" p={{ base: 1, md: 4 }}>
      <Flex direction="column" align="start" mb={2}>
        <Text
          color="#222"
          fontWeight="bold"
          fontSize={{ base: "10px", md: "14px" }}
        >
          اوپراتور شیفت
        </Text>
        <Flex justifyContent="space-between" align="center" w="100%" p={2}>
          <Text color="gray.500" fontSize={{ base: "10px", md: "14px" }}>
            {operatorSchedule?.operator_name || "اوپراتور وجود ندارد"}
          </Text>
          <MdOutlineAccessTime color="gray" size={18} />
        </Flex>
      </Flex>

      <Button
        onClick={() => openModal(isEntered ? "exit" : "enter")}
        border="1px solid #7563DC"
        borderRadius="8px"
        mt={3}
        w="100%"
        minW={{ base: "70px", md: "130px" }}
        fontSize={{ base: "8px", md: "14px" }}
        color="brand.400"
        fontWeight="bold"
        bgColor="transparent"
        _hover={{ bgColor: "purple.50" }}
      >
        {isEntered ? "ثبت خروج" : "ثبت ورود"}
      </Button>

      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalProps.title}
        description={modalProps.description}
        confirmText={modalProps.confirmText}
        cancelText="بازگشت"
        onConfirm={handleConfirm}
        onCancel={closeModal}
      />
    </Box>
  );
};

export default EnterExite;
