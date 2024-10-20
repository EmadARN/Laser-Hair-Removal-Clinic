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
export const getAsyncUsersList = createAsyncThunk(
  "admin/getAsyncUsersList",
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().adminDashboard;
    try {
      const { data } = await api.get("/Core/user/list/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Initial State
const initialState = {
  loading: false,
  error: "",
  areas: [],
  token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
};

const receptionDashboardSlice = createSlice({
  name: "receptionDashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Fetch Area list
      .addCase(getAsyncUsersList.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getAsyncUsersList.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(getAsyncUsersList.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.users = action.payload;
      });
  },
});

export default receptionDashboardSlice.reducer;
