import React, { useRef } from "react";
import { Box, Input } from "@chakra-ui/react";
import CustomButton from "@/Common/customeButton/CustomeButton";
import Loading from "@/Common/loading";
import LayoutModal from "./LayoutModal";
import {
  handleCodeChange,
  handleKeyDown,
} from "../../logic/confirmPsswordHandler";

const VerificationCode = ({
  phoneNumber,
  inputCode,
  setInputCode,
  time,
  handleBackClick,
  onSubmit,
  loading,
}) => {
  const nextInput = useRef([]);
  const buttonFocus = useRef();
  const isAllFilled = inputCode.every((value) => value !== "");

  const handleCodeChangeWrapper = (event, index) => {
    handleCodeChange(
      event,
      index,
      nextInput,
      inputCode,
      setInputCode,
      buttonFocus
    );
  };

  const handleKeyDownWrapper = (event, index) => {
    handleKeyDown(event, index, nextInput);
  };

  const handleFocus = (event) => {
    event.target.select();
  };

  return (
    <Box width="100%" h="auto" p={6} display="flex" flexDirection="column">
      <LayoutModal
        handleClick={handleBackClick}
        phoneNumber={phoneNumber}
        time={time}
        handleBackClick={handleBackClick}
      />

      <Box
        display="flex"
        flexDirection="row-reverse"
        mb={6}
        gap={3}
        width="100%"
        justifyContent="space-around"
      >
        {inputCode.map((value, index) => (
          <Input
            key={index}
            textAlign="center"
            type="number"
            maxLength={1}
            value={value}
            ref={(el) => (nextInput.current[index] = el)}
            onChange={(event) => handleCodeChangeWrapper(event, index)}
            onKeyDown={(event) => handleKeyDownWrapper(event, index)}
            onFocus={handleFocus}
            width={{ base: "40px", sm: "50px", md: "60px", lg: "70px" }}
            height={{ base: "40px", sm: "50px" }}
            fontSize={{ base: "15px", md: "18px" }}
            borderRadius="8px"
            border="1px solid #ccc"
          />
        ))}
      </Box>

      <Box w="100%" display="flex" justifyContent="center">
        <CustomButton
          value={inputCode.join("")}
          onClick={onSubmit}
          ref={buttonFocus}
          isDisabled={!isAllFilled}
        >
          {loading ? (
            <Loading noneHeight="0vh" bg="#fff" h="8px" w="8px" />
          ) : (
            "ادامه"
          )}
        </CustomButton>
      </Box>
    </Box>
  );
};

export default VerificationCode;
