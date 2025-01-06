import React from "react";
import { Text, RadioGroup, Stack, Radio, Box } from "@chakra-ui/react";

const UserRoleSection = ({ userType, handleChange }) => (
  <Box>
    <Text pt={6} fontWeight="bold">
      نقش
    </Text>
    <RadioGroup
      name="role"
      value={userType}
      onChange={(value) =>
        handleChange({ target: { name: "user_type", value } })
      }
    >
      <Stack spacing={5} direction="row">
        <Radio value="r">منشی</Radio>
        <Radio value="o">اوپراتور</Radio>
      </Stack>
    </RadioGroup>
  </Box>
);
export default UserRoleSection;
