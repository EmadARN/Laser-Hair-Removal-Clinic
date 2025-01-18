import { useSelector } from "react-redux";
import {
  Box,
  Flex,
  Step,
  StepDescription,
  StepIndicator,
  Stepper,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { steps } from "@/constants";

const StepperComponent = ({ currentStep }) => {
  return (
    <Flex w="full" mx="auto" py={10} flexDirection="column" alignItems="center">
      <Stepper
        size="lg"
        index={currentStep - 1} // Index بر اساس مرحله
        colorScheme="purple"
        w="95%" // عرض کامل
      >
        {steps.map((step, index) => {
          const StepIcon = step.icon; // آیکون هر استپ
          return (
            <Step key={step.id}>
              <Flex flexDirection="column" alignItems="center">
                
                {/* دایره هر مرحله */}
                <StepIndicator
                  size="10"
                  borderWidth="2px"
                  bg={
                    currentStep > index + 1
                      ? "green.500"
                      : currentStep === index + 1
                      ? "blue.500"
                      : "gray.200"
                  }
                  color="white"
                  borderColor={
                    currentStep > index + 1
                      ? "green.500"
                      : currentStep === index + 1
                      ? "blue.500"
                      : "gray.300"
                  }
                >
                  {currentStep > index + 1 ? (
                    <FaCheck size={18} />
                  ) : (
                    <StepIcon size={18} />
                  )}
                </StepIndicator>

                {/* متن مرحله */}
                <StepDescription
                  mt={2}
                  fontSize={{ base: "10px", md: "md" }}
                  color={currentStep === index + 1 ? "blue.500" : "gray.500"}
                  style={{ whiteSpace: "nowrap" }}
                >
                  {step.description}
                </StepDescription>

                {/* خط اتصال */}
                {index < steps.length - 1 && (
                  <Box
                    h="2px"
                    w="full"
                    bg={currentStep > index + 1 ? "green.500" : "gray.300"}
                    mt={2}
                    sx={{ display: { base: "none", md: "block" } }}
                  />
                )}
              </Flex>
            </Step>
          );
        })}
      </Stepper>
    </Flex>
  );
};

export default StepperComponent;
