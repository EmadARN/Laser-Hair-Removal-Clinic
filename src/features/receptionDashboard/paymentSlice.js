import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedReserve: null,
  idKeeper: "",
  selectedValue: "",
  selectedValue2: "",
  paymentPriceKepper1: null,
  paymentPriceKepper2: null,
  oneWayPaymentValu: "",
  confrimChange: false,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setSelectedReserve: (state, action) => {
      state.selectedReserve = action.payload;
    },
    setIdKeeper: (state, action) => {
      state.idKeeper = action.payload;
    },
    setSelectedValue: (state, action) => {
      state.selectedValue = action.payload;
    },
    setSelectedValue2: (state, action) => {
      state.selectedValue2 = action.payload;
    },
    setPaymentPriceKepper1: (state, action) => {
      state.paymentPriceKepper1 = action.payload;
    },
    setPaymentPriceKepper2: (state, action) => {
      state.paymentPriceKepper2 = action.payload;
    },
    setOneWayPaymentValue: (state, action) => {
      state.oneWayPaymentValu = action.payload;
    },
    setConfirmChange: (state, action) => {
      state.confrimChange = action.payload;
    },
  },
});

export const {
  setSelectedReserve,
  setIdKeeper,
  setSelectedValue,
  setSelectedValue2,
  setPaymentPriceKepper1,
  setPaymentPriceKepper2,
  setOneWayPaymentValue,
  setConfirmChange,
} = paymentSlice.actions;

export default paymentSlice.reducer;
