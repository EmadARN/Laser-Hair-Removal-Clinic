import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0, // مرحله فعلی
  completedSteps: [], // مراحل تکمیل شده
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.page += 1; // به مرحله بعدی بروید
    },
    resetStep: (state) => {
      state.page = 0; // ریست مرحله به ۰
    },
    markStepComplete: (state, action) => {
      const stepIndex = action.payload;
      if (!state.completedSteps.includes(stepIndex)) {
        state.completedSteps.push(stepIndex); // مرحله را به عنوان تکمیل شده علامت‌گذاری کنید
      }
    },
    resetCompletedSteps: (state) => {
      state.completedSteps = []; // پاک کردن لیست مراحل تکمیل شده
    },
  },
});

export const { nextStep, resetStep, markStepComplete, resetCompletedSteps } =
  stepSlice.actions;

export default stepSlice.reducer;
