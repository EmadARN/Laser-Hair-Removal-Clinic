import {
  deleteAsyncUser,
  getLazerAreas,
} from "@/features/adminDashboard/adminDashboardSlice";
import { useCustomToast } from "@/utils/useCustomToast ";
import { Button, Stack } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";

const FooterContent = ({ item, token }) => {
  const dispatch = useDispatch();
  const { showToast } = useCustomToast();

  const handleDelete = async () => {
    try {
      await dispatch(deleteAsyncUser({ id: item.value, token }));
      showToast({
        title: "ناحیه حذف شد.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      showToast({
        title: "خطا در حذف ناحیه.",
        description: error.message || "خطای نامشخصی رخ داد.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    // فراخوانی مجدد لیست کاربران
    dispatch(getLazerAreas(token));
  };

  return (
    <Stack direction={"row"}>
      <Button colorScheme="red" mr={3} onClick={handleDelete}>
        حذف
      </Button>
      <Button colorScheme="blue" mr={3}>
        لغو
      </Button>
    </Stack>
  );
};

export default FooterContent;
