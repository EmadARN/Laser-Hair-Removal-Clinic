import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Box,
  Text,
} from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import * as Yup from "yup";
import { useFormik } from "formik/dist";
import { useRouter } from "next/router";
import CustomButton from "@/Common/customeButton/CustomeButton";
import Loading from "@/Common/loading";

// validation schema
const validationSchema = Yup.object({
  phone_number: Yup.string()
    .required("شماره موبایل را وارد کنید")
    .matches(/^[0-9]{11}$/, "شماره موبایل باید 11 رقم باشد")
    .nullable(),
});

// initial values
const initialValues = {
  phone_number: "",
};

export default function VerificationNumber({
  onClose,
  isOpen,
  loading,
  onSubmit,
}) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  const router = useRouter();

  const closeModalHandler = () => {
    onClose();
    router.push("/");
  };

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      // onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent w={80}>
        <Box p={5} display="flex" justifyContent="space-between" width="100%">
          <Text>ورود/ثبت نام</Text>
          <MdCancel
            size={"24px"}
            cursor={"pointer"}
            onClick={closeModalHandler} // برای بستن مودال
          />
        </Box>

        <ModalBody pb={6}>
          <Text
            mb={5}
            fontSize={{ base: "sm", sm: "md", md: "md" }}
            color="#888"
            fontWeight="300"
          >
            جهت رزور نوبت لطفا ابتدا وارد حساب خود شوید و یا ثبت نام کنید.
          </Text>

          <FormControl mt={4}>
            <FormLabel color="#888">
              {formik.touched.phone_number && formik.errors.phone_number
                ? formik.errors.phone_number
                : "شماره موبایل "}
            </FormLabel>
            <Input
              {...formik.getFieldProps("phone_number")} // spread formik props
            />
          </FormControl>
        </ModalBody>

        <ModalFooter display="flex" justifyContent="center" width="100%">
          <CustomButton
            value={formik.values.phone_number}
            onClick={formik.handleSubmit}
          >
            {loading ? (
              <Loading noneHeight="0vh" bg="#fff" h="8px" w="8px" />
            ) : (
              "ادامه"
            )}
          </CustomButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
