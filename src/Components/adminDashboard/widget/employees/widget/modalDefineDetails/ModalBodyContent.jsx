import React, { useState } from "react";
import {
  Box,
  Flex,
  Button,
  Stack,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import InputField from "./widget/InputField";
import RadioButtonGroup from "./widget/RadioButtonGroup";
import { addAsyncUsers } from "@/features/adminDashboard/adminDashboardSlice";
import { inputDataEmployee, radioOptions } from "@/constants";
import { useDispatch, useSelector } from "react-redux";

const ModalBodyContent = () => {
  const [show, setShow] = useState(false);
  const [usersForm, setUsersForm] = useState({
    last_date: 0,
    drug_hist: false,
    decease_hist: false,
    doctor: "-",
    offline_number: 0,
  });
  const dispatch = useDispatch();
const {token} = useSelector((store)=>store.adminDashboard)
  const addChangeHandler = (e) => {
    const { name, value, type } = e.target;
    setUsersForm((prevForm) => ({
      ...prevForm,
      [name]: type === "radio" ? value : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(addAsyncUsers({ ...usersForm ,token}));

    if (result.meta.requestStatus === "fulfilled") {
      const receivedToken = result.payload.token;
      console.log("receivedToken::", receivedToken);

      if (receivedToken) {
        setCookie("auth_Admin_token", receivedToken, {
          path: "/",
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex alignItems="center" gap={6}>
        {renderInputFields(inputDataEmployee(usersForm, show))}
      </Flex>

      <Text pb={4} fontWeight="bold">
        نقش
      </Text>
      <RadioGroup
        onChange={(value) =>
          addChangeHandler({
            target: { name: "user_type", value, type: "radio" },
          })
        }
        name="user_type"
        defaultValue="منشی"
      >
        <Stack spacing={20} direction="row">
          <Radio colorScheme="blue" value="o">
            اوپراتور
          </Radio>
          <Radio colorScheme="blue" value="r">
            منشی
          </Radio>
        </Stack>
      </RadioGroup>

      <Text pb={4} fontWeight="bold">
        تاریخ و اطلاعات پزشکی
      </Text>
      <RadioButtonGroup
        label="بیماری خاص"
        name="decease_hist"
        options={radioOptions.decease_hist}
        onChange={addChangeHandler}
        defaultValue="false"
      />
      <RadioButtonGroup
        label="مصرف دارو"
        name="drug_hist"
        options={radioOptions.drug_hist}
        onChange={addChangeHandler}
        defaultValue="false"
      />

      <Button sx={{ w: "100%", mt: 8 }} colorScheme="blue" type="submit">
        افزودن
      </Button>
    </form>
  );
};

export default ModalBodyContent;
