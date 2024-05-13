import React, { useEffect, useState } from "react";
import { Grid, Box, Text, Input, Button } from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";

const VerificationCode = () => {
  const [inputCode, setInputCode] = useState(["", "", "", ""]);
  const [close, setClose] = useState(true);
  const [secconds, setSecconds] = useState(5);

  const handleCodeChange = (event, index) => {
    const newcode = [...inputCode];
    newcode[index] = event.target.value;
    setInputCode(newcode);

    if (index < 3) {
      const nextInput = document.querySelector(
        `input[data-index="${index + 1}"]`
      );

      nextInput.focus();
    } else {
      const buttonFocus = document.querySelector("#mybtn");
      buttonFocus.focus();
    }
  };

  useEffect(() => {
    if (secconds > 0) {
      const interval = setInterval(() => {
        setSecconds(secconds - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (secconds === 0) {
      document.getElementById("box").classList.add("display-none");
      document.getElementById("resend-code").classList.remove("display-none");
      document.getElementById("resend-code").classList.add("display-flex");
    }
  }, [secconds]);

  if (close === true) {
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
              <Text flexWrap={"nowrap"} fontSize={{ base: "xs", md: "sm" }}>کد تایید</Text>
            </Box>

            <Box as="button">
              <MdCancel onClick={() => setClose(false)}></MdCancel>
            </Box>
          </Box>

          <Box mb={4}>
            <Text flexWrap={"nowrap"} fontSize={{ base: "xs", md: "md" }}>
              کد تایید به شماره ی ۰۹۱۹۰۹۷۸۰۴۲ارسال شد
            </Text>
          </Box>

          <Box id="box" mb={6}>
            {" "}
            <Text flexWrap={"nowrap"} fontSize={{ base: "xs", md: "md" }}>ارسال مجدد کد تایید در {secconds}</Text>
          </Box>
          <Box id="resend-code" className="display-none" mb={6} as="button">
            <Text flexWrap={"nowrap"} fontSize={{ base: "xs", md: "sm" }}>ارسال مجدد کد؟</Text>
          </Box>

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
                  data-index={index}
                  type="number"
                  maxLength={1}
                  value={value}
                  onChange={(event) => handleCodeChange(event, index)}
                  onFocus={(event) => event.target.select()}
                ></Input>
              </>
            ))}
          </Box>

          <Box w="100%" display="flex" justifyContent="center">
            <Button
              w="90%"
              borderRadius="10px"
              textAlign="center"
              bgColor="#7563DC"
              sx={{
                "&:hover": {
                  bgColor: "#7563DC",
                },
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
