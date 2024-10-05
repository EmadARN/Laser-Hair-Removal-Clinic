import { deleteAsyncUser } from "@/features/adminDashboard/adminDashboardSlice";
import { Button, Stack, useToast } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";

const FooterContent = ({ users }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDelete = async () => {
    try {
      await dispatch(deleteAsyncUser({ id: users.username })).unwrap();
      toast({
        title: "کاربر حذف شد.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "خطا در حذف کاربر.",
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
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
