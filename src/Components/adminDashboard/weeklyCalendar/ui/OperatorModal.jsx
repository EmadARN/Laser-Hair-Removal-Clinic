import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";

const OperatorModal = ({
  isOpen,
  onClose,
  operators,
  handleOperatorSelect,
  program_list,
  selectedCell,
  handleDeleteOperator, // اضافه کردن تابع حذف از والد
}) => {
  const router=useRouter()
  // بررسی اینکه سلول انتخاب‌شده اپراتور دارد یا خیر
  const checkOperatorInCell = () => {
    if (selectedCell && program_list[selectedCell.index]) {
      return program_list[selectedCell.index].operator ? true : false;
    }
    return false;
  };

  // رندر دکمه حذف فقط در صورتی که اپراتور موجود باشد
  const deleteBtn = checkOperatorInCell() ? (
    <Button color="red.500" onClick={handleDeleteOperator}>
      حذف
    </Button>
  ) : null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Box p={5} display="flex" justifyContent="space-between" width="100%">
          <Text>انتخاب اپراتور</Text>
          <MdCancel onClick={onClose} />
        </Box>

        <ModalBody>
          <VStack align="start" spacing={3}>
            {/* لیست اپراتورها */}
            {operators?.operator_list?.length ? (
              operators.operator_list.map((operator, index) => (
                <Button
                  key={index}
                  variant="outline"
                  width="100%"
                  justifyContent="flex-start"
                  onClick={() => handleOperatorSelect(operator)}
                >
                  {operator.name} {operator.last_name}
                </Button>
              ))
            ) : (
              <Text>اپراتوری یافت نشد</Text>
            )}

            {/* دکمه‌های اضافی */}
            <Flex justifyContent="space-between" width="100%" mt={4}>
              {deleteBtn} {/* نمایش دکمه حذف فقط در صورت وجود اپراتور */}
              <Button
                onClick={() => router.push("/adminDashboard/employee")}
                display="flex"
                flexGrow="1"
                mb={2}
              >
                افزودن اپراتور
              </Button>
            </Flex>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default OperatorModal;
