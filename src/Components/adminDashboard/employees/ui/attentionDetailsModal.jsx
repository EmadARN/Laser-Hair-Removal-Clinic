import React from "react";
import { useDispatch } from "react-redux";
import { Button, Stack, Text } from "@chakra-ui/react";
import {
  deleteAsyncUser,
  getAsyncUsersList,
} from "@/features/adminDashboard/adminThunks";
import { useCustomToast } from "@/utils/useCustomToast ";

// HeaderContent
export const HeaderContent = () => <Text>حذف کاربر</Text>;

// BodyContent
export const BodyContent = () => (
  <>
    <Text>آیا از حذف این کاربر مطمئنید؟</Text>
  </>
);

// FooterContent
export const FooterContent = ({ user, token }) => {
  const dispatch = useDispatch();
  const { showToast } = useCustomToast();

  const handleDelete = async () => {
    try {
      const response = await dispatch(
        deleteAsyncUser({ token, id: user.username })
      );

      if (response.meta.requestStatus === "fulfilled") {
        showToast({
          title: "کاربر با موفقیت حذف شد.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        dispatch(getAsyncUsersList({ token }));
      } else if (response.meta.requestStatus === "rejected") {
        showToast({
          title: "امکان حذف این کاربر وجود ندارد.",
          description: response.payload || "کاربر حذف نشد.",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      showToast({
        title: "خطا در حذف کاربر.",
        description: error.message || "خطای نامشخصی رخ داد.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack direction="row">
      <Button colorScheme="red" onClick={handleDelete}>
        حذف
      </Button>
    </Stack>
  );
};

