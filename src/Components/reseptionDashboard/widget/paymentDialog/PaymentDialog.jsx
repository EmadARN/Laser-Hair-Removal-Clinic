import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  Input,
} from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import InformationBox from "./widget/InformationBox";
import PaymentMethodSection from "./widget/PaymentMethodSection";
import ConfitmTransaction from "./widget/ConfitmTransaction";
import { extractTime } from "@/utils/extractTime";

const PaymentDialog = ({ isOpen, onClose, reserve }) => {
  const [discountCode, setDiscountCode] = useState(""); // مدیریت حالت کد تخفیف

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        p={{ base: 3, md: 5 }}
        maxW={{ base: "90%", md: "500px" }}
        maxH="100vh" // حداکثر ارتفاع برای مودال
        overflowY="auto"
      >
        {/* Header Section */}
        <Flex
          mb={4}
          p={2}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }}>
            پرداخت
          </Text>
          <MdCancel
            cursor="pointer"
            onClick={onClose}
            fontSize={{ base: "20px", md: "24px" }}
          />
        </Flex>

        {/* Information Section */}
        <Box width="100%" p={2} display="flex" flexDirection="column" gap={3}>
          <InformationBox
            title="نام و نام خانوادگی"
            value={reserve.user || ""}
          />
          <InformationBox
            title="زمان نوبت"
            value={extractTime(reserve.reserve_time_str) || ""}
          />
          <InformationBox
            title="ناحیه لیزر"
            value={reserve.laser_area_name || ""}
          />
        </Box>

        {/* Payment Method Section */}
        <Box mt={3} width="100%" p={2}>
          <PaymentMethodSection />
        </Box>

        {/* Discount Code Section */}
        <Box mt={4} width="100%" p={2}>
          <Flex gap={2}>
            <Input
              placeholder="کد تخفیف "
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              size={{ base: "sm", md: "md" }}
              flexBasis="50%"
            />
          </Flex>
        </Box>

        {/* Confirm Transaction Section */}
        <Box mt={4} width="100%">
          <ConfitmTransaction reserve={reserve} />
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default PaymentDialog;
