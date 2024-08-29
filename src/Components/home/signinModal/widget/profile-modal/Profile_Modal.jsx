import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { postAsyncNumber } from "@/features/signin/signinSlice";
import ButtonAccept from "../ButtonAccept";
import * as Yup from "yup";
import { useFormik } from "formik/dist";

//  initial values
const initialValues = {
  phone_number: "",
};
//  validation schema
const validationSchema = Yup.object({
  phone_number: Yup.string()
    .required("شماره موبایل را وارد کنید")
    .matches(/^[0-9]{11}$/, "شماره موبایل باید 11 رقم باشد")
    .nullable(),
});
export default function Profile_Modal({ onClose, isOpen, setPage, page }) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.signin);

  const onSubmit = (values) => {
    console.log(values);
    const { phone_number } = values;
    dispatch(postAsyncNumber({ phone_number }));
    setPage(page + 1);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return page === 0 ? (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent w={80}>
        <Box p={5} display="flex" justifyContent="space-between" width="100%">
          <Text>ورود/ثبت نام</Text>
          <MdCancel size={"24px"} cursor={"pointer"} onClick={onClose} />
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
          <ButtonAccept
            value={formik.values.phone_number}
            onSubmit={formik.handleSubmit}
            loading={loading}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  ) : null;
}
