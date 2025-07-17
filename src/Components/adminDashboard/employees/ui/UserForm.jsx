import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import { userInputs } from "@/constants";
import CustomButton from "@/Common/customeButton/CustomeButton";
import TextInput from "../../shared/Inputs";
import UserRoleSection from "./UserRoleSection";
import UsernamePasswordInput from "./UsernamePasswordInput";
import useUserForm from "../logic/useUserForm";

const UserForm = ({ userToEdit, isEdit, token }) => {
  const {
    formData,
    showPassword,
    handleChange,
    handleSubmit,
    setShowPassword,
  } = useUserForm(userToEdit, isEdit, token);

  const renderInputs = (inputs) =>
    inputs.map(({ label, name, placeholder }) => (
      <TextInput
        key={name}
        label={label}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
      />
    ));

  return (
    <form onSubmit={handleSubmit}>
      <Grid  templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
        {renderInputs(userInputs.slice(0, 2))}
      </Grid>

      <Box
        sx={{
          display: "flex",
          flexDirection:
            formData.user_type === "r" ? "column-reverse" : "column",
        }}
      >
        <UserRoleSection
          userType={formData.user_type}
          handleChange={handleChange}
        />

        {formData.user_type !== "r" ? (
          <Grid  pt={4} templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
            {renderInputs(userInputs.slice(2, 4).reverse())}
          </Grid>
        ) : (
          <Box mt={4}>{renderInputs(userInputs.slice(2, 3))}</Box>
        )}
      </Box>

      {formData.user_type === "r" &&
        userInputs
          .slice(3)
          .map(({ label, name, placeholder, isPassword }) => {
        
            return (
              <UsernamePasswordInput
              key={name}
              label={label}
              name={name}
              value={formData[name] || ""}
              placeholder={placeholder}
              isPassword={isPassword}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              handleChange={handleChange}
            />
            )
          
})}

      <CustomButton
        mt={6}
        type="submit"
        display="flex"
        justifyContent="center"
        w="100%"
        colorScheme="blue"
      >
        {isEdit ? "ویرایش کاربر" : "افزودن کاربر"}
      </CustomButton>
    </form>
  );
};

export default UserForm;
