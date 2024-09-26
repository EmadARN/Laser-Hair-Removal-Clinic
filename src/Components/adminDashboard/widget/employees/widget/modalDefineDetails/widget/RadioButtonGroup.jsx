import { RadioGroup, Stack, Radio, Box, Text } from "@chakra-ui/react";

const RadioButtonGroup = ({ label, name, options, onChange, defaultValue }) => (
  <Box my={7}>
    <Text pb={4} fontWeight="bold">
      {label}
    </Text>
    <RadioGroup
      onChange={(value) =>
        onChange({ target: { name, value: value === "true", type: "radio" } })
      } // تبدیل به Boolean
      defaultValue={defaultValue.toString()} // تبدیل به رشته
    >
      <Stack spacing={20} direction="row">
        {options.map((option) => (
          <Radio
            key={option.value}
            colorScheme="blue"
            value={option.value.toString()}
          >
            {/* تبدیل به رشته */}
            {option.label}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  </Box>
);

export default RadioButtonGroup;
