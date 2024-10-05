import {
  deleteAsyncUser,
  getAsyncOpratorList,
} from "@/features/adminDashboard/adminDashboardSlice";
import { useCustomToast } from "@/utils/useCustomToast ";
import { Button, ModalCloseButton, Stack } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";

const FooterContent = ({ user, token }) => {
  const dispatch = useDispatch();
  const { showToast } = useCustomToast();

  const handleDelete = async () => {
    try {
      await dispatch(deleteAsyncUser({ id: user.username }));
      showToast({
        title: "کاربر حذف شد.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      showToast({
        title: "خطا در حذف کاربر.",
        description: error.message || "خطای نامشخصی رخ داد.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    // فراخوانی مجدد لیست کاربران
    dispatch(getAsyncOpratorList(token));
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
