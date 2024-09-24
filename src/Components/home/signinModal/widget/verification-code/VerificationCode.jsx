import React, { useRef, useState } from "react";
import { Box, Text, Input, Button } from "@chakra-ui/react";
import BodyModal from "./BodyModal";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { postAsyncCode } from "@/features/signin/signinSlice";
import { handleCodeChange, handleKeyDown } from "@/utils/confirmPsswordHandler";
import ButtonAccept from "../ButtonAccept";
const VerificationCode = ({ setPage, page }) => {
  const [inputCode, setInputCode] = useState(["", "", "", "", "", ""]);
  const [codeValue, setCodeValue] = useState("");
  const nextInput = useRef([]);
  const buttonFocus = useRef();
  const dispatch = useDispatch();
  const router = useRouter();
  const { phone_number, loading } = useSelector((state) => state.signin);

  // کد برگشتن به مرحه ی عقب برای عوش کردن شماره هممراه
  const handleClick = () => {
    setPage(page - 1);
  };
  const onSubmit = () => {
    setCodeValue(inputCode.toString().split(",").join(""));
    if (!codeValue) return;
    dispatch(
      postAsyncCode({
        phone_number: phone_number.toString(),
        code: codeValue,
      })
    );
    document.body.style.overflow = "scroll";
    setCodeValue("");
    router.push("/userDashboard");
  };

  return (
    <Box
      sx={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
      width={{ base: "100%", sm: "60%", md: "50%", lg: "30%" }}
      h="auto"
      bgColor="#fff"
      borderRadius="10px"
      p={6}
      display="flex"
      flexDirection="column"
    >
      <Box
        mb={4}
        display="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text flexWrap={"nowrap"} fontSize={{ base: "xs", md: "sm" }}>
            کد تایید
          </Text>
        </Box>

        <Button
          onClick={handleClick}
          rightIcon={<IoIosArrowBack size={"13px"} />}
        >
          <Text fontSize={{ base: "xs", md: "xs" }}>بازگشت</Text>
        </Button>
      </Box>
      <BodyModal />
      <Box
        display="flex"
        flexDirection="row-reverse"
        mb={6}
        width="100%"
        justifyContent="space-around"
      >
        {inputCode.map((value, index) => (
          <>
            <Input
              m={2}
              textAlign="center"
              width="auto"
              key={index}
              type="number"
              maxLength={1}
              value={value}
              ref={(el) => (nextInput.current[index] = el)}
              onChange={(event) =>
                handleCodeChange(
                  event,
                  index,
                  nextInput,
                  inputCode,
                  setInputCode,
                  buttonFocus
                )
              }
              onKeyDown={(event) => handleKeyDown(event, index, nextInput)}
              onFocus={(event) => event.target.select()}
            ></Input>
          </>
        ))}
      </Box>

      <Box w="100%" display="flex" justifyContent="center">
        <ButtonAccept
          value={codeValue}
          onSubmit={onSubmit}
          loading={loading}
          ref={buttonFocus}
        />
      </Box>
    </Box>
  );
};

export default VerificationCode;
