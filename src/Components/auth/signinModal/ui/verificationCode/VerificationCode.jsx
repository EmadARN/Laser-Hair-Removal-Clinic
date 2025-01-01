import React, { useRef } from "react";
import { Box, Text, Input, Button } from "@chakra-ui/react";
import BodyModal from "./BodyModal";
import { IoIosArrowBack } from "react-icons/io";
import ButtonAccept from "../ButtonAccept";
import { handleCodeChange, handleKeyDown } from "@/utils/confirmPsswordHandler";

const VerificationCode = ({
  phoneNumber,
  inputCode,
  setInputCode,
  time,
  handleBackClick,
  onSubmit,
  loading,
  page
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
      <Box
        mb={4}
        display="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text fontSize={{ base: "xs", md: "sm" }} noOfLines={1}>
            کد تایید
          </Text>
        </Box>

        <Button
          onClick={handleBackClick}
          rightIcon={<IoIosArrowBack size={"13px"} />}
          variant="ghost"
          fontSize={{ base: "xs", md: "xs" }}
        >
          <Text>بازگشت</Text>
        </Button>
      </Box>

      <BodyModal
        handleClick={handleBackClick}
        phoneNumber={phoneNumber}
        time={time}
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
            marginX={2} // فاصله بین ورودی‌ها
            width={{ base: "40px", sm: "60px", md: "70px" }}
          />
        ))}
      </Box>

      <Box w="100%" display="flex" justifyContent="center">
        <ButtonAccept
        page={page}
          value={inputCode.join("")}
          onSubmit={onSubmit}
          loading={loading}
          ref={buttonFocus}
          isDisabled={!isAllFilled}
        />
      </Box>
    </Box>
  );
};

export default VerificationCode;
