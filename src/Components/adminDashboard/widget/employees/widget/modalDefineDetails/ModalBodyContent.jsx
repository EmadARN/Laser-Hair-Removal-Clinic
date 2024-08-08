import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Stack,
  Radio,
  Box,
  Text,
  Flex,
  InputGroup,
  Button,
  InputLeftElement,
} from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
const ModalBodyContent = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <FormControl>
        <Flex alignItems={"center"} gap={6}>
          <Box
            sx={{
              w: "85px",
              h: "75px",
              bgColor: "#1111",
              borderRadius: "4px",
            }}
          >
            <Flex
              sx={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                h: "100%",
              }}
            >
              <LuImagePlus />
              <Text sx={{ fontSize: { base: "8px", md: "10px" } }}>
                آپلود تصویر
              </Text>
            </Flex>
          </Box>
          <Box w={"100%"}>
            <FormLabel>نام و نام خانوادگی</FormLabel>
            <Input size="lg" placeholder="نام و نام خانوادگی" />
            {/* ref={initialRef} */}
          </Box>
        </Flex>
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>شماره موبایل</FormLabel>
        <Input size="lg" placeholder="شماره موبایل" />
      </FormControl>
      <Box pt={6}>
        <Text pb={4} fontWeight="bold">
          نقش
        </Text>
        <RadioGroup defaultValue="2">
          <Stack spacing={20} direction="row">
            <Radio colorScheme="blue" value="1">
              اوپراتور
            </Radio>
            <Radio colorScheme="blue" value="2">
              منشی
            </Radio>
          </Stack>
        </RadioGroup>
        <FormControl mt={8}>
          <FormLabel>نام کاربری منشی (به انگلیسی)</FormLabel>
          <Input size="lg" placeholder="نام کاربری" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>رمز ورود منشی</FormLabel>
          <InputGroup size="lg">
            <Input
              type={show ? "text" : "password"}
              placeholder="رمز ورود منشی"
              sx={{ px: 4 }}
            />

            <InputLeftElement>
              <Button
                h="1.75rem"
                size="sm"
                onClick={handleClick}
                variant={"text"}
              >
                {!show ? (
                  <FaRegEyeSlash size={18} />
                ) : (
                  <IoEyeOutline size={18} />
                )}
              </Button>
            </InputLeftElement>
          </InputGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default ModalBodyContent;
