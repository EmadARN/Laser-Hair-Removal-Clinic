import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

const RadioControl = ({ label, value, handleChange, name }) => {
  return (
    <FormControl as="fieldset" flex="1 1 200px" mb={4}>
      <FormLabel as="legend">{label}</FormLabel>
      <RadioGroup value={value} onChange={(value) => handleChange(name, value)}>
        <Stack direction="row">
          <Radio value="true">دارد</Radio>
          <Radio value="false">ندارد</Radio>
        </Stack>
      </RadioGroup>
    </FormControl>
  );
};

export default RadioControl;
