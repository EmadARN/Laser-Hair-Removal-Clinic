import React, { useEffect, useRef, useState } from "react";
import { Grid, Box, Text, Input, Button } from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import BodyModal from "./BodyModal";

const VerificationCode = () => {
  const [inputCode, setInputCode] = useState(["", "", "", ""]);
  const [close, setClose] = useState(true);
  const nextInput = useRef([]);
  const buttonFocus = useRef();

  const handleCodeChange = (event, index) => {
    const newcode = [...inputCode];
    newcode[index] = event.target.value;
    setInputCode(newcode);

    if (index < 3) {
      nextInput.current[index + 1].focus();
    } else {
      buttonFocus.current.focus();
    }
  };
  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace") {
      if (index > 0) {
        setTimeout(() => {
          nextInput.current[index - 1].focus();
        }, 1); // زمان تأخیر را به میلی ثانیه تنظیم کنید
      } else if (index === 0) {
        nextInput.current[index].value = "";
        event.preventDefault();
      }
    }
  };

  if (close) {
    return (
      <Grid
        w="100%"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        h="100vh"
      >
        <Box
          sx={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
          width={{ base: "auto", sm: "60%", md: "30%" }}
          h="auto"
          bgColor="#fff"
          borderRadius="10px"
          p={6}
          display="flex"
          flexDirection="column"
        >
          <Box mb={4} display="flex" w="100%" justifyContent="space-between">
            <Box>
              <Text flexWrap={"nowrap"} fontSize={{ base: "xs", md: "sm" }}>
                کد تایید
              </Text>
            </Box>

            <Box as="button">
              <MdCancel onClick={() => setClose(false)}></MdCancel>
            </Box>
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
                  textAlign="center"
                  width="15%"
                  key={index}
                  type="number"
                  maxLength={1}
                  value={value}
                  ref={(el) => (nextInput.current[index] = el)}
                  onChange={(event) => handleCodeChange(event, index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  onFocus={(event) => event.target.select()}
                ></Input>
              </>
            ))}
          </Box>

          <Box w="100%" display="flex" justifyContent="center">
            <Button
              ref={buttonFocus}
              w="90%"
              borderRadius="10px"
              textAlign="center"
              bgColor="#7563DC"
              color="purple.50"
              _hover={{
                bgColor: "purple.100",
                color: "purple.500",
              }}
              id="mybtn"
            >
              ادامه
            </Button>
          </Box>
        </Box>
      </Grid>
    );
  } else {
    null;
  }
};

export default VerificationCode;
