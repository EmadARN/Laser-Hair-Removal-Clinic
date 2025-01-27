import api from "@/services/apiService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const logOutAsyncUsers = createAsyncThunk(
  "user/logout",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/Core/logout/", {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
const initialState = {
  loading: false,
  error: "",
};
const logOutSlice = createSlice({
  name: "logOut",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logOutAsyncUsers.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(logOutAsyncUsers.fulfilled, (state) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(logOutAsyncUsers.rejected, (state) => {
        state.loading = false;
        state.error = "";
      });
  },
});
export default logOutSlice.reducer;
