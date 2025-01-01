import { useDispatch, useSelector } from "react-redux";

const useStepper = () => {
  const dispatch = useDispatch();
  const { page, completedSteps } = useSelector((store) => store.steper);

  const handleNextStep = () => {
    if (!completedSteps.includes(page)) {
      dispatch(markStepComplete(page)); // مرحله جاری را تکمیل کنید
    }
    dispatch(nextStep()); // به مرحله بعد بروید
  };

  return {
    page,
    completedSteps,
    handleNextStep,
  };
};

export default useStepper;
