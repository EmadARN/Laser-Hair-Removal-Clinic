import { createSlice } from "@reduxjs/toolkit";
import {
  cancelReserve,
  confirmInfo,
  EditCustomerInformation,
  getAsyncUserName,
  getCutomerList,
  getLazerAreaList,
  getreserveInformation,
  getSessionRecords,
  getTimeList,
  postAddTime,
  postCustomerInformation,
  postLazerAreaList,
} from "./customerThunks";

// Helper function to handle state updates
const handleAsyncState = (state, action, status) => {
  state.loading = status === "pending";
  if (status === "fulfilled") {
    state.error = "";
  } else if (status === "rejected") {
    state.error = action.payload;
  }
};

// Initial State
const initialState = {
  loading: false,
  error: "",
  areas: [],
  userReserveId: "",
  reserveInformation: [],
  timeList: [],
  confrimInfoDetail: [],
  userNames: "",
  customerList: [],
  sessionRecords: [],
};

const customerDashboardSlice = createSlice({
  name: "customerDashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Post CustomerInformation
      .addCase(postCustomerInformation.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(postCustomerInformation.fulfilled, (state, action) => {
        if (action.payload.router === action.payload.slug) {
          handleAsyncState(state, action, "fulfilled");
        } else {
          (state.loading = true), (state.error = "");
        }
      })
      .addCase(postCustomerInformation.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      })

      //EditCustomerInformation
      .addCase(EditCustomerInformation.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(EditCustomerInformation.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
      })
      .addCase(EditCustomerInformation.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      })

      // Fetch laser areas
      .addCase(getLazerAreaList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getLazerAreaList.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.areas = action.payload;
      })
      .addCase(getLazerAreaList.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      })

      // Post laser areas
      .addCase(postLazerAreaList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(postLazerAreaList.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        if (action.payload && action.payload.reserve) {
          state.userReserveId = action.payload.reserve;
        } else {
          console.error("Invalid payload structure:", action.payload);
          state.error = "Invalid payload structure";
        }
      })
      .addCase(postLazerAreaList.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      })

      // Fetch reserveInformation
      .addCase(getreserveInformation.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getreserveInformation.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.reserveInformation = action.payload;
      })
      .addCase(getreserveInformation.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      })

      // Fetch reserveInformation
      .addCase(getTimeList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getTimeList.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.timeList = action.payload;
      })
      .addCase(getTimeList.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      })

      // Post postAddTime
      .addCase(postAddTime.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(postAddTime.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
      })
      .addCase(postAddTime.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      })

      //post confirmInfo
      .addCase(confirmInfo.pending, (state) => {
        (state.loading = true), (state.error = "");
      })
      .addCase(confirmInfo.fulfilled, (state, action) => {
        state.confrimInfoDetail = action.payload;
        state.loading = false;
      })
      .addCase(confirmInfo.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      }) // fetch customerList
      .addCase(getCutomerList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })

      .addCase(getCutomerList.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.customerList = action.payload;
      })
      .addCase(getCutomerList.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      // getAsyncUserName
      .addCase(getAsyncUserName.pending, (state) => {
        handleAsyncState(state, {}, "pending");
      })
      .addCase(getAsyncUserName.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.userNames = action.payload;
      })
      .addCase(getAsyncUserName.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");

        //getSessionRecord
      })
      .addCase(getSessionRecords.pending, (state) => {
        handleAsyncState(state, {}, "pending");
      })
      .addCase(getSessionRecords.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.sessionRecords = action.payload;
      })
      .addCase(getSessionRecords.rejected, (state, action) => {
        handleAsyncState(state, action, "rejected");
      })
      // cancelReserve
      .addCase(cancelReserve.pending, (state) => {
        handleAsyncState(state, {}, "pending");
      })
      .addCase(cancelReserve.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(cancelReserve.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
      });
  },
});

export default customerDashboardSlice.reducer;
