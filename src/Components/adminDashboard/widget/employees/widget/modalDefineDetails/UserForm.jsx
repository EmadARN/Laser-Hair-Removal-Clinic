import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  RadioGroup,
  Stack,
  Radio,
  InputLeftElement,
  InputGroup,
  Grid,
  Spinner,
} from "@chakra-ui/react";
import {
  addAsyncUsers,
  editAsyncUser,
  getAsyncOpratorList,
} from "@/features/adminDashboard/adminDashboardSlice";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const UserForm = ({ userToEdit, isEdit, token }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.adminDashboard);

  const [formData, setFormData] = React.useState({
    name: "",
    last_name: "",
    phone_number: "",
    user_type: "r",
    username: "",
    password: "",
    national_code: "",
    address: "",
    house_number: "",
    last_date: 0,
    drug_hist: false,
    decease_hist: false,
    doctor: "-",
    offline_number: 0,
  });
  const [showPassword, setShowPassword] = React.useState(false);

  useEffect(() => {
    if (isEdit && userToEdit) {
      setFormData({
        name: userToEdit.name,
        last_name: userToEdit.last_name,
        phone_number: userToEdit.phone_number,
        user_type: userToEdit.user_type,
        username: userToEdit.username,
        password: userToEdit.password,
      });
    }
  }, [isEdit, userToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEdit) {
      await dispatch(
        editAsyncUser({ id: formData.username, ...formData, token })
      );
    } else {
      await dispatch(addAsyncUsers({ ...formData, token }));
    }

    // فراخوانی مجدد لیست کاربران
    dispatch(getAsyncOpratorList(token));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
        <FormControl>
          <FormLabel>نام</FormLabel>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="نام"
          />
        </FormControl>
        <FormControl>
          <FormLabel>نام خانوادگی</FormLabel>
          <Input
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="نام خانوادگی"
          />
        </FormControl>
      </Grid>

      <FormControl mt={4}>
        <FormLabel>شماره موبایل</FormLabel>
        <Input
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          placeholder="شماره موبایل"
        />
      </FormControl>

      <Text pt={6} fontWeight="bold">
        نقش
      </Text>
      <RadioGroup
        name="role"
        value={formData.user_type}
        onChange={(value) =>
          setFormData((prev) => ({ ...prev, user_type: value }))
        }
      >
        <Stack spacing={5} direction="row">
          <Radio value="r">منشی</Radio>
          <Radio value="o">اوپراتور</Radio>
        </Stack>
      </RadioGroup>

      <FormControl mt={4}>
        <FormLabel>نام کاربری</FormLabel>
        <Input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="نام کاربری"
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>رمز ورود</FormLabel>
        <InputGroup size="lg">
          <Input
            padding={4}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="رمز ورود"
            value={formData.password}
            onChange={handleChange}
          />
          <InputLeftElement>
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setShowPassword((prev) => !prev)}
              variant="text"
            >
              {showPassword ? (
                <IoEyeOutline size={18} />
              ) : (
                <FaRegEyeSlash size={18} />
              )}
            </Button>
          </InputLeftElement>
        </InputGroup>
      </FormControl>

      <Button
        mt={6}
        sx={{ display: "flex", justifyContent: "center" }}
        w={{ base: "100%", md: "95%" }}
        colorScheme="blue"
        type="submit"
        isLoading={loading}
      >
        {isEdit ? "ویرایش کاربر" : "افزودن کاربر"}
      </Button>

      {loading && <Spinner size="sm" mt={4} />}
    </form>
  );
};

export default UserForm;
