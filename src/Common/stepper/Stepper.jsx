import {
  Box,
  Step,
  StepDescription,
  StepIndicator,
  StepStatus,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

const steps = [
  { description: "انتخاب نواحی" },
  { description: "تاریخ و ساعت " },
  { description: "اطلاعات مراجع" },
  { description: "تایید و پرداخت " },
];

const StepperPrototype = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Stepper
      sx={{
        minWidth: { base: "300px", sm: "500px" },
        width: "100%",
        m: "auto",
      }}
      size="lg"
      colorScheme="yellow"
      index={activeStep}
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <StepIndicator>
              <StepStatus complete={`✅`} incomplete={`😅`} active={`📍`} />
            </StepIndicator>

            <Box whiteSpace={"nowrap"} display={{ base: "none", sm: "flex" }}>
              <StepDescription>{step.description}</StepDescription>
            </Box>
          </Box>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepperPrototype;
