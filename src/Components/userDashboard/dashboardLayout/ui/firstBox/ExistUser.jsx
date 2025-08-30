import React from "react";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import SectionTitle from "@/Common/sectionTitle";
import { UserData } from "@/constants";
import { getReserveStatus } from "@/Components/userDashboard/utils/ReserveStatus";
import { extractDate, extractTime } from "@/utils/extractDate";
import CustomModal from "@/Common/attentionModal/CustomModal";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { cancelReserve } from "@/features/customerDashboard/customerThunks";
import { useCustomToast } from "@/utils/useCustomToast ";
import { useRouter } from "next/router";
import { toPersianDigits } from "@/utils/toPersianDigits";
import { formatNumber } from "@/utils/formatNumber";

const formatReserveData = (item, sessionRecords, operatorName) => {
  switch (item.title) {
    case "تاریخ":
      return toPersianDigits(
        extractDate(sessionRecords?.last_reserve?.reserve_time_str)
      );
    case "زمان":
      return toPersianDigits(
        extractTime(sessionRecords?.last_reserve?.reserve_time_str)
      );
    case "اپراتور":
      return operatorName;
    case "نام ناحیه":
      return sessionRecords?.last_reserve?.laser_area_name;
    case "مبلغ کل":
      return `${toPersianDigits(
        formatNumber(sessionRecords?.last_reserve?.total_price_amount)
      )} تومان`;
    default:
      return "";
  }
};

const ReserveInfoRow = ({ title, value, color }) => (
  <Flex justifyContent="space-between" p={2} w="100%">
    <Text color="#999" fontSize={{ base: "13px", md: "14px" }}>
      {title}
    </Text>
    <Text
      fontWeight="bold"
      fontSize={{ base: "13px", md: "14px" }}
      color={color}
    >
      {value}
    </Text>
  </Flex>
);

const ExistUser = ({
  sessionRecords,
  operatorName,
  loading,
  reserveCompelete,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cookies] = useCookies(["auth_token"]);
  const { showToast } = useCustomToast();
  const router = useRouter();
  const tokenAuth = cookies.auth_token;
  const dispatch = useDispatch();

  const handleConfirmCancel = async () => {
    const result = await dispatch(
      cancelReserve({
        reserve: sessionRecords.last_reserve.id,
        cancel_type: "sc",
        sms_status: "جلسه لیزر شما لغو شد",
        tokenAuth,
      })
    );

    if (result.meta.requestStatus === "fulfilled") {
      showToast({ title: "لغو با موفقیت انجام شد", status: "success" });
      router.reload();
      onClose();
    } else {
      showToast({
        title: " خطای ناشناخته ای رخ داده است   ",
        status: "error",
      });
    }
  };
  return (
    <Flex
      borderRadius="10px"
      bgColor="white"
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        h="auto"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        width="100%"
        p={4}
      >
        <SectionTitle section_title="نوبت بعدی شما" />
        <ReserveInfoRow
          title="وضعیت"
          value={getReserveStatus(
            reserveCompelete ? "co" : sessionRecords?.last_reserve?.reserve_type
          )}
          color={
            sessionRecords?.last_reserve?.reserve_type === "sc"
              ? "red"
              : "green"
          }
        />
        {UserData.map((item) => (
          <ReserveInfoRow
            key={item.id}
            title={item.title}
            value={formatReserveData(item, sessionRecords, operatorName)}
          />
        ))}
        <Box mt={3} display="flex" justifyContent="center" width="100%">
          <Button
            bgColor="#f50d0d19"
            color="#a5a5a5ff"
            _hover={{ bgColor: "#ff000028" }}
            borderRadius="7px"
            onClick={onOpen}
            width="95%"
          >
            لغو نوبت
          </Button>
        </Box>
      </Box>
      {isOpen && (
        <CustomModal
          isOpen={isOpen}
          onClose={onClose}
          title="لغو نوبت"
          description="آیا از لغو این نوبت مطمئن هستید؟"
          confirmText="لغو"
          cancelText="بازگشت"
          onConfirm={handleConfirmCancel}
          onCancel={onClose}
          loading={loading}
        />
      )}
    </Flex>
  );
};

export default ExistUser;
