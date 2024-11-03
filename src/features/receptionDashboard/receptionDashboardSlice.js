import api from "@/services/apiService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Helper function to handle state updates
const handleAsyncState = (state, action, status) => {
  state.loading = status === "pending";
  if (status === "fulfilled") {
    state.error = "";
  } else if (status === "rejected") {
    state.error = action.payload;
  }
};

// Async Thunks

export const addCustomerWithOutTime = createAsyncThunk(
  "receptionDashboard/addCustomerWithOutTime",
  async (payload, { rejectWithValue }) => {
    console.log("payload success", payload);
    try {
      const { data } = await api.post(
        "/Core/add/customer/information/",
        payload,
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
          },
        }
      );
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const todayDate = createAsyncThunk(
  "receptionDashboard/todayDate",
  async (payload, { rejectWithValue }) => {
    console.log("payload success", payload);
    try {
      const { data } = await api.post(
        "/Reserve/reserve/list/",
        {
          from_: "",
          to: "",
        },
        {
          headers: {
            Authorization: `Bearer ${payload.auth_Employee_token}`,
          },
        }
      );
      return data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

// Initial State
const initialState = {
  loading: false,
  error: "",
  todayReserve: null,
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
      });
  },
});

export default receptionDashboardSlice.reducer;
