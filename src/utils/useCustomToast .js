import { useToast } from "@chakra-ui/react";

export const useCustomToast = () => {
  const toast = useToast();

  const showToast = ({ title, description, status }) => {
    toast({
      title,
      description,
      status,
      duration: 3000,
      isClosable: false,
      position: "top-right",
    });
  };

  return { showToast };
};
