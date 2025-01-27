import { createSlice } from "@reduxjs/toolkit";
import {
  addcharge,
  addCustomerWithOutTime,
  addSignupCustomer,
  cancelReserve,
  enterExitedOprators,
  getCutomerList,
  getLazerAreas,
  getOperatorSchedule,
  multiplePayment,
  ReserveReceptionWithOutTime,
  reservesListPerson,
  todayDate,
} from "./receptionThunks";

// Helper function to handle state updates
const handleAsyncState = (state, action, status) => {
  state.loading = status === "pending";
  if (status === "fulfilled") {
    state.error = false;
  } else if (status === "rejected") {
    state.error = action.payload;
  }
};

// Initial State
const initialState = {
  loading: false,
  error: "",
  todayReserve: null,
  cutomerList: [],
  operatorSchedule: {},
  LazerAreas: [],
  reservesLists: [],
};

const receptionDashboardSlice = createSlice({
  name: "receptionDashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // addCustomerWithOutTime
      .addCase(addCustomerWithOutTime.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(addCustomerWithOutTime.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(addCustomerWithOutTime.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
      })
      // addSignupCustomer
      .addCase(addSignupCustomer.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(addSignupCustomer.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(addSignupCustomer.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
      })

      //ReserveReceptionWithOutTime
      .addCase(ReserveReceptionWithOutTime.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(ReserveReceptionWithOutTime.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(ReserveReceptionWithOutTime.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
      })

      // fetch customerList
      .addCase(getCutomerList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getCutomerList.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(getCutomerList.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.cutomerList = action.payload;
      })

      // todayDate
      .addCase(todayDate.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(todayDate.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(todayDate.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.todayReserve = action.payload;
      })

      // cancelReserve
      .addCase(cancelReserve.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(cancelReserve.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(cancelReserve.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
      })

      // fetch getOperatorSchedule
      .addCase(getOperatorSchedule.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getOperatorSchedule.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(getOperatorSchedule.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.operatorSchedule = action.payload;
      })

      // enterExitedOprators
      .addCase(enterExitedOprators.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(enterExitedOprators.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(enterExitedOprators.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
      })

      // fetch getLazerAreas
      .addCase(getLazerAreas.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getLazerAreas.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(getLazerAreas.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.LazerAreas = action.payload;
      })
      // fetch reservesListPerson
      .addCase(reservesListPerson.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(reservesListPerson.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(reservesListPerson.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");

        state.reservesLists = action.payload;
      })
      // fetch reservesListPerson
      .addCase(addcharge.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(addcharge.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(addcharge.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
      })
      //post payment
      .addCase(multiplePayment.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(multiplePayment.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(multiplePayment.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
      });
  },
});

export default receptionDashboardSlice.reducer;
