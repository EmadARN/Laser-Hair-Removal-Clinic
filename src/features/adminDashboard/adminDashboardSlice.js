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
export const postAsyncLogin = createAsyncThunk(
  "user/postAsyncLogin",
  async (payload, { rejectWithValue }) => {
    console.log("payload::", payload);

    try {
      const { data } = await api.post("/Core/login/", payload);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addAsyncUsers = createAsyncThunk(
  "user/addAsyncUsers",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/Core/signup/admin/", payload);
      alert("User Created Successfully");

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);
// Initial State
const initialState = {
  loading: false,
  error: "",
  users: [],
  token: null,
};

const adminDashboardSlice = createSlice({
  name: "adminDashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postAsyncLogin.pending, (state) =>
        handleAsyncState(state, {}, "pending")
      )
      .addCase(postAsyncLogin.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.users.push(action.payload);
        state.token = action.payload.token;
      })
      .addCase(postAsyncLogin.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      )
      .addCase(addAsyncUsers.pending, (state) =>
        handleAsyncState(state, {}, "pending")
      )
      .addCase(addAsyncUsers.fulfilled, (state, action) => {
        handleAsyncState(state, action, "fulfilled");
        state.users.push(action.payload);
        state.token = action.payload.token;
      })
      .addCase(addAsyncUsers.rejected, (state, action) =>
        handleAsyncState(state, action, "rejected")
      );
  },
});

export default adminDashboardSlice.reducer;
