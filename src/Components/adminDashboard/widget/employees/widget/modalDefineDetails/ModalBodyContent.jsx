import React, { useState } from "react";
import {
  FormControl,
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
  const handleClick = () => setShow(!show);
  const [usersForm, setUsersForm] = useState({
    last_date: 0,
    drug_hist: false,
    decease_hist: false,
    doctor: "-",
    offline_number: 0,
  });
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.adminDashboard);
  const addChangeHandler = (e) => {
    const { name, value, type } = e.target;

    setUsersForm((prevForm) => ({
      ...prevForm,
      [name]: type === "radio" ? value : value,
    }));
  };

  const inputFields = inputDataEmployee(usersForm, show, handleClick);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addAsyncUsers({ ...usersForm, token }));
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <Flex alignItems="center" gap={6}>
        {inputFields.slice(0, 2).map((field) => (
          <Box w="100%" key={field.name}>
            <InputField {...field} onChange={addChangeHandler} />
          </Box>
        ))}
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

      {inputFields.slice(2, 8).map((field) => (
        <InputField key={field.name} {...field} onChange={addChangeHandler} />
      ))}

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
      {inputFields.slice(8).map((field) => (
        <InputField key={field.name} {...field} onChange={addChangeHandler} />
      ))}
      <Button sx={{ w: "100%", mt: 8 }} colorScheme="blue" type="submit">
        افزودن
      </Button>
    </form>
  );
};

export default ModalBodyContent;
//{
//   name: "",
//   last_name: "",
//   phone_number: "",
//   user_type: "2",
//   username: "",
//   password: "",
//   national_code: "",
//   address: "",
//   house_number: "",
//   decease_hist: false,
//   drug_hist: false,
//   doctor: "",
//   last_date: "",
//   offline_number: 0,
// },
