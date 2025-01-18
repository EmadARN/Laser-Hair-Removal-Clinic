import React, { useEffect } from "react";
import RegisterForm from "./ui/RegisterForm";
import { Button, Flex } from "@chakra-ui/react";
import CustomButton from "@/Common/customeButton/CustomeButton";
import { FaLongArrowAltRight } from "react-icons/fa";
import Loading from "@/Common/loading";
import useUserAccount from "./logic/useUserAccount";
import { useDispatch } from "react-redux";

const UserAccount = ({ setSteperState }) => {
  const dispatch = useDispatch();
  const phoneNumber = localStorage.getItem("phoneNumber");
  const {
    inputsData,
    isDisabled,
    drugHistory,
    diseaseHistory,
    filteredForms,
    handleChange,
    handleRadioChange,
    submitHandler,
    loading,
  } = useUserAccount(phoneNumber, setSteperState, dispatch);

  if (loading) return <Loading />;

  return (
    <Flex flexDirection="column" alignItems="center" w="100%">
      <Flex justifyContent="flex-start" w={{ base: "100%", md: "40%" }} mt={6}>
        <Button
          leftIcon={<FaLongArrowAltRight />}
          onClick={() => dispatch(setSteperState(0))}
        >
          بازگشت
        </Button>
      </Flex>
      <RegisterForm
        handleChange={handleChange}
        handleRadioChange={handleRadioChange}
        drugHistory={drugHistory}
        diseaseHistory={diseaseHistory}
        inputsData={inputsData}
        filteredForms={filteredForms}
      />
      <Flex justifyContent="center" p={3} w="100%">
        <CustomButton onClick={submitHandler} isDisabled={isDisabled} w="30%">
          {loading ? (
            <Loading noneHeight="0vh" bg="#fff" h="4px" w="4px" />
          ) : (
            "ویرایش"
          )}
        </CustomButton>
      </Flex>
    </Flex>
  );
};

export default UserAccount;
