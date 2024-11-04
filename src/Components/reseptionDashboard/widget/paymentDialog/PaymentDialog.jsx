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
import { secBox } from "../LaserAreas/style";
import LazerAreas from "../LaserAreas/LaserAreas";
import { FaArrowRight } from "react-icons/fa";
import CustomPayment from "../customPayment/CustomPayment";

const PaymentDialog = ({ isOpen, onClose, reserve }) => {
  const [discountCode, setDiscountCode] = useState(""); // مدیریت حالت کد تخفیف
  const [step, setStep] = useState(0);

  const mdCancelHandler = () => {
    setStep(0);

    onClose();
  };

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
            {step === 0 ? (
              "پرداخت"
            ) : step ===1 ? (
              <Box sx={secBox}>
                <FaArrowRight
                  onClick={() => setStep(step - 1)}
                  cursor={"pointer"}
                  fontSize={"17px"}
                />
                <Text mr={3} fontSize={"17px"} fontWeight={"bold"}>
                  {" "}
                  انتخاب نواحی
                </Text>
              </Box>
            ):  <Box sx={secBox}>
            <FaArrowRight
              onClick={() => setStep(step - 1)}
              cursor={"pointer"}
              fontSize={"17px"}
            />
            <Text mr={3} fontSize={"17px"} fontWeight={"bold"}>
              {" "}
       پرداخت به چند روش
            </Text>
          </Box>}
          </Text>
          <MdCancel
            cursor="pointer"
            onClick={mdCancelHandler}
            fontSize={{ base: "20px", md: "24px" }}
          />
        </Flex>

        {/* Information Section */}

        {step === 0 ? (
          <>
            <Box
              width="100%"
              p={2}
              display="flex"
              flexDirection="column"
              gap={3}
            >
              <InformationBox
                title="نام و نام خانوادگی"
                value={reserve.user || ""}
              />
              <InformationBox
                title="زمان نوبت"
                value={extractTime(reserve.reserve_time_str) || ""}
              />
              <InformationBox
                setStep={setStep}
                step={step}
                title="ناحیه لیزر"
                value={reserve.laser_area_name || ""}
              />
            </Box>

            {/* Payment Method Section */}
            <Box mt={3} width="100%" p={2}>
              <PaymentMethodSection  setStep={setStep} step={step}/>
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
          </>
        ) : step ===1 ? (
          <LazerAreas onClose={onClose} setStep={setStep} />
        ) :step ===2 ? <CustomPayment/> :null}
      </ModalContent>
    </Modal>
  );
};

export default PaymentDialog;
