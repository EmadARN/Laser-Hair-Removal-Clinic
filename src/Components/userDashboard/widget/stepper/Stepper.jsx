import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Step,
  StepDescription,
  StepIndicator,
  Stepper,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { steps } from "@/constants";

const StepperPrototype = () => {
  // const dispatch = useDispatch();
  const { page, completedSteps } = useSelector((store) => store.steper);

  // const handleNextStep = () => {
  //   if (!completedSteps.includes(page)) {
  //     dispatch(markStepComplete(page)); // مرحله فعلی را به عنوان تکمیل شده علامت‌گذاری می‌کنیم
  //   }
  //   dispatch(nextStep()); // به مرحله بعدی می‌رویم
  // };

  return (
    <Stepper
      orientation={{ base: "vertical", md: "horizontal" }}
      sx={{
        minWidth: { base: "200px", sm: "300px", md: "500px" },
        width: "100%",
        m: "auto",
        pt: 2,
      }}
      size={{ base: "sm", md: "lg" }}
      colorScheme="purple"
      index={page}
    >
      {steps.map((step, index) => {
        const IconComponent = step.icon;
        const isActive = index === page;
        const isComplete = completedSteps.includes(index);

        return (
          <Step key={index}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              <StepIndicator
                transform={isActive ? "scale(1.2)" : "scale(1)"}
                bg={
                  isActive
                    ? "purple.500"
                    : isComplete
                    ? "green.400"
                    : "gray.200"
                }
                color="white"
                transition="transform 0.2s"
              >
                {isComplete ? (
                  <FaCheck size={24} />
                ) : (
                  <IconComponent size={isActive ? 24 : 20} />
                )}
              </StepIndicator>

              <Box
                mt={2}
                textAlign="center"
                fontSize={{ base: "sm", md: "md" }}
                color={isActive ? "purple.500" : "gray.500"}
              >
                <StepDescription>{step.description}</StepDescription>
              </Box>
            </Box>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default StepperPrototype;
