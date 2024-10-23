import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
  Button,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import RenderOperators from "./RenderOperators";

const ModalLayout = ({
  isOpen,
  onClose,
  editing,
  existingName,
  onClear,
  operator_list,
  onSelect,
}) => {
  const router = useRouter();

  const handleAddOperator = () => {
    router.push("/adminDashboard/employee");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent
        borderRadius="md"
        boxShadow="lg"
        maxWidth="300px"
        minHeight="400px"
      >
        <ModalBody>
          <VStack spacing={4} align="stretch" pt={2}>
            {editing && existingName && (
              <Flex fontWeight="bold" fontSize="lg" color="gray.700" pb={4}>
                نام فعلی:
                <Text color="gray.500" pr={2}>
                  {existingName}
                </Text>
              </Flex>
            )}
            <RenderOperators operator_list={operator_list} onSelect={onSelect} />
          </VStack>
          {editing && existingName && (
            <Button
              mt={4}
              colorScheme="red"
              onClick={onClear}
              width="100%"
              variant="outline"
              borderRadius="md"
              padding={4}
              fontSize="lg"
            >
              حذف
            </Button>
          )}
        </ModalBody>
        <Flex justifyContent="center">
          <Button
            colorScheme="blue"
            onClick={handleAddOperator}
            width="84%"
            variant="outline"
            borderRadius="md"
            padding={4}
            fontSize="lg"
            position="absolute"
            bottom={4}
          >
            افزودن اپراتور
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalLayout;
