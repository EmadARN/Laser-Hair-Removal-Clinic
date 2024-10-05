import React from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Text,
  RadioGroup,
  Stack,
  Radio,
  InputGroup,
  InputLeftElement,
  Grid,
  Spinner,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import useUserForm from "@/hooks/useUserForm";
import TextInput from "./Inputs";
import { userInputs } from "@/constants";

const UserForm = ({ userToEdit, isEdit, token }) => {
  const { loading } = useSelector((state) => state.adminDashboard);
  const {
    formData,
    showPassword,
    handleChange,
    handleSubmit,
    setShowPassword,
  } = useUserForm(userToEdit, isEdit, token);

  const renderInputs = (inputs) => {
    return inputs.map(({ label, name, placeholder }) => (
      <TextInput
        key={name}
        label={label}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
      />
    ));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
        {renderInputs(userInputs.slice(0, 2))}
      </Grid>
      {renderInputs(userInputs.slice(2, 3))}
      <Text pt={6} fontWeight="bold">
        نقش
      </Text>
      <RadioGroup
        name="role"
        value={formData.user_type}
        onChange={(value) =>
          handleChange({ target: { name: "user_type", value } })
        }
      >
        <Stack spacing={5} direction="row">
          <Radio value="r">منشی</Radio>
          <Radio value="o">اوپراتور</Radio>
        </Stack>
      </RadioGroup>

      {userInputs.slice(3).map(({ label, name, placeholder, isPassword }) => (
        <FormControl mt={4} key={name}>
          <FormLabel>{label}</FormLabel>
          <InputGroup size="lg">
            <Input
              padding={4}
              name={name}
              type={isPassword && !showPassword ? "password" : "text"}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
            />
            {isPassword && (
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
            )}
          </InputGroup>
        </FormControl>
      ))}

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
